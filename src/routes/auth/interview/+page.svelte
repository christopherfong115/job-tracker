<script lang="ts">
  export let data;
  const { session, interviewNotes } = data;
</script>

<div>
  {#if !interviewNotes}
    <div>Bad request, try refreshing</div>
  {:else if interviewNotes.length == 0}
    <div>No notes? Create one <a href="/auth/create/note"> here </a></div>
  {:else}
    <div class="flex flex-col gap-6 w-11/12 mx-auto font-semibold">
      <a
        class="mx-auto outline px-4 py-1 rounded-2xl hover:outline-blue-500 hover:text-blue-500"
        href="/auth/create/note">+ Note</a
      >
      {#each interviewNotes as notes}
        <div
          class="outline p-2 hover:bg-slate-800 shadow-2xl selection:bg-green-500 selection:text-white"
        >
          <div>
            Company: {notes.company}
          </div>
          <div>
            Notes: {notes.note}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
