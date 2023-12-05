<script lang="ts">
  import type { ActionData, PageServerData } from "./$types";

  export let data: PageServerData;
  export let form: ActionData;
  const { session, filter } = data;
  let editStatus = true;
</script>

<div
  class="flex flex-col gap-5 w-1/5 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 outline shadow-2xl p-10 text-black bg-white -outline-offset-8"
>
  <div class="flex justify-between">
    <a
      class="font-bold hover:underline decoration-blue-500 decoration-2 w-fit bg-slate-400 rounded-full px-3 text-center hover:bg-slate-300"
      href="/auth/jobs">{"x"}</a
    >
    <form method="POST" action="?/deleteJob">
      <button class="bg-red-500 text-white font-bold px-2">Delete Job</button>
    </form>
  </div>
  <h1 class="font-extrabold">
    <div class="underline decoration-2 decoration-red-500">
      {filter.company}
    </div>
  </h1>
  <div class="flex gap-10">
    <h1>{filter.position}</h1>
    <div>{filter.term}</div>
  </div>
  {#if editStatus == false}
    <form method="POST" action="?/changeStatus" class="flex gap-2">
      <div>Status:</div>
      <input
        class="outline"
        type="text"
        required
        name="status"
        maxlength="10"
        placeholder={filter.status}
      />
      <button>Save</button>
    </form>
  {:else if editStatus}
    <div class="flex gap-2">
      <div>Status:</div>
      <div>
        {filter.status}
      </div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={(e) => {
          editStatus = false;
        }}
        class="pl-10 underline text-blue-500"
      >
        Edit
      </div>
    </div>
  {/if}
  <div>
    <div>Applied on:</div>
    {new Date(Date.parse(filter.created_at)).toDateString()}
  </div>
  <div>
    Comments:

    <div>{filter.comments}</div>
  </div>
</div>
