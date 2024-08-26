<template>
  <base-form-section title="Links" description="Add some links here">
    <template #helpertext>
      <p class="mt-1 text-sm text-gray-800">
        Icon keys can be found in
        <a class="underline text-blue-500 hover:text-blue-700" href="https://icones.js.org/" target="_blank">
          https://icones.js.org/
        </a>.
      </p>
    </template>
    <draggable
      :list="modelValue"
      item-key="link"
      class="list-group"
      ghost-class="ghost"
    >
      <template #item="{ element: link }">
        <div class="relative mb-6 group">
          <button class="absolute top-2 -left-8">
            <icon
              name="radix-icons:drag-handle-dots-2"
              class="h-6 w-6 text-gray-500 drag-handle"
            />
          </button>
          <button
            @click="removeLink(link)"
            class="hidden group-hover:flex items-center justify-center h-6 w-6 rounded-full bg-gray-300 text-gray-600 absolute -right-3 -top-3"
          >
            <icon name="fluent:dismiss-24-regular" class="h-4 w-4" />
          </button>
          <div class="shadow sm:overflow-hidden sm:rounded-lg">
            <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label
                    for="iconKey"
                    class="block text-lg font-bold text-gray-800"
                    >Icon Key (optional)</label
                  >
                  <input
                    type="text"
                    name="iconKey"
                    id="iconKey"
                    v-model="link.i"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label
                    for="label"
                    class="block text-lg font-bold text-gray-800"
                    >Label</label
                  >
                  <input
                    type="text"
                    name="label"
                    id="label"
                    v-model="link.l"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-900"
                  />
                </div>
                <div class="col-span-2">
                  <label
                    for="url"
                    class="block text-lg font-bold text-gray-800"
                    >URL</label
                  >
                  <input
                    type="url"
                    name="url"
                    id="url"
                    v-model="link.u"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-900"
                  />
                </div>
              </div>
              <p
                class="mt-2 text-xs text-center text-gray-500"
                v-if="!link.l || !link.u"
              >
                Link shown in preview once label and URL are added
              </p>
            </div>
          </div>
        </div>
      </template>
    </draggable>

    <button
      @click="appendLink"
      class="mt-8 border-2 text-gray-800 border-gray-300 rounded-lg block w-full py-2 hover:bg-gray-100"
    >
      <icon name="fluent:add-circle-24-regular" class="h-6 w-6" />
    </button>
  </base-form-section>
</template>

<script setup>
import draggable from "vuedraggable";
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: Array,
});
const appendLink = () => {
  props.modelValue.push({
    i: "",
    l: "",
    u: "",
  });
  emit("update:modelValue", props.modelValue);
};

const removeLink = (link) => {
  const index = props.modelValue.indexOf(link);
  props.modelValue.splice(index, 1);
  emit("update:modelValue", props.modelValue);
};
</script>

<style scoped>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
