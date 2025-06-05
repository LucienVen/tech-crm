import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    token: "",
    username: "",
    email: "",
  }),
  actions: {
    login(token: string) {
      this.token = token;
      // 模拟用户数据
      this.username = "Admin User";
      this.email = "admin@example.com";
    },
    logout() {
      this.token = "";
      this.username = "";
      this.email = "";
    },
  },
});
