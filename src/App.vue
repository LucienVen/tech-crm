<template>
  <v-app>
    <v-app-bar v-if="!isLogin2Page && !isRegisterPage" app color="primary" dark>
      <v-toolbar-title>My App</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isLogin2Page = computed(() => route.name === "Login2");
const isRegisterPage = computed(() => route.name === "Register");
</script>
