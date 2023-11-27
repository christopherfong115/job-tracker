import { redirect, type Actions, error } from "@sveltejs/kit";

export const actions: Actions = {
  saveNote: async ({ request, locals }) => {
    const session = await locals.getSession();
    if (!session) {
      throw error(404, "Unauthorized Request");
    }
    const body = await request.formData();
    const company = await body.get("company");
    const notes = await body.get("notes");

    console.log(company);

    const { data: note, error: err } = await locals.supabase
      .from("interview_notes")
      .insert({ note: notes, userid: session.user.id, company: company })
      .select("*");

    console.log(note);
  },
};
