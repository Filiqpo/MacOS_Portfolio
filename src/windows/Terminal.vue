<script setup>
import { techStack } from "#const";
import WindowWrapper from "#hoc/WindowWrapper.vue";
import WindowControls from "#components/WindowControls.vue";
import { Check, Flag } from "lucide-vue-next";
</script>

<template>
  <WindowWrapper window-key="terminal">
    <div id="window-header">
      <WindowControls window-key="terminal" />
      <h2>Tech Stack</h2>
    </div>

    <div class="techstack">
      <p>
        <span class="font-bold">@Filippo %</span>
        show tech stack
      </p>

      <div class="label">
        <p class="w-32">Category</p>
        <p>Technologies</p>
      </div>

      <ul class="content">
        <li
          class="flex items-center"
          v-for="{ category, items } in techStack"
          :key="category"
        >
          <Check class="check" :size="20" />
          <h3>{{ category }}</h3>
          <p>{{ items.join(", ") }}</p>
        </li>
      </ul>
      <div class="footnote">
        <p><Check :size="20" /> 5 of 5 stacks loaded successfully (100%)</p>
        <p class="text-black">
          <Flag :size="15" fill="black" />
          Render time: 38ms
        </p>
      </div>
    </div>
  </WindowWrapper>
</template>

<style scoped></style>
