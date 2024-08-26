<template>
  <base-form-section
    title="Profile"
    description="Some public information about you"
  >
    <div class="shadow sm:overflow-hidden sm:rounded-md">
      <div class="space-y-6 bg-white px-4 py-5 sm:p-6">

        <!-- Name Field -->
        <div class="col-span-6 sm:col-span-3">
          <label for="name" class="block text-lg font-bold text-gray-800">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            autocomplete="given-name"
            :value="name"
            @input="$emit('update:name', $event.target.value)"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-900"
          />
        </div>

        <!-- About Field -->
        <div>
          <label for="about" class="block text-lg font-bold text-gray-800">About yourself</label>
          <div class="mt-1">
            <textarea
              id="about"
              name="about"
              rows="3"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-900 placeholder-gray-500"
              placeholder="I am an astronaut"
              maxlength="100"
              :value="desc"
              @input="$emit('update:desc', $event.target.value)"
            ></textarea>
          </div>
        </div>

        <!-- Photo URL Field -->
        <div class="flex-grow col-span-6 sm:col-span-3">
          <label for="photo-url" class="block text-lg font-bold text-gray-800">Photo URL</label>
          <input
            type="text"
            name="photo-url"
            id="photo-url"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-900"
            :value="image"
            @input="$emit('update:image', $event.target.value)"
          />
        </div>

        <!-- Email Address Field -->
        <div class="flex-grow col-span-6 sm:col-span-3">
          <label for="email" class="block text-lg font-bold text-gray-800">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-900"
            :value="email"
            @input="$emit('update:email', $event.target.value)"
          />
        </div>

      </div>
    </div>
  </base-form-section>
</template>

<script setup>
const props = defineProps(["name", "desc", "image", "phone", "email"]);
</script>
