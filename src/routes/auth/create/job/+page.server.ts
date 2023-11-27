import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  addJob: async ({ request, locals }) => {
    const body = await request.formData();
    const company = await body.get("company");
    const position = await body.get("position");
    const term = await body.get("term");
    const status = await body.get("status");
    const comments = await body.get("comments");

    const session = await locals.getSession();

    if (!session) {
      throw redirect(303, "/unauth");
    }

    const { data: addedJob, error: err } = await locals.supabase
      .from("jobs")
      .insert({
        company: company,
        position: position,
        term: term,
        status: status,
        comments: comments,
        userid: session.user.id,
        updated_at: new Date(),
      });

    throw redirect(303, "/auth/jobs");
  },
};
