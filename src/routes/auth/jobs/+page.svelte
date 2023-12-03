<script lang="ts">
  import { createSearchStore, searchHandler } from "$lib/stores/jobs";
  import { onDestroy } from "svelte";
  import type { PageServerData } from "./$types";
  import Icon from "@iconify/svelte";
  import { enhance } from "$app/forms";

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
    updated_at: string;
    favourite: boolean;
  };

  const jobsSearch: Job[] =
    jobs?.map((job: Job) => ({
      ...job,
      searchTerms: `${job.id} ${job.company} ${job.position} ${job.term} ${
        job.comments
      } ${job.jobid} ${job.status} ${new Date(job.created_at).toDateString()}`,
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
    class="px-4 w-1/3 mx-auto mb-5 py-2 rounded-2xl outline outline-offset-4 outline-slate-500 translate-x-4 shadow-2xl font-bold text-white bg-slate-500"
    placeholder="Search for your jobs..."
    type="text"
    maxlength="1000"
  />
  <button
    on:click={(e) => {
      $searchStore.search = "";
    }}
    class="z-50 absolute font-extrabold text-white translate-y-2 -translate-x-4 bg-slate-500 pl-2"
    >X</button
  >
</div>

<div
  class="flex gap-4 items-center pb-4 px-4 text-sm justify-between text-white"
>
  <div>
    Little tip: Type 'today' to get all jobs that you have applied today! To
    find a specific day, type in the format 'ddd mmm dd yyyy'
  </div>
  <!-- <div>Sort Job Posting Applied Date:</div>
  <button
    class="bg-emerald-500 px-4 py-1 rounded-2xl hover:bg-emerald-400 text-white font-bold"
    >Up</button
  >
  <button
    class="bg-red-500 hover:bg-red-400 text-white font-bold px-4 py-1 rounded-2xl"
    >Down</button
  > -->
  <div>
    <a
      class="text-xl font-bold outline px-4 rounded-2xl hover:outline-blue-500 hover:text-blue-500 py-1"
      href="/auth/create/job">+ Job</a
    >
  </div>
</div>

<div class="flex flex-col gap-4">
  <div
    class="grid grid-cols-6 font-extrabold outline bg-gradient-to-b from-white to-amber-400 items-center px-4 py-2 text-slate-600"
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
        class="grid grid-cols-6 bg-blue-700 bg-opacity-20 outline outline-white/50 rounded-2xl hover:bg-sky-700 items-center max-w-screen px-4 py-2 text-white"
      >
        <div>{job.company}</div>
        <!-- {#if job.favourite}
          <form method="POST" action="?/favouriteJob" class="flex gap-4">
            <div class="font-semibold">{job.company}</div>
            <input name="jobid" value={job.jobid} hidden />
            <button class="">
              <Icon
                class="bg-amber-500"
                icon="material-symbols-light:star-outline"
              />
            </button>
          </form>
        {:else}
          <form method="POST" action="?/unfavouriteJob" class="flex gap-4">
            <div class="font-semibold">{job.company}</div>
            <input name="jobid" value={job.jobid} hidden />
            <button class="">
              <Icon class="" icon="material-symbols-light:star-outline" />
            </button>
          </form>
        {/if} -->
        <a class="font-bold" href="/auth/job/{job.jobid}">o</a>
        <div>{job.position}</div>
        <div>{job.term}</div>
        <div>{job.status}</div>
        <div class="w-fit break-all">
          {#if job.comments == null}
            <div />
          {:else}
            <a class="text-amber-500 underline" href={job.comments}
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
