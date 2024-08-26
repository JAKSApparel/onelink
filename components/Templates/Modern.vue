<template>
    <main class="p-6 bg-gray-100 h-full w-full space-y-10 pt-14 max-w-lg mx-auto rounded-lg shadow-lg">
      <div class="flex flex-col items-center">
        <div
          v-if="acc.i"
          class="h-24 w-24 rounded-full overflow-hidden border-4 border-gray-300"
        >
          <img :src="acc.i" alt="name" class="h-full w-full object-cover" />
        </div>
        <h1 v-if="acc.n" class="text-3xl font-semibold mt-5 text-gray-900">
          {{ acc.n }}
        </h1>
        <p v-if="acc.d" class="text-base mt-3 text-gray-600 text-center">
          {{ acc.d }}
        </p>
      </div>
    </main>
  </template>
  
  <script setup>
  const props = defineProps({
    acc: {
      type: Object,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  /* Custom styles for modern template */
  </style>
  