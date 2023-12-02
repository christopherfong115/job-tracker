<script lang="ts">
  import type { PageServerData } from "./$types";

  export let data: PageServerData;
  const { users, session } = data;
</script>

<!-- bg-gradient-to-b from-white to-indigo-300  -->
<div class="text-white h-screen">
  <div class="grid grid-cols-2 justify-items-center items-center p-10">
    <div
      class="font-extrabold underline underline-offset-8 decoration-blue-500 decoration-4 text-2xl selection:bg-indigo-300 selection:text-white"
    >
      Do you want to manage your applications easier and succeed in your job
      application journey?
    </div>
    <div>
      <img class="w-[300px] h-[320px]" alt="jomatech" src="/jomatechceo.jpg" />
      <div class="text-sm text-center font-semibold pt-2">
        Joma Tech, <strong> CEO </strong>
        of Blindr , Forbes 30 by 30
      </div>
    </div>
  </div>
  <div
    class="flex gap-4 items-center px-10 selection:bg-indigo-300 selection:text-white"
  >
    Well come and explore our app! We have a whopping
    <div class="text-2xl font-extrabold">
      {users?.length || 0}
    </div>
    users on our website! You too can join us! P.S. Our jobs page doesnt have pagination
    yet so please make use of the fully functional search bar!
  </div>
  <div class="px-10 selection:bg-indigo-300 selection:text-white">
    Also we dont support mobile view lol thats not in the budget.
  </div>

  {#if !session}
    <div class="px-10">Register Here:</div>
    <a
      href="/signup"
      class="text-5xl font-extrabold text-white bg-amber-400 block text-center py-10 rounded-2xl w-[90%] mx-auto"
      >SIGN UP</a
    >
  {/if}
</div>
