<script setup>
import Dock from "#components/Dock.vue";
import Navbar from "#components/Navbar.vue";
import Welcome from "#components/Welcome.vue";
import Terminal from "#windows/Terminal.vue";
import Curriculum from "#windows/Curriculum.vue";
import Finder from "#windows/Finder.vue";
import Text from "#windows/Text.vue";
import Image from "#windows/Image.vue";
</script>

<template>
  <main>
    <Navbar />
    <Welcome />
    <Dock />

    <Terminal />
    <Curriculum />
    <Finder />
    <Text />
    <Image />
  </main>
</template>

<style scoped></style>
