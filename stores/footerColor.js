import { defineStore } from "pinia";

export const useFooterColor = defineStore("footerColor", {
  state: () => ({
    color: "",
  }),
  actions: {
    changeFooterColor(val) {
      this.color = val;
    },
  },
});
