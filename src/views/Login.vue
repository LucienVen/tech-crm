<template>
  <v-container class="mt-10">
    <v-form @submit.prevent="login">
      <v-text-field v-model="username" label="用户名" required />
      <v-text-field v-model="password" label="密码" type="password" required />
      <v-btn type="submit" color="primary" class="mt-4">登录</v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const store = useUserStore()
const router = useRouter()

const login = () => {
  if (username.value === 'admin' && password.value === '123456') {
    store.login('mock-token')
    router.push('/')
  } else {
    alert('用户名或密码错误')
  }
}
</script>
