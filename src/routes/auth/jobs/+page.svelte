<script lang="ts">
  import type { PageServerData } from "./$types";

  let pageSize = 10;
  export let data: PageServerData;
  const { jobs } = data;
  // $: totalItems = data.jobs?.length || 1;
  // $: totalPages = Math.ceil(totalItems / pageSize) || 10;
</script>

<div class="flex flex-col gap-2">
  <div
    class="grid grid-cols-6 font-extrabold outline bg-gradient-to-b from-white to-amber-200 items-center px-4 py-2"
  >
    <div>Company</div>
    <div>View</div>
    <div>Position</div>
    <div>Term</div>
    <div>Status</div>
    <div>Comments</div>
  </div>
  {#if !jobs}
    <div>No Jobs Available</div>
  {:else if jobs.length == 0}
    <div>You have no jobs add one here</div>
  {:else}
    {#each jobs as job}
      <div
        class="grid grid-cols-6 bg-slate-200 items-center max-w-screen px-4 py-2"
      >
        <div class="font-semibold">{job.company}</div>
        <a class="font-bold" href="/auth/job/{job.jobid}">o</a>
        <div>{job.position}</div>
        <div>{job.term}</div>
        <div>{job.status}</div>
        <div class="w-fit break-all">
          {#if job.comments == null}
            <div />
          {:else}
            <a class="text-blue-500 underline" href={job.comments}
              >{job.comments}</a
            >
          {/if}
        </div>
      </div>
    {/each}
    <!-- <div class="pagination">
      {#each Array(totalPages) as _, idx}
        <a href="/auth/jobs?limit={pageSize}&skip={pageSize * idx}">
          {idx + 1}
        </a>
      {/each}
    </div> -->
  {/if}
</div>
