<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";
  import "../app.css";

  export let data;

  const paths = [
    ["Jobs List", "/auth/jobs"],
    ["Interview", "/auth/interview"],
    ["Site Updates", "/updates"],
  ];

  const { supabase, session } = data;
  // $: ({ supabase, session } = data)

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth");
      }
    });

    return () => data.subscription.unsubscribe();
  });
</script>

<div class="text-white">
  <div class="text-white">
    <nav class="flex justify-between items-center p-7 font-bold">
      <div class="flex gap-2">
        <div><a href="/">Home</a></div>
        <div>|</div>
        <div><a href="/about">About</a></div>
      </div>
      {#if data.session}
        <ul class="flex gap-5">
          {#each paths as path}
            <li
              class="outline px-4 py-2 rounded-2xl hover:underline hover:text-blue-500"
            >
              <a href={path[1]}>{path[0]}</a>
            </li>
          {/each}
        </ul>
        <form
          class="hover:text-blue-500 hover:underline decoration-blue-500"
          action="/logout"
          method="POST"
        >
          <button>Signout</button>
        </form>
      {:else}
        <div class="flex gap-4">
          <div class="hover:text-blue-600 hover:underline">
            <a href="/login">Login</a>
          </div>
          <div class="hover:text-blue-600 hover:underline">
            <a href="/signup">Register</a>
          </div>
        </div>
      {/if}
    </nav>
  </div>
  <slot />
</div>

<style>
  :global(body) {
    background-color: #0d0d0d;
  }
</style>
