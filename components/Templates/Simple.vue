<template>
  <main class="p-6 bg-gray-50 h-full w-full space-y-10 pt-12 max-w-md mx-auto rounded-xl shadow-lg">
    <div class="text-center">
      <div
        v-if="acc.i"
        class="h-24 w-24 rounded-full overflow-hidden ring-4 ring-indigo-500 mx-auto"
      >
        <img :src="acc.i" alt="name" class="h-full w-full object-cover" />
      </div>
      <h1 v-if="acc.n" class="text-3xl font-semibold mt-5 text-gray-900">
        {{ acc.n }}
      </h1>
      <p v-if="acc.d" class="text-base mt-2 text-gray-700">
        {{ acc.d }}
      </p>
    </div>
    <div
      v-if="!allSocialLinksAreEmpty"
      class="flex items-center justify-center flex-wrap space-x-4 mt-6"
    >
      <span v-if="acc.f" class="p-2 bg-indigo-100 rounded-full">
        <a :href="formatUrl(acc.f)" target="_blank" rel="noopener noreferrer">
          <icon name="ph:facebook-logo-duotone" class="h-8 w-8 text-indigo-600" />
        </a>
      </span>
      <span v-if="acc.t" class="p-2 bg-indigo-100 rounded-full">
        <a :href="formatUrl(acc.t)" target="_blank" rel="noopener noreferrer">
          <icon name="ph:twitter-logo-duotone" class="h-8 w-8 text-indigo-600" />
        </a>
      </span>
      <span v-if="acc.ig" class="p-2 bg-indigo-100 rounded-full">
        <a :href="formatUrl(acc.ig)" target="_blank" rel="noopener noreferrer">
          <icon name="ph:instagram-logo-duotone" class="h-8 w-8 text-indigo-600" />
        </a>
      </span>
      <span v-if="acc.m" class="p-2 bg-indigo-100 rounded-full">
        <a :href="formatUrl(acc.m)" target="_blank" rel="noopener noreferrer">
          <icon name="ph:envelope-duotone" class="h-8 w-8 text-indigo-600" />
        </a>
      </span>
      <span v-if="acc.tg" class="p-2 bg-indigo-100 rounded-full">
        <a :href="formatUrl(acc.tg)" target="_blank" rel="noopener noreferrer">
          <icon name="ph:telegram-logo-duotone" class="h-8 w-8 text-indigo-600" />
        </a>
      </span>
      <span v-if="acc.w" class="p-2 bg-indigo-100 rounded-full">
        <a :href="`https://wa.me/${acc.w}`" target="_blank" rel="noopener noreferrer">
          <icon name="ph:whatsapp-logo-duotone" class="h-8 w-8 text-indigo-600" />
        </a>
      </span>
      <span v-if="acc.y" class="p-2 bg-indigo-100 rounded-full">
        <a :href="formatUrl(acc.y)" target="_blank" rel="noopener noreferrer">
          <icon name="ph:youtube-logo-duotone" class="h-8 w-8 text-indigo-600" />
        </a>
      </span>
      <span v-if="acc.e" class="p-2 bg-indigo-100 rounded-full">
        <a :href="`mailto:${acc.e}`" target="_blank" rel="noopener noreferrer">
          <icon name="ph:envelope-duotone" class="h-8 w-8 text-indigo-600" />
        </a>
      </span>
      <span v-if="acc.gh" class="p-2 bg-indigo-100 rounded-full">
        <a :href="formatUrl(acc.gh)" target="_blank" rel="noopener noreferrer">
          <icon name="ph:github-logo-duotone" class="h-8 w-8 text-indigo-600" />
        </a>
      </span>
      <span v-if="acc.l" class="p-2 bg-indigo-100 rounded-full">
        <a :href="formatUrl(acc.l)" target="_blank" rel="noopener noreferrer">
          <icon name="ph:linkedin-logo-duotone" class="h-8 w-8 text-indigo-600" />
        </a>
      </span>
    </div>
    <ul class="space-y-4">
      <ExternalLink
        v-for="(link, id) in acc.ls"
        :label="link.l"
        :icon="link.i"
        :url="formatUrl(link.u)"
        :key="id"
        class="block p-4 bg-indigo-300 rounded-md shadow-sm hover:bg-indigo-500"
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
    !props.acc.m &&
    !props.acc.tg &&
    !props.acc.w &&
    !props.acc.y &&
    !props.acc.e &&
    !props.acc.gh &&
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

<style scoped></style>
