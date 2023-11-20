import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.getSession();

  if (!session) {
    throw redirect(306, "/");
  }

  const { data: jobs, error: errJobs } = await locals.supabase
    .from("jobs")
    .select("*")
    .eq("userid", session.user.id)
    .order("created_at", { ascending: true });

  console.log(jobs);

  return { session, jobs };
};
