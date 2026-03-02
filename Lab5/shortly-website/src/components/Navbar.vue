<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);
</script>

<template>
  <nav class="flex items-center justify-between p-6">
    <div class="flex items-center gap-20">
        <div class="">
            <img src="../assets/logo.svg">
        </div>
        <div class="font-bold hidden lg:flex gap-6">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
        </div>
    </div>
    <div class="hidden lg:flex items-center gap-4">
        <a href="#" class="font-bold">Login</a>
        <button type="button" class="font-bold text-white bg-sky-500/75 px-4 py-2 rounded-full">Sign Up</button>
    </div>
    <button @click="isMenuOpen = !isMenuOpen" class="block lg:hidden text-3xl text-gray-500">
        <span v-if="!isMenuOpen">☰</span>
        <span v-else>✕</span>
    </button>
    <div v-if="isMenuOpen" class="lg:hidden bg-blue-900 text-white font-bold flex flex-col items-center gap-6 p-8 mx-6 rounded-xl absolute top-20 left-0 right-0 z-50">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
        <a href="#">Login</a>
        <button type="button" class="bg-sky-500/75 w-full py-3 rounded-full">Sign Up</button>
  </div>
  </nav>
</template>

<style scoped></style>