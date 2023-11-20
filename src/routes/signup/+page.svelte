<script lang="ts">
  import { enhance } from "$app/forms";
</script>

<form
  method="POST"
  action="?/register"
  use:enhance
  class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-4 outline py-10 px-16"
>
  <h1 class="text-center">Register</h1>
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
  <button class="bg-purple-400 w-fit px-6 py-2 rounded-2xl">Create</button>
</form>
