<template>
  <div class="w-20 grid grid-cols-2 cursor-pointer" @click="$router.push('/')">
    <svg
      class="h-8 w-8 text-black"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="5" y1="12" x2="9" y2="16" />
      <line x1="5" y1="12" x2="9" y2="8" />
    </svg>
    <div class="text-black">Back</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
