<script lang="ts">
  const paths = [
    ["Interview Timeline Notes", "#timeline"],
    ["Question Notes", "#question"],
  ];
</script>

<div class="text-white min-h-screen">
  <nav class="">
    <ul class="flex gap-5 mx-auto w-fit decoration-2 h-full py-2">
      {#each paths as path}
        <li
          class="hover:bg-gradient-to-b text-2xl hover:text-blue-500 underline hover:decoration-blue-500"
        >
          <a href={path[1]}>{path[0]}</a>
        </li>
      {/each}
    </ul>
  </nav>
  <slot />
</div>
