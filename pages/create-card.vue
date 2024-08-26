<template>
  <div class="h-screen flex flex-col md:flex-row bg-gradient-to-r from-purple-500 to-blue-500 text-white">
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

    <div class="flex-none w-full md:w-96 p-4 md:p-8 bg-white text-slate-700">
      <div class="flex flex-col items-center">
        <!-- Reduced the size of the card display -->
        <div class="h-[500px] w-[230px] overflow-y-auto rounded-[2rem] ring-4 ring-slate-800 overflow-hidden">
          <app-form-preview :data="data" />
        </div>
        <!-- Buttons positioned under the card -->
        <div class="space-y-2 mt-4 w-full">
          <button
            @click="prefillDemoData"
            class="w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Add Demo Data
          </button>
          <button
            @click="publish"
            class="w-full px-4 py-3 bg-green-500 text-white rounded-lg font-semibold shadow-md hover:bg-green-600 transition"
          >
            Click to Publish
          </button>
          <a
            href="https://buy.stripe.com/00g7sw7i8g9d5gseVd"
            target="_blank"
            class="w-full inline-block px-4 py-3 bg-yellow-400 text-gray-800 rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition text-center"
          >
            Help Us Grow
          </a>
        </div>
      </div>
    </div>

    <a
      href="https://tylerdipolito.com"
      target="_blank"
      class="absolute bottom-0 left-0 ml-4 mb-16 text-sm font-medium text-gray-300 hover:text-gray-100 transition"
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
