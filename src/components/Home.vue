<script setup>
import { locations } from "#const";
import { onMounted } from "vue";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useWindowStore } from "#store/window";
import { useLocationStore } from "#store/location";

gsap.registerPlugin(Draggable);

const windowStore = useWindowStore();
const locationStore = useLocationStore();
const { openWindow } = windowStore;
const { setActiveLocation } = locationStore;

const projects = locations.work?.children ?? [];

const handleOpenProjectFinder = (project) => {
  setActiveLocation(project);
  openWindow("finder");
};

onMounted(() => {
  Draggable.create(".folder");
});
</script>

<template>
  <section id="home">
    <ul>
      <li
        v-for="project in projects"
        :key="project.id"
        :class="['group', 'folder', project.windowPosition]"
        @click="handleOpenProjectFinder(project)"
      >
        <img src="/images/folder.png" :alt="project.name" />
        <p>{{ project.name }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
