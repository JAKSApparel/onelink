<template>
  <div class="flex justify-center items-center h-full">
    <div
      class="h-[60vh] w-[80vw] md:h-[729px] md:w-[340px] overflow-y-auto rounded-[2rem] ring-8 ring-slate-800 overflow-hidden"
    >
      <templates-simple :acc="data" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
