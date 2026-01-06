<script setup>
import { navLinks, navIcons } from "#const";
import dayjs from "dayjs";
</script>

<template>
  <nav>
    <div>
      <img src="/images/logo.svg" alt="logo" />
      <p class="font-bold">Filippo's Portfolio</p>

      <ul>
        <li v-for="{ id, name } in navLinks" :key="navLinks">
          <p>{{ name }}</p>
        </li>
      </ul>
    </div>

    <div>
      <ul>
        <li v-for="{ id, img } in navIcons" :key="navIcons">
          <img class="icon-hover" :src="img" :alt="`icon-${id}`" />
        </li>
      </ul>
      <time>{{ dayjs().format("ddd MMM D h:mm A") }}</time>
    </div>
  </nav>
</template>

<style scoped></style>
