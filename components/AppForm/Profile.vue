<template>
  <base-form-section
    title="Profile"
    description="Some public information about you"
  >
    <div class="shadow sm:overflow-hidden sm:rounded-md">
      <div class="space-y-6 bg-white px-4 py-5 sm:p-6">

        <!-- Name Field -->
        <div class="col-span-6 sm:col-span-3">
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            autocomplete="given-name"
            :value="name"
            @input="$emit('update:name', $event.target.value)"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <!-- About Field -->
        <div>
          <label for="about" class="block text-sm font-medium text-gray-700">About yourself</label>
          <div class="mt-1">
            <textarea
              id="about"
              name="about"
              rows="3"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder-slate-400"
              placeholder="I am an astronaut"
              maxlength="100"
              :value="desc"
              @input="$emit('update:desc', $event.target.value)"
            ></textarea>
          </div>
        </div>

        <!-- Photo URL Field -->
        <div class="flex-grow col-span-6 sm:col-span-3">
          <label for="photo-url" class="block text-sm font-medium text-gray-700">Photo Url</label>
          <input
            type="text"
            name="photo-url"
            id="photo-url"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            :value="image"
            @input="$emit('update:image', $event.target.value)"
          />
        </div>

        <!-- Email Address Field -->
        <div class="flex-grow col-span-6 sm:col-span-3">
          <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            :value="email"
            @input="$emit('update:email', $event.target.value)"
          />
        </div>

        <!-- Template Selection Field -->
        <div class="flex-grow col-span-6 sm:col-span-3">
          <label for="template" class="block text-sm font-medium text-gray-700">Choose a Template</label>
          <select v-model="selectedTemplate" id="template" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            <option value="simple">Simple</option>
            <option value="modern">Modern</option>
            <option value="classic">Classic</option>
            <!-- Add more templates here -->
          </select>
        </div>
        
      </div>
    </div>
  </base-form-section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(["name", "desc", "image", "phone", "email"]);

// Template selection state
const selectedTemplate = ref('simple'); // Default template

</script>
