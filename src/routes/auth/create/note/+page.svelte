<script lang="ts">
  import { enhance } from "$app/forms";
</script>

<div>
  <form
    method="POST"
    use:enhance
    action="?/saveNote"
    class="w-fit mx-auto flex flex-col gap-4 outline p-10 bg-gradient-to-b from-white to-amber-300"
  >
    <div>Company</div>
    <input
      type="text"
      name="company"
      required
      class="outline w-1/5"
      placeholder="Google, Amazon, Meta etc."
    />
    <div>Notes</div>
    <textarea
      name="notes"
      maxlength="999"
      class="w-[1500px] h-80 outline resize-none p-2"
      placeholder="This is a good place to put any notes of your interview such as questions asked and what you had to complete such as OA's, the timeline process etc."
    />
    <button
      class="bg-sky-400 text-center py-2 px-4 rounded-2xl translate-y-3 w-full"
      >Save</button
    >
  </form>
</div>
