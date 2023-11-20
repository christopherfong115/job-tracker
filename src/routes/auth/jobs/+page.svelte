<script lang="ts">
  import type { PageData } from "./$types";

  type Job = {
    id: number;
    position: string;
    term: string;
    status: string;
    comments: string;
  };

  export let data: PageData;
  let { session, jobs } = data;
</script>

<div class="flex flex-col gap-2">
  <div
    class="grid grid-cols-5 font-extrabold outline bg-gradient-to-b from-white to-amber-200 items-center"
  >
    <div>Company</div>
    <div>Position</div>
    <div>Term</div>
    <div>Status</div>
    <div>Comments</div>
  </div>
  {#if !jobs}
    <div>No Jobs Available</div>
  {:else}
    {#each jobs as job}
      <div class="grid grid-cols-5 bg-slate-200 items-center max-w-screen">
        <div class="">{job.company}</div>
        <div>{job.position}</div>
        <div>{job.term}</div>
        <div>{job.status}</div>
        <div class="w-fit break-all">{job.comments}</div>
      </div>
    {/each}
  {/if}
</div>
