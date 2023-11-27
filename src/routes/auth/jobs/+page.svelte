<script lang="ts">
  import { createSearchStore, searchHandler } from "$lib/stores/jobs";
  import { onDestroy } from "svelte";
  import type { PageServerData } from "./$types";

  let pageSize = 10;
  export let data: PageServerData;
  const { jobs } = data;
  type Job = {
    id: number;
    status: string;
    created_at: string;
    company: string;
    position: string;
    term: string;
    comments: string;
    jobid: string;
  };
  const jobsSearch: Job[] =
    jobs?.map((job: Job) => ({
      ...job,
      searchTerms: `${job.id} ${job.company} ${job.position} ${job.term} ${job.comments} ${job.jobid} ${job.status}`,
    })) || [];

  const searchStore = createSearchStore(jobsSearch);

  const unsubscribe = searchStore.subscribe((model) => searchHandler(model));
  onDestroy(() => {
    unsubscribe();
  });
</script>

<div>
  <input
    bind:value={$searchStore.search}
    class="px-4 w-5/6 mx-auto mb-5 py-2 rounded-2xl outline outline-offset-4 outline-slate-500 translate-x-4 shadow-2xl font-bold text-white bg-slate-500"
    placeholder="Search for your jobs..."
    type="text"
    maxlength="1000"
  />
</div>

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
    {#each $searchStore.filtered as job}
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
