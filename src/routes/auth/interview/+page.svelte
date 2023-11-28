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
      {#each interviewNotes as notes}
        <div
          class="outline p-2 hover:bg-slate-50 shadow-2xl selection:bg-green-500 selection:text-white"
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
