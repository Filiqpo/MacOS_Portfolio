<script setup>
import { navLinks, navIcons } from "#const";
import dayjs from "dayjs";
import { useWindowStore } from "#store/window";

const { openWindow } = useWindowStore();
</script>

<template>
  <nav>
    <div>
      <img src="/images/logo.svg" alt="logo" />
      <p class="font-bold">Filippo's Portfolio</p>

      <ul>
        <li
          v-for="{ id, name, type } in navLinks"
          :key="id"
          @click="openWindow(type)"
          class="cursor-pointer"
        >
          <p>{{ name }}</p>
        </li>
      </ul>
    </div>

    <div>
      <ul>
        <li
          v-for="{ id, img, type } in navIcons"
          :key="id"
          @click="openWindow(type)"
          class="cursor-pointer"
        >
          <img class="icon-hover" :src="img" :alt="`icon-${id}`" />
        </li>
      </ul>
      <time>{{ dayjs().format("ddd D MMM hh:mm A") }}</time>
    </div>
  </nav>
</template>

<style scoped></style>
