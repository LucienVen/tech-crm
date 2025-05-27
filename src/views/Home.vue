<template>
  <v-container class="mt-6">
    <h1 class="text-2xl font-bold mb-4">欢迎</h1>
    <v-btn color="error" @click="logout">退出登录</v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'

const store = useUserStore()
const router = useRouter()

const logout = () => {
  store.logout()
  router.push('/login')
}
</script>
