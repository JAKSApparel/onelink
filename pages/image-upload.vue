<script setup lang="ts">
import { ref } from 'vue';

const alert = (msg: string) => {
  window.alert(msg);
};

const uploadedLink = ref<string | null>(null);
const selectedFile = ref<File | null>(null);

const { startUpload } = useUploadThing("videoAndImage", {
  onClientUploadComplete(res) {
    console.log(`onClientUploadComplete`, res);
    if (res && res.length > 0) {
      uploadedLink.value = res[0].url; // Store the URL in the reactive variable
    }
    alert("Upload Completed");
  },
  onClientUploadError(err) {
    alert(`Upload failed: ${err.message}`);
  },
});

const uploadImage = async () => {
  if (!selectedFile.value) {
    alert("Please select a file before submitting.");
    return;
  }
  await startUpload([selectedFile.value]);
};

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    selectedFile.value = input.files[0];
  }
};

const copyToClipboard = () => {
  if (uploadedLink.value) {
    navigator.clipboard.writeText(uploadedLink.value);
    alert("Link copied to clipboard!");
  }
};
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white p-8">
    <div class="max-w-lg text-center">
      <h1 class="text-4xl font-bold mb-4">Upload Your Image and Get a Shareable Link</h1>
      <p class="text-lg mb-8">
        Quickly upload your image and get a link that you can share anywhere. Click the button below to start uploading.
      </p>
    </div>
    
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
      <label class="block mb-4 text-lg font-semibold text-gray-800">
        Select an image to upload:
        <input
          type="file"
          class="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          @change="handleFileChange"
        />
      </label>

      <button
        @click="uploadImage"
        class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Submit & Save Image
      </button>

      <div v-if="uploadedLink" class="mt-6">
        <p class="text-lg text-gray-800">Your upload link:</p>
        <div class="flex items-center mt-2">
          <input
            type="text"
            readonly
            :value="uploadedLink"
            class="w-full p-2 border rounded-lg text-gray-800"
          />
          <button
            @click="copyToClipboard"
            class="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
