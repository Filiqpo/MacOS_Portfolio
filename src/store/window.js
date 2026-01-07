// stores/windowStore.js
import { defineStore } from "pinia";
import { WINDOW_CONFIG, INITIAL_Z_INDEX } from "#const";

export const useWindowStore = defineStore("window", {
  state: () => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,
  }),

  actions: {
    openWindow(windowKey, data = null) {
      const win = this.windows[windowKey];
      win.isOpen = true;
      win.zIndex = this.nextZIndex;
      win.data = data ?? win.data;
      this.nextZIndex++;
    },

    closeWindow(windowKey) {
      const win = this.windows[windowKey];
      win.isOpen = false;
      win.zIndex = INITIAL_Z_INDEX;
      win.data = null;
    },

    focusWindow(windowKey) {
      const win = this.windows[windowKey];
      win.zIndex = this.nextZIndex++;
    },
  },
});
