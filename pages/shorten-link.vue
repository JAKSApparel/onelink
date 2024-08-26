<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h1 class="text-2xl font-bold mb-6 text-center text-gray-800">Shorten Your Link & Generate QR Code</h1>
      
      <form @submit.prevent="generateShortLink">
        <div class="mb-4">
          <label for="url" class="block text-sm font-medium text-gray-700">Enter your URL</label>
          <input v-model="originalUrl" id="url" type="text" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="https://example.com">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold">Shorten & Generate QR</button>
      </form>

      <div v-if="shortenedUrl" class="mt-6 text-center">
        <p class="text-lg">Shortened URL:</p>
        <a :href="shortenedUrl" target="_blank" class="text-blue-600 underline">{{ shortenedUrl }}</a>
        <div v-if="qrCodeData" class="mt-4">
          <p class="text-lg">QR Code:</p>
          <img :src="qrCodeData" alt="QR Code" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import QRCode from 'qrcode';

const originalUrl = ref('');
const shortenedUrl = ref('');
const qrCodeData = ref('');

const generateShortLink = async () => {
  try {
    // Use a service like bit.ly, tinyurl, or your own service to shorten the URL
    // For the sake of example, we're just simulating a shortened URL here
    shortenedUrl.value = `https://short.url/${btoa(originalUrl.value).slice(0, 6)}`;

    // Generate QR code for the shortened URL
    qrCodeData.value = await QRCode.toDataURL(shortenedUrl.value);
  } catch (error) {
    console.error('Error generating shortened link or QR code:', error);
  }
};
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
