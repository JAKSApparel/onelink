<template>
  <div class="h-screen grid grid-cols-1 md:grid-cols-3 divide-x">
    <div class="col-span-2 h-screen flex flex-col bg-slate-100">
      <div class="flex-1 overflow-y-auto p-8">
        <!-- Form Components for Profile and Social Links -->
        <app-form-profile
          v-model:name="data.n"
          v-model:desc="data.d"
          v-model:image="data.i"
          v-model:phone="data.p"
          v-model:email="data.e"
        />
        <app-form-hr />
        <app-form-social-links
          v-model:facebook="data.f"
          v-model:twitter="data.t"
          v-model:instagram="data.ig"
          v-model:github="data.gh"
          v-model:telegram="data.tg"
          v-model:linkedin="data.l"
          v-model:whatsapp="data.w"
          v-model:youtube="data.y"
        />
        <app-form-hr />
        <app-form-links v-model="data.ls" />
      </div>
      <div class="border-t bg-white flex items-center">
        <button
          @click="prefillDemoData"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Add demo data </span>
          <icon name="mdi:code-json" class="h-4 w-4" />
        </button>
        <button
          @click="publish"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Click to Publish </span>
          <icon name="ph:paper-plane-tilt-bold" class="h-4 w-4" />
        </button>
        <a
          href="https://buy.stripe.com/00g7sw7i8g9d5gseVd"
          target="_blank"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> Help us Grow </span>
          <icon name="memory:account" class="h-4 w-4" />
        </a>
      </div>
    </div>
    <!-- Hide preview on mobile using md:block -->
    <div class="hidden md:flex justify-center items-center h-full p-4">
      <div
        class="h-[600px] w-[300px] overflow-y-auto rounded-[2rem] ring-8 ring-slate-800 overflow-hidden"
      >
        <app-form-preview :data="data" />
      </div>
    </div>
    <a
      href="https://tylerdipolito.com"
      target="_blank"
      class="absolute bottom-0 right-0 bg-white rounded-tl-lg shadow px-4 py-1 font-medium text-sm text-gray-500"
    >
      Made by Tyler
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { encodeData } from "../utils/transformer";

// Data properties for the form
const data = ref({
  n: "",
  d: "",
  i: "",
  f: "",
  t: "",
  ig: "",
  gh: "",
  tg: "",
  l: "",
  e: "", // Email
  p: "", // Phone number
  w: "",
  y: "",
  ls: [],
});

// Prefill demo data for testing
const prefillDemoData = () => {
  data.value = {
    n: "Chuck Norris",
    d: "Knows Victorias Secret, can divide by 0, once killed 2 stones with 1 bird",
    i: "https://utfs.io/f/7da93837-b35f-46c3-96e9-4c02068c77fc-wch5px.jpg",
    f: "https://www.facebook.com/john_snow",
    t: "https://twitter.com/john_snow",
    ig: "https://www.instagram.com/john_snow",
    e: "mail@john_snow.cc",
    p: "+1234567890", // Example phone number
    gh: "https://github.com/john_snow",
    tg: "https://t.me/john_snow",
    w: "+918888888888",
    y: "https://youtube.com/@john_snow",
    l: "https://linkedin.com/chucknorris",
    ls: [
      {
        l: "My Website",
        i: "ph:globe-duotone",
        u: "https://example.com",
      },
      {
        l: "Amazon wishlist",
        i: "ant-design:amazon-outlined",
        u: "https://amazon.in",
      },
      {
        l: "React JS course",
        i: "grommet-icons:reactjs",
        u: "https://reactjs.org/",
      },
      {
        l: "Donate for our cause",
        i: "iconoir:donate",
        u: "https://who.int",
      },
      {
        l: "Download my resume",
        i: "ph:file-pdf",
        u: "https://google.com",
      },
    ],
  };
};

// Publish function to handle form submission, URL copying, and sending data to webhook
const publish = async () => {
  const url = `${window.location.origin}/1?data=${encodeData(data.value)}`;

  // Copy the URL to the clipboard
  await navigator.clipboard.writeText(url);
  alert("Link is Copied, Open a New Browser and Paste");

  // Include the generated URL in the data to be sent to the webhook
  const payload = {
    ...data.value,
    generatedUrl: url,
  };

  // Debug: Log the payload
  console.log('Payload:', JSON.stringify(payload, null, 2));

  // Send data to the webhook
  const webhookUrl = 'https://discord.com/api/webhooks/1277489074265128980/osY2Sz-XVen8fDMYcl3P01edzygFeHojOIOaiPhoIS5Q6ovTK2AbHeIy7lYp0FwcceiB'; // Replace with your actual webhook URL
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload), // Send the form data and the generated URL as JSON
    });

    // Debug: Check the response
    console.log('Response status:', response.status);

    if (response.ok) {
      console.log('Data sent successfully to the webhook.');
    } else {
      console.error('Failed to send data to the webhook. Response:', await response.text());
    }
  } catch (error) {
    console.error('Error sending data to the webhook:', error);
  }
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
