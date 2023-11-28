import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  const { data: users, error: err } = await locals.supabase
    .from("users")
    .select("id");

  const session = await locals.getSession();

  return { users, session };
};
