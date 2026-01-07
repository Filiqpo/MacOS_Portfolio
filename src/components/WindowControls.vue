<script setup>
import { inject } from "vue";
import { useWindowStore } from "#store/window";

const windowKey = inject("windowKey");

const { closeWindow } = useWindowStore();

const handleClose = () => {
  if (!windowKey) {
    console.error("windowKey is undefined!");
    return;
  }
  closeWindow(windowKey);
};
</script>

<template>
  <div id="window-controls">
    <div class="close" @click="handleClose" />
    <div class="minimize" />
    <div class="maximize" />
  </div>
</template>

<style scoped></style>
