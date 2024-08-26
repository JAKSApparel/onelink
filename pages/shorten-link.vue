<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h1 class="text-2xl font-bold mb-6 text-center text-gray-800">Shorten Your Link</h1>
      
      <form @submit.prevent="generateShortLink">
        <div class="mb-4">
          <label for="url" class="block text-sm font-medium text-gray-700">Enter your URL</label>
          <input v-model="originalUrl" id="url" type="text" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="https://example.com">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold">Shorten Link</button>
      </form>

      <div v-if="shortenedUrl" class="mt-6 text-center">
        <p class="text-lg">Shortened URL:</p>
        <a :href="shortenedUrl" target="_blank" class="text-blue-600 underline">{{ shortenedUrl }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const originalUrl = ref('');
const shortenedUrl = ref('');

const generateShortLink = async () => {
  try {
    console.log('Original URL:', originalUrl.value); // Debug: Log original URL

    // Shorten the URL using TinyURL API
    const response = await axios.post(
      'https://api.tinyurl.com/create',
      {
        url: originalUrl.value,
        domain: 'tinyurl.com'
      },
      {
        headers: {
          Authorization: `Bearer YOUR_TINYURL_API_KEY`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('TinyURL API Response:', response.data); // Debug: Log API response

    shortenedUrl.value = response.data.data.tiny_url;

  } catch (error) {
    console.error('Error generating shortened link:', error.response ? error.response.data : error.message);
  }
};
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
