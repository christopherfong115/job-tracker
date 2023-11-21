<script lang="ts">
  export let data;
  const { session, interviewNotes } = data;
</script>

<div>
  {#if !interviewNotes}
    <div>Bad request, try refreshing</div>
  {:else if interviewNotes.length == 0}
    <div>No notes? Create one here</div>
  {:else}
    {#each interviewNotes as notes}
      <div>
        {notes.company}
      </div>
      <div>
        {notes.text}
      </div>
    {/each}
  {/if}
</div>
