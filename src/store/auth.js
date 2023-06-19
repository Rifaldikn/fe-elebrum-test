// Utilities
import cookies from "vue-cookies";
import { defineStore } from "pinia";

export const useAppStore = defineStore("auth", {
  state: () => ({
    userInfo: {
      name: "",
      email: "",
    },
  }),

  actions: {
    setAuthToken(payload) {
      cookies.set("userToken", payload);
    },
  },
});
