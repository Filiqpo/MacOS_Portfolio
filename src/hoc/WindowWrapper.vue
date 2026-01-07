<script setup>
import { useWindowStore } from "#store/window";
import { storeToRefs } from "pinia";
import { computed, ref, watch, nextTick, onUnmounted, provide } from "vue";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const props = defineProps({
  windowKey: {
    type: String,
    required: true,
  },
});

provide("windowKey", props.windowKey);

const windowStore = useWindowStore();
const { windows } = storeToRefs(windowStore);
const { focusWindow } = windowStore;

const windowData = computed(() => windows.value[props.windowKey]);
const isOpen = computed(() => windowData.value?.isOpen ?? false);
const zIndex = computed(() => windowData.value?.zIndex ?? 0);

const windowRef = ref(null);
let draggableInstance = null;

const onBeforeEnter = (el) => {
  gsap.set(el, { scale: 0.8, opacity: 0, y: 40 });
};

const onEnter = (el, done) => {
  gsap.to(el, {
    scale: 1,
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: "power3.out",
    onComplete: done,
  });
};

const onLeave = (el, done) => {
  gsap.to(el, {
    scale: 0.8,
    opacity: 0,
    y: 40,
    duration: 0.3,
    ease: "power3.in",
    onComplete: done,
  });
};

watch(isOpen, async (newValue) => {
  if (newValue) {
    await nextTick();

    const el = windowRef.value;
    if (el && !draggableInstance) {
      draggableInstance = Draggable.create(el, {
        onPress: () => focusWindow(props.windowKey),
        type: "x,y",
      })[0];
    }
  } else {
    if (draggableInstance) {
      draggableInstance.kill();
      draggableInstance = null;
    }
  }
});

onUnmounted(() => {
  if (draggableInstance) {
    draggableInstance.kill();
    draggableInstance = null;
  }
});
</script>

<template>
  <Transition
    :css="false"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
    <section
      v-if="isOpen"
      ref="windowRef"
      :id="props.windowKey"
      class="absolute"
      :style="{ zIndex }"
    >
      <slot />
    </section>
  </Transition>
</template>

<style scoped></style>
