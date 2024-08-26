<template>
  <div class="h-screen flex items-center justify-center bg-blue-100">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-blue-800">Welcome to Card Creator</h1>
      <p class="mt-4 text-lg text-gray-700">
        Create your personalized card quickly and easily!
      </p>
      <button
        @click="goToForm"
        class="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg"
      >
        Get Started
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToForm = () => {
  router.push('/create-card'); // Redirect to the form page
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
