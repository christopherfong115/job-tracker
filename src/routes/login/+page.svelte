<script lang="ts">
  import { enhance } from "$app/forms";
</script>

<form
  method="POST"
  use:enhance
  action="?/login"
  class="absolute left-1/2 top-1/2 w-[35%] -translate-y-1/2 -translate-x-1/2 flex flex-col gap-2 text-white"
>
  <div class="text-2xl font-bold underline decoration-purple-600 decoration-4">
    Login
  </div>
  <div>Email</div>
  <input
    class="bg-slate-100 py-4 px-4 w-full text-black"
    type="email"
    name="email"
    required
    placeholder="johndoe@email.com"
  />
  <div>Password</div>
  <input
    class="bg-slate-100 py-4 px-4 w-full text-black"
    type="password"
    name="password"
    required
    placeholder="***********"
  />
  <button class="py-2 px-4 rounded-2xl bg-purple-500 text-white font-bold"
    >Login</button
  >
  <div>
    Don't have an account?
    <a
      class="text-blue-500 underline decoration-blue-500 font-semibold"
      href="/signup">Create an account.</a
    >
  </div>
</form>
