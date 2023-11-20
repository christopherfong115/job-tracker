<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";
  import "../app.css";

  export let data;

  const paths = [["Resume Review", "/resume"], [""]];

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

<div>
  <div>
    <nav>
      <div>Home</div>
      <ul>
        <li />
      </ul>
    </nav>
  </div>
  <slot />
</div>
