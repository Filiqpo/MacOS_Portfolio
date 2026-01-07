<script setup>
import WindowWrapper from "#hoc/WindowWrapper.vue";
import WindowControls from "#components/WindowControls.vue";
import { useLocationStore } from "#store/location";
import { useWindowStore } from "#store/window";
import { storeToRefs } from "pinia";
import { Search } from "lucide-vue-next";
import { locations } from "#const";

const locationStore = useLocationStore();
const { activeLocation } = storeToRefs(locationStore);
const { setActiveLocation } = locationStore;

const windowStore = useWindowStore();
const { openWindow } = windowStore;

const locationsList = Object.values(locations);

const openItem = (item) => {
  if (item.kind === "folder") {
    setActiveLocation(item);
  } else if (item.kind === "file") {
    if (item.fileType === "url" && item.href) {
      window.open(item.href, "_blank");
    } else if (item.fileType === "txt") {
      openWindow("txtfile", item);
    } else if (item.fileType === "img") {
      openWindow("imgfile", item);
    } else if (item.fileType === "pdf") {
      openWindow("cv");
    }
  }
};
</script>

<template>
  <WindowWrapper window-key="finder">
    <div id="window-header">
      <WindowControls window-key="finder" />
      <Search class="icon" />
    </div>

    <div class="bg-white flex h-full">
      <div class="sidebar">
        <div>
          <h3>Favorites</h3>
          <ul>
            <li
              v-for="item in locationsList"
              :key="item.id"
              @click="setActiveLocation(item)"
              :class="item.id === activeLocation?.id ? 'active' : 'not-active'"
            >
              <img :src="item.icon" class="w-4" :alt="item.name" />
              <p class="text-sm font-medium truncate">{{ item.name }}</p>
            </li>
          </ul>
        </div>
        <div>
          <h3>Work</h3>
          <ul>
            <li
              v-for="project in locations.work.children"
              :key="project.id"
              @click="setActiveLocation(project)"
              :class="
                project.id === activeLocation?.id ? 'active' : 'not-active'
              "
            >
              <img :src="project.icon" class="w-4" :alt="project.name" />
              <p class="text-sm font-medium truncate">{{ project.name }}</p>
            </li>
          </ul>
        </div>
      </div>
      <ul class="content">
        <li
          v-for="item in activeLocation?.children"
          :key="item.id"
          :class="item.position"
          @click="openItem(item)"
        >
          <img :src="item.icon" :alt="item.name" />
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </WindowWrapper>
</template>

<style scoped></style>
