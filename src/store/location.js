import { defineStore } from "pinia";
import { locations } from "#const";

const DEFAULT_LOCATION = locations.work;

export const useLocationStore = defineStore("location", {
  state: () => ({
    activeLocation: DEFAULT_LOCATION,
  }),

  actions: {
    setActiveLocation(location = null) {
      this.activeLocation = location;
    },

    resetActiveLocation() {
      this.activeLocation = DEFAULT_LOCATION;
    },
  },
});
