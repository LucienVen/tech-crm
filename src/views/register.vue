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
    <!-- 右侧注册区域 -->
    <div
      class="w-full md:w-[38.2%] bg-gray-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto"
    >
      <div class="w-full max-w-md">
        <div class="text-center mb-4 md:mb-6">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-1 md:mb-2">
            创建账号
          </h1>
          <h2
            class="text-xl md:text-2xl font-semibold text-gray-700 mb-1 md:mb-2"
          >
            TECH-CRM
          </h2>
          <p class="text-gray-600">加入我们，开启您的旅程</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-4 md:p-6">
          <!-- 注册表单 -->
          <form @submit.prevent="handleRegister">
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
            <div class="mb-3">
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
            <!-- 确认密码输入框 -->
            <div class="mb-3">
              <div class="relative">
                <input
                  :type="showConfirmPassword ? 'text' : 'password'"
                  v-model="confirmPassword"
                  placeholder="请确认密码"
                  class="w-full px-3 py-2 border-none bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <i
                  :class="
                    showConfirmPassword ? 'fas fa-eye' : 'fas fa-eye-slash'
                  "
                  @click="showConfirmPassword = !showConfirmPassword"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                ></i>
              </div>
            </div>
            <!-- 验证码输入框 -->
            <div class="mb-4">
              <div class="flex gap-2">
                <div class="relative flex-1">
                  <input
                    type="text"
                    v-model="verificationCode"
                    placeholder="验证码"
                    class="w-full px-3 py-2 border-none bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <i
                    class="fas fa-shield-alt absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  ></i>
                </div>
                <button
                  type="button"
                  class="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg whitespace-nowrap !rounded-button cursor-pointer text-sm"
                  @click="refreshVerificationCode"
                >
                  获取验证码
                </button>
              </div>
            </div>
            <!-- 注册按钮 -->
            <button
              type="submit"
              class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition duration-300 !rounded-button whitespace-nowrap cursor-pointer text-sm"
            >
              注册
            </button>
          </form>
        </div>
        <!-- 登录入口 -->
        <div class="text-center mt-4">
          <p class="text-sm text-gray-600">
            已有账号？
            <router-link
              to="/login2"
              class="text-green-600 hover:text-green-700 font-medium"
            >
              立即登录
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import brandImage from "@/assets/images/backgrounds/brid1.jpg";

// 状态管理
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const verificationCode = ref("");
const showPassword = ref(false);
const showConfirmPassword = ref(false);

// 方法
const handleRegister = () => {
  // 实际项目中这里会有表单验证和注册逻辑
  console.log("注册信息:", {
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
    verificationCode: verificationCode.value,
  });
};

const refreshVerificationCode = () => {
  // 实际项目中这里会请求新的验证码
  console.log("刷新验证码");
};
</script>

<style scoped>
/* 自定义样式 */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* 自定义过渡效果 */
.transition {
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
