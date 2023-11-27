import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.getSession();

  if (!session) {
    throw redirect(306, "/");
  }

  const { data: interviewNotes, error: err } = await locals.supabase
    .from("interview_notes")
    .select("*")
    .eq("userid", session.user.id);

  console.log(interviewNotes);

  return { session, interviewNotes };
};
