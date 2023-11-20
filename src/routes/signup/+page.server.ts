import { AuthApiError } from "@supabase/supabase-js";
import type { Actions } from "@sveltejs/kit";
import { fail, redirect } from "@sveltejs/kit";

export const actions: Actions = {
  register: async ({ request, locals }) => {
    const body = await request.formData();

    const name = body.get("name");
    const email = body.get("email");
    const password = body.get("password");

    const { data, error: err } = await locals.supabase.auth.signUp({
      email: email as string,
      password: password as string,
    });

    const { error: err2 } = await locals.supabase.from("users").insert({
      name: name,
      provider: "basic",
      email: email,
      sessionuserid: data.user?.id,
    });

    if (err2) {
      console.log(err2);
    }

    if (err) {
      if (err instanceof AuthApiError && err.status === 400) {
        return fail(400, {
          error: "Invalid credentials.",
        });
      }
      return fail(500, {
        error: "Server error. Try again later.",
      });
    }

    throw redirect(303, "/");
  },
};
