<template>
  <div class="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white">
    <div class="text-center max-w-lg px-6">
      <h1 class="text-5xl font-extrabold">Generate Quick E-Business Cards</h1>
      <p class="mt-4 text-xl">
        Create and share your digital business card in seconds. Perfect for any platform, accessible anywhere.
      </p>
      <div class="mt-8 space-x-4">
        <nuxt-link
          to="/create-card"
          class="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-100 transition"
        >
          Create My Card
        </nuxt-link>
        <a
          href="https://buy.stripe.com/00g7sw7i8g9d5gseVd"
          target="_blank"
          class="inline-block px-8 py-3 bg-yellow-400 text-gray-800 rounded-lg font-semibold text-lg shadow-md hover:bg-yellow-500 transition"
        >
          Support Us
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional script is necessary for this simple page
</script>

<style scoped>
/* Additional styles to enhance the modern look */
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}

h1 {
  line-height: 1.2;
}

p {
  opacity: 0.9;
}
</style>
