<template>
    <main class="p-8 bg-gray-900 text-white h-full w-full max-w-lg mx-auto rounded-lg shadow-lg">
      <div class="text-center">
        <div
          v-if="acc.i"
          class="h-24 w-24 rounded-full overflow-hidden border-4 border-gray-700 mx-auto mb-4"
        >
          <img :src="acc.i" alt="name" class="h-full w-full object-cover" />
        </div>
        <h1 v-if="acc.n" class="text-3xl font-semibold text-gray-200">
          {{ acc.n }}
        </h1>
        <p v-if="acc.d" class="text-lg mt-2 text-gray-400">
          {{ acc.d }}
        </p>
      </div>
      <div v-if="!allSocialLinksAreEmpty" class="mt-6">
        <div class="grid grid-cols-2 gap-4 text-center">
          <span v-if="acc.f">
            <a :href="formatUrl(acc.f)" target="_blank" rel="noopener noreferrer">
              <icon name="ph:facebook-logo-duotone" class="h-6 w-6 text-blue-500" />
              <p class="text-sm mt-1">Facebook</p>
            </a>
          </span>
          <span v-if="acc.t">
            <a :href="formatUrl(acc.t)" target="_blank" rel="noopener noreferrer">
              <icon name="ph:twitter-logo-duotone" class="h-6 w-6 text-blue-400" />
              <p class="text-sm mt-1">Twitter</p>
            </a>
          </span>
          <span v-if="acc.ig">
            <a :href="formatUrl(acc.ig)" target="_blank" rel="noopener noreferrer">
              <icon name="ph:instagram-logo-duotone" class="h-6 w-6 text-pink-500" />
              <p class="text-sm mt-1">Instagram</p>
            </a>
          </span>
          <span v-if="acc.l">
            <a :href="formatUrl(acc.l)" target="_blank" rel="noopener noreferrer">
              <icon name="ph:linkedin-logo-duotone" class="h-6 w-6 text-blue-700" />
              <p class="text-sm mt-1">LinkedIn</p>
            </a>
          </span>
        </div>
      </div>
      <ul class="mt-6 space-y-2">
        <ExternalLink
          v-for="(link, id) in acc.ls"
          :label="link.l"
          :icon="link.i"
          :url="formatUrl(link.u)"
          :key="id"
        />
      </ul>
    </main>
  </template>
  
  <script setup>
  const props = defineProps({
    acc: {
      type: Object,
      required: true,
    },
  });
  
  const allSocialLinksAreEmpty = computed(() => {
    return (
      !props.acc.f &&
      !props.acc.t &&
      !props.acc.ig &&
      !props.acc.l
    );
  });
  
  const formatUrl = (url) => {
    if (url && !url.startsWith('http')) {
      return `https://${url}`;
    }
    return url;
  };
  </script>
  
  <style scoped>
  /* Custom styles for Dark template */
  main {
    font-family: 'Arial', sans-serif;
    background-color: #1f2937; /* Tailwind's gray-900 */
    color: #d1d5db; /* Tailwind's gray-300 */
  }
  
  a {
    color: inherit; /* Keep link color consistent with the text color */
    text-decoration: underline;
  }
  
  a:hover {
    color: #f3f4f6; /* Lighter gray on hover */
  }
  </style>
  