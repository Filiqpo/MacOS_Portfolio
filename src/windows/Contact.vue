<script setup>
import WindowWrapper from "#hoc/WindowWrapper.vue";
import WindowControls from "#components/WindowControls.vue";
import { socials } from "#const";
</script>

<template>
  <WindowWrapper window-key="contact">
    <div id="window-header">
      <WindowControls window-key="contact" />
      <h2>Contact Me</h2>
    </div>

    <div class="p-5 space-y-5">
      <img
        src="/images/filippo-1.jpg"
        alt="Filippo"
        class="w-20 rounded-full"
      />

      <h3>Let's Connect</h3>
      <p>Got an idea? Or just wanna talk tech? I'm in</p>
      <p>
        <a href="mailto:filippocomelato19@gmail.com"
          >filippocomelato19@gmail.com</a
        >
      </p>
      <ul>
        <li
          v-for="{ id, bg, link, icon, text } in socials"
          :key="id"
          :style="{ 'background-color': bg }"
        >
          <a
            :href="link"
            target="_blank"
            rel="noopener noreferrer"
            :title="text"
          >
            <img :src="icon" :alt="text" class="size-5" />
            <p>{{ text }}</p>
          </a>
        </li>
      </ul>
    </div>
  </WindowWrapper>
</template>

<style scoped></style>
