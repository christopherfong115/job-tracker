<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";
  import "../app.css";

  export let data;

  const paths = [
    ["Jobs List", "/auth/jobs"],
    ["+ Jobs", "/auth/create/job"],
    ["Interview", "/auth/interview"],
    ["+ Note", "/auth/create/note"],
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

<div class="bg-transparent">
  <div>
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
        <form action="/logout" method="POST"><button>Signout</button></form>
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
