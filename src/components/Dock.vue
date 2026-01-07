<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { dockApps } from "#const";
import gsap from "gsap";
import { useWindowStore } from "#store/window";

const { openWindow, closeWindow, windows } = useWindowStore();
const dockRef = ref(null);
const toggleApp = (app) => {
  if (!app.canOpen) return;

  const window = windows[app.id];

  if (window.isOpen) {
    closeWindow(app.id);
  } else {
    openWindow(app.id);
  }
};

let cleanupFn = null;

onMounted(() => {
  const dock = dockRef.value;
  if (!dock) return;

  const icons = dock.querySelectorAll(".dock-icon");

  const animateIcons = (mouseX) => {
    const { left } = dock.getBoundingClientRect();

    icons.forEach((icon) => {
      const { left: iconLeft, width } = icon.getBoundingClientRect();
      const center = iconLeft - left + width / 2;
      const distance = Math.abs(mouseX - center);

      const intensity = Math.exp(-(distance ** 2.5) / 20000);

      gsap.to(icon, {
        scale: 1 + 0.25 * intensity,
        y: -15 * intensity,
        duration: 0.2,
        ease: "power1.out",
      });
    });
  };

  const handleMouseMove = (e) => {
    const { left } = dock.getBoundingClientRect();
    animateIcons(e.clientX - left);
  };

  const resetIcons = () => {
    icons.forEach((icon) =>
      gsap.to(icon, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power1.out",
      })
    );
  };

  dock.addEventListener("mousemove", handleMouseMove);
  dock.addEventListener("mouseleave", resetIcons);

  cleanupFn = () => {
    dock.removeEventListener("mousemove", handleMouseMove);
    dock.removeEventListener("mouseleave", resetIcons);
  };
});

onUnmounted(() => {
  if (cleanupFn) cleanupFn();
});
</script>

<template>
  <section id="dock">
    <div ref="dockRef" class="dock-container">
      <div
        v-for="{ id, name, icon, canOpen } in dockApps"
        :key="id"
        class="relative flex justify-center"
      >
        <button
          type="button"
          class="dock-icon"
          :aria-label="name"
          v-tooltip="name"
          :disabled="!canOpen"
          @click="() => toggleApp({ id, canOpen })"
        >
          <img
            :src="`/images/${icon}`"
            :alt="name"
            loading="lazy"
            :class="canOpen ? '' : 'opacity-60'"
          />
        </button>
      </div>
    </div>
  </section>
</template>

<style>
.v-popper--theme-tooltip .v-popper__inner {
  background: rgb(191, 219, 254) !important;
  color: rgb(30, 58, 138) !important;
  padding: 0.25rem 0.75rem !important;
  border-radius: 0.375rem !important;
  font-size: 0.75rem !important;
  line-height: 1rem !important;
  text-align: center !important;
  width: fit-content !important;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
}

.v-popper--theme-tooltip .v-popper__arrow-inner,
.v-popper--theme-tooltip .v-popper__arrow-outer {
  border-color: rgb(191, 219, 254) !important;
}
</style>
