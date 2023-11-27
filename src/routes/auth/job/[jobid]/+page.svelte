<script lang="ts">
  import type { PageServerData } from "./$types";

  export let data: PageServerData;
  const { session, filter } = data;
  let editStatus = true;
</script>

<div
  class="flex flex-col gap-5 w-fit absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 outline shadow-2xl p-10"
>
  <h1 class="font-extrabold underline decoration-2 decoration-red-500">
    {filter.company}
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
      <button
        on:click={(e) => {
          e.preventDefault();
          editStatus = true;
        }}>Save</button
      >
    </form>
  {:else}
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
