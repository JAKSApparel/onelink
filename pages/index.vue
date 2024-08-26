<template>
  <div class="h-screen flex items-center justify-center bg-blue-100">
    <div class="text-center">
      <!-- Corrected the closing tag for <h1> -->
      <h1 class="text-4xl font-bold text-blue-800">Welcome to Quick Card</h1>
      <p class="mt-4 text-lg text-gray-700">
        The quickest way to create yourself an online E-Card!
      </p>
      <nuxt-link
        to="/create-card"
        class="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-lg"
      >
        Create my Card
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
// No additional script is necessary for this simple page
</script>

<style scoped>
/* Additional styles if needed */
</style>
