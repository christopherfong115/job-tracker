<script lang="ts">
  import type { PageServerData } from "./$types";

  export let data: PageServerData;
  const { session, filter } = data;
</script>

<div
  class="flex flex-col gap-5 w-fit absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 outline shadow-2xl p-10"
>
  <h1 class="font-extrabold underline decoration-2 decoration-red-500">
    {filter.company}
  </h1>
  <div class="flex gap-10">
    <h1>{filter.position}</h1>
    <div>{filter.term}</div>
  </div>
  <form class="flex gap-2">
    <div>Status:</div>
    {filter.status}
  </form>
  <div>
    <div>Applied on:</div>
    {new Date(Date.parse(filter.created_at)).toDateString()}
  </div>
  <div>
    Comments:

    <div>{filter.comments}</div>
  </div>
</div>
