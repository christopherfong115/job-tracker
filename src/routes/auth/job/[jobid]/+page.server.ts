import { fail, redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, locals }) => {
  const session = await locals.getSession();

  if (!session) {
    throw redirect(303, "/");
  }

  const { data, error } = await locals.supabase.from("jobs").select("*");

  if (!data) {
    return fail(500, {
      error: "Server error. Try again later.",
    });
  }

  const filter = data.find((job) => job.jobid == params.jobid);

  return { session, filter };
};

export const actions: Actions = {
  changeStatus: async ({ request, locals, params }) => {
    const body = await request.formData();
    const status = await body.get("status");

    const { data: updatedStatus, error: err } = await locals.supabase
      .from("jobs")
      .update({ status: status })
      .eq("jobid", params.jobid)
      .select();

    console.log(updatedStatus);

    return { updatedStatus, success: true };
  },
};
