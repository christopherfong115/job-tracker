import { fail, redirect } from "@sveltejs/kit";
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
