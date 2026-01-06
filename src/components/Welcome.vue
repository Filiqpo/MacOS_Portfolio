<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, baseweight = 400) => {
  return [...text].map((char) => ({
    display: char === " " ? "\u00A0" : char,
    weight: baseweight,
  }));
};

const setupTextHover = (container, type) => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 20000);

      animateLetter(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animateLetter(letter, base, 0.3);
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const textCharsSubtitle = computed(() =>
  renderText("Hey, I'm Filippo! Welcome to my", 200)
);
const textCharsTitle = computed(() => renderText("portfolio", 300));

const titleRef = ref(null);
const subtitleRef = ref(null);

let titleCleanup;
let subtitleCleanup;

onMounted(() => {
  titleCleanup = setupTextHover(titleRef.value, "title");
  subtitleCleanup = setupTextHover(subtitleRef.value, "subtitle");
});

onUnmounted(() => {
  if (titleCleanup) titleCleanup();
  if (subtitleCleanup) subtitleCleanup();
});
</script>

<template>
  <section id="welcome">
    <p ref="subtitleRef">
      <span
        v-for="(char, i) in textCharsSubtitle"
        :key="i"
        class="text-3xl font-georama"
        :style="{ fontVariationSettings: `'wght' ${char.weight}` }"
        >{{ char.display }}</span
      >
    </p>
    <h1 ref="titleRef" class="mt-7">
      <span
        v-for="(char, i) in textCharsTitle"
        class="text-9xl italic font-georama"
        :style="{ fontVariationSettings: `'wght' ${char.weight}` }"
        :key="i"
        >{{ char.display }}</span
      >
    </h1>

    <div class="small-screen">
      <p>This Portfolio is designed for desktop/tablet screens only</p>
    </div>
  </section>
</template>

<style scoped></style>
