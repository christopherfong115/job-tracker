<script lang="ts">
  import { enhance } from "$app/forms";
</script>

<form
  method="POST"
  action="?/register"
  use:enhance
  class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-4 outline py-10 px-16 bg-sky-400"
>
  <h1 class="text-center font-bold">Register</h1>
  <div>Full Name</div>
  <input
    class="bg-slate-200/60 py-4 px-4 w-96"
    type="text"
    name="name"
    required
    placeholder="John Doe"
  />
  <div>Email</div>
  <input
    class="bg-slate-200/60 py-4 px-4 w-96"
    type="text"
    name="email"
    required
    placeholder="johndoe@email.com"
  />
  <div>Password</div>
  <input
    class="bg-slate-200/60 py-4 px-4 w-96"
    type="password"
    name="password"
    required
    placeholder="***********"
  />
  <div>Confirm Password</div>
  <input
    class="bg-slate-200/60 py-4 px-4 w-96"
    type="password"
    name="confirmpassword"
    required
    placeholder="***********"
  />
  <div class="w-full mx-auto flex flex-col items-center">
    <button
      class="bg-amber-300 hover:bg-amber-400 w-full py-2 rounded-2xl font-semibold text-white"
      >Create</button
    >
    <div class="flex gap-2">
      <div>Already have an account?</div>
      <div>
        Sign in <a
          class="text-red-500 hover:text-red-600 underline"
          href="/login">here</a
        >
      </div>
    </div>
  </div>
</form>
