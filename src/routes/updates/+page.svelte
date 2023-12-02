<script lang="ts">
  export let data;
  const { updates } = data;
</script>

{#if !updates?.length}
  <div>No updates</div>
{:else}
  <ul>
    {#each updates as update}
      <li class="outline w-[95%] mx-auto p-5">
        <div class="text-2xl font-bold">{update.subject}</div>
        <div class="flex gap-2 text-xs py-2">
          <div>
            {new Date(Date.parse(update.created_at)).toLocaleDateString()}
          </div>
          <div>
            {new Date(Date.parse(update.created_at)).toLocaleTimeString()}
          </div>
        </div>
        <div class="text-lg">{update.updated_notes}</div>
      </li>
    {/each}
  </ul>
{/if}
