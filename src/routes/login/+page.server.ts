import { AuthApiError } from "@supabase/supabase-js";
import { redirect, type Actions, fail } from "@sveltejs/kit";

export const actions: Actions = {
  login: async ({ request, locals }) => {
    const body = await request.formData();
    const email = body.get("email");
    const password = body.get("password");

    const { data, error: err } = await locals.supabase.auth.signInWithPassword({
      email: email as string,
      password: password as string,
    });

    if (err) {
      if (err instanceof AuthApiError && err.status === 400) {
        return fail(400, {
          error: "Invalid credentials.",
          values: {
            email,
          },
        });
      }
      return fail(500, {
        error: "Server error. Try again later.",
        values: {
          email,
        },
      });
    }

    throw redirect(303, "/");
  },
};
