<!-- The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work. -->
<template>
  <div class="h-screen flex flex-col md:flex-row overflow-hidden">
    <!-- 左侧品牌区域 -->
    <div class="w-full md:w-[61.8%] relative overflow-hidden">
      <div
        class="w-full h-full bg-gradient-to-b from-green-600 via-yellow-500 to-orange-500 flex items-center justify-center"
      >
        <img
          :src="brandImage"
          alt="购物体验"
          class="w-full h-full object-cover object-center"
        />
      </div>
    </div>
    <!-- 右侧登录区域 -->
    <div
      class="w-full md:w-[38.2%] bg-gray-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto"
    >
      <div class="w-full max-w-md">
        <div class="text-center mb-4 md:mb-6">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-1 md:mb-2">
            欢迎回来！
          </h1>
          <h2
            class="text-xl md:text-2xl font-semibold text-gray-700 mb-1 md:mb-2"
          >
            TECH-CRM
          </h2>
          <p class="text-gray-600">很高兴再次见到您！</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-4 md:p-6">
          <!-- 登录表单 -->
          <form @submit.prevent="handleLogin">
            <!-- 邮箱/手机号输入框 -->
            <div class="mb-3">
              <div class="relative">
                <input
                  type="text"
                  v-model="email"
                  placeholder="邮箱或手机号码"
                  class="w-full px-3 py-2 border-none bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <i
                  class="fas fa-envelope absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                ></i>
              </div>
            </div>
            <!-- 密码输入框 -->
            <div class="mb-4">
              <div class="relative">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  v-model="password"
                  placeholder="请输入密码"
                  class="w-full px-3 py-2 border-none bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <i
                  :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                ></i>
              </div>
            </div>
            <!-- 记住密码选项 -->
            <div class="flex justify-between items-center mb-4">
              <div class="flex items-center">
                <div
                  class="relative inline-block w-8 mr-2 align-middle select-none"
                >
                  <input
                    type="checkbox"
                    id="remember"
                    v-model="rememberMe"
                    class="absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-green-500"
                  />
                  <label
                    for="remember"
                    class="block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
                    :class="{ 'bg-green-500': rememberMe }"
                  ></label>
                </div>
                <label
                  for="remember"
                  class="text-sm text-gray-700 cursor-pointer"
                  >记住我</label
                >
              </div>
              <a href="#" class="text-sm text-gray-600 hover:text-green-500"
                >忘记密码？</a
              >
            </div>
            <!-- 登录按钮 -->
            <button
              type="submit"
              class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition duration-300 !rounded-button whitespace-nowrap cursor-pointer text-sm"
            >
              登录
            </button>
          </form>
        </div>
        <!-- 注册入口 -->
        <div class="text-center mt-4">
          <p class="text-sm text-gray-600">
            还没有账号？
            <router-link
              to="/register"
              class="text-green-600 hover:text-green-700 font-medium"
            >
              立即注册
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import brandImage from "@/assets/images/backgrounds/color1.jpg";

// 状态管理
const email = ref("");
const password = ref("");
const rememberMe = ref(false);
const showPassword = ref(false);
const router = useRouter();
const store = useUserStore();

// 方法
const handleLogin = () => {
  // 模拟登录逻辑
  if (email.value === "admin" && password.value === "123456") {
    store.login("mock-token");
    router.push("/");
  } else {
    alert("用户名或密码错误");
  }
};
</script>
<style scoped>
/* 自定义样式 */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* 记住我开关样式 */
input[type="checkbox"]:checked {
  right: 0;
  border-color: #16a34a;
}
input[type="checkbox"]:checked + label {
  background-color: #16a34a;
}
/* 自定义过渡效果 */
.transition {
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
