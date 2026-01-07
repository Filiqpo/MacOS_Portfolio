<script setup>
import WindowWrapper from "#hoc/WindowWrapper.vue";
import WindowControls from "#components/WindowControls.vue";
import { useWindowStore } from "#store/window";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { FileText } from "lucide-vue-next";

const windowStore = useWindowStore();
const { windows } = storeToRefs(windowStore);

const txtData = computed(() => windows.value.txtfile?.data);
const fileName = computed(() => txtData.value?.name || "Untitled.txt");
const fileDescription = computed(() => txtData.value?.description || []);
const fileSubtitle = computed(() => txtData.value?.subtitle || "");
const fileImage = computed(() => txtData.value?.image || "");
</script>

<template>
  <WindowWrapper window-key="txtfile">
    <div id="window-header">
      <WindowControls window-key="txtfile" />
      <div class="flex items-center gap-2">
        <FileText class="icon" :size="16" />
        <h2 class="text-gray-700">{{ fileName }}</h2>
      </div>
    </div>

    <div class="p-5 space-y-6 bg-white">
      <div v-if="fileImage" class="w-full">
        <img :src="fileImage" :alt="fileName" class="w-full h-auto rounded" />
      </div>

      <div class="text-lg font-semibold">
        <h3 v-if="fileSubtitle">{{ fileSubtitle }}</h3>

        <div class="space-y-3 leading-relaxed text-base text-gray-800">
          <p v-for="(paragraph, index) in fileDescription" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </WindowWrapper>
</template>

<style scoped></style>
