<script setup>
import WindowWrapper from "#hoc/WindowWrapper.vue";
import WindowControls from "#components/WindowControls.vue";
import { useWindowStore } from "#store/window";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { Image as ImageIcon } from "lucide-vue-next";

const windowStore = useWindowStore();
const { windows } = storeToRefs(windowStore);

const imgData = computed(() => windows.value.imgfile?.data);
const fileName = computed(() => imgData.value?.name || "Untitled.png");
const imageUrl = computed(() => imgData.value?.imageUrl || "");
</script>

<template>
  <WindowWrapper window-key="imgfile">
    <div id="window-header">
      <WindowControls window-key="imgfile" />
      <div class="flex items-center gap-2">
        <ImageIcon class="icon" :size="16" />
        <h2 class="text-sm font-semibold text-gray-700">{{ fileName }}</h2>
      </div>
    </div>

    <div class="h-full flex items-center justify-center p-4 overflow-auto">
      <img
        v-if="imageUrl"
        :src="imageUrl"
        :alt="fileName"
        class="max-w-full max-h-full w-auto h-auto object-contain rounded"
      />
      <div v-else class="flex flex-col items-center gap-4">
        <ImageIcon :size="64" class="text-gray-400" />
        <p class="text-gray-500">No image to display</p>
      </div>
    </div>
  </WindowWrapper>
</template>

<style scoped></style>
