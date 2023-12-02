<script lang="ts">
</script>

<form
  method="POST"
  action="?/addJob"
  class="flex flex-col outline w-1/2 p-10 absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 gap-2 text-black"
>
  <a class="font-extrabold px-2" href="/auth/jobs">X</a>
  <div class="underline font-bold decoration-purple-500 decoration-2">
    Company:
  </div>
  <input
    class="outline outline-1 outline-slate-500 px-2 py-1"
    name="company"
    required
    maxlength="25"
    type="text"
    placeholder="Amazon"
  />
  <div class="underline font-bold decoration-purple-500 decoration-2">
    Position:
  </div>
  <input
    class="outline outline-1 outline-slate-500 px-2 py-1"
    name="position"
    required
    maxlength="25"
    type="text"
    placeholder="SWE"
  />
  <div class="underline font-bold decoration-purple-500 decoration-2">
    Term:
  </div>
  <select
    class="outline outline-1 outline-slate-500 px-2 w-fit"
    name="term"
    required
  >
    <option value="Winter 2024">Winter 2024</option>
    <option value="Summer 2024">Summer 2024</option>
    <option value="Fall 2024">Fall 2024</option>
  </select>
  <div class="underline font-bold decoration-purple-500 decoration-2">
    Status:
  </div>
  <input
    class="outline outline-1 outline-slate-500 px-2 py-1"
    name="status"
    required
    maxlength="25"
    type="text"
    placeholder="OA, Accepted, Interview, etc."
  />
  <div class="underline font-bold decoration-purple-500 decoration-2">
    Comments:
  </div>
  <input
    class="outline outline-1 outline-slate-500 px-2 py-1"
    name="comments"
    required
    maxlength="250"
    type="text"
    placeholder="Anything such as related links or reminders"
  />
  <button
    class="mt-5 bg-amber-400 text-white font-extrabold rounded-xl shadow-2xl outline outline-purple-500 py-2"
    >Save</button
  >
</form>
