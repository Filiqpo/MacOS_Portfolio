<script setup>
import Dock from "#components/Dock.vue";
import Navbar from "#components/Navbar.vue";
import Welcome from "#components/Welcome.vue";
import Terminal from "#windows/Terminal.vue";
</script>

<template>
  <main>
    <Navbar />
    <Welcome />
    <Dock />

    <Terminal />
  </main>
</template>

<style scoped></style>
