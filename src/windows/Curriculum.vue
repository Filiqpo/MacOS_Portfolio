<script setup>
import WindowWrapper from "#hoc/WindowWrapper.vue";
import WindowControls from "#components/WindowControls.vue";
import VuePdfEmbed from "vue-pdf-embed";
import { Download } from "lucide-vue-next";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/files/CV.pdf";
  link.download = "Filippo_CV.pdf";
  link.click();
};
</script>

<template>
  <WindowWrapper window-key="cv">
    <div id="window-header">
      <WindowControls window-key="cv" />
      <h2>CV.pdf</h2>
      <button
        @click="handleDownload"
        class="cursor-pointer"
        title="Download CV"
      >
        <Download class="icon" />
      </button>
    </div>
    <div class="pdf-container">
      <VuePdfEmbed source="/files/CV.pdf" :page="1" :width="400" :scale="1" />
    </div>
  </WindowWrapper>
</template>

<style scoped></style>
