import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { Session } from "@supabase/supabase-js";

export const load: PageServerLoad = async ({ url, locals }) => {
  const session = await locals.getSession();
  const limit = Number(url.searchParams.get("limit")) || 10;
  const skip = Number(url.searchParams.get("skip")) || 0;

  if (!session) {
    throw redirect(306, "/");
  }

  async function getJobs(
    limit: number = 10,
    skip: number = 0,
    session: Session
  ) {
    if (limit > 100) {
      throw error(400, "Bad Request");
    }
    const { data: jobs, error: errJobs } = await locals.supabase
      .from("jobs")
      .select("*")
      .eq("userid", session.user.id)
      .order("created_at", { ascending: true });
    // .range(skip, limit);
    return jobs;
  }

  return {
    jobs: getJobs(limit, skip, session),
  };
};
