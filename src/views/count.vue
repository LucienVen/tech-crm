<template>
  <v-container class="mt-10">
    <h1 class="text-2xl font-bold mb-4">计数器</h1>
    <div class="flex items-center space-x-4 mb-6">
      <v-btn color="primary" @click="decrement">-</v-btn>
      <span class="text-xl font-mono">{{ count }}</span>
      <v-btn color="primary" @click="increment">+</v-btn>
    </div>
    <v-btn color="secondary" @click="reset">重置</v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};

const reset = () => {
  count.value = 0;
};
</script>
