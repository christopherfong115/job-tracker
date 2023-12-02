import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async ({ locals }) => {
  const { data: updates, error: err } = await locals.supabase
    .from("updates")
    .select("*");
  return { updates };
};
