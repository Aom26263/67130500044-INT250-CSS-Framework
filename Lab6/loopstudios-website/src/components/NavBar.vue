<script setup>
import { ref } from 'vue'

defineProps({
    menuItems: {
        type: Array,
        required: true,
    },
})

const isOpen = ref(false)
</script>

<template>
    <!-- Hero Section -->
    <section class="relative bg-[url(assets/mobile/image-hero.jpg)] bg-no-repeat bg-cover md:bg-[url(assets/desktop/image-hero.jpg)] md:bg-no-repeat md:bg-cover">

        <!-- Mobile Menu Overlay -->
        <div v-if="isOpen" class="fixed inset-0 bg-black z-20 flex flex-col gap-10 px-6 py-12 md:hidden overflow-y-auto">
            <div class="flex items-center justify-between">
                <img src="../assets/logo.svg" alt="Loopstudios Logo">
                <button @click="isOpen = false">
                    <img src="../assets/icon-close.svg" alt="Close Menu">
                </button>
            </div>
            <nav class="flex flex-col gap-6 text-white text-2xl uppercase font-light tracking-widest">
                <a v-for="item in menuItems" :key="item.name" :href="item.link" @click="isOpen = false">
                    {{ item.name }}
                </a>
            </nav>
        </div>

        <div class="container max-w-6xl mx-auto px-6 py-12 flex flex-col gap-20 md:gap-28">
            <nav class="flex items-center justify-between text-white">
                <img src="../assets/logo.svg" alt="Loopstudios Logo">

                <div class="hidden md:flex gap-8 text-sm font-normal">
                    <div v-for="item in menuItems" :key="item.name" class="group flex flex-col items-center">
                        <a :href="item.link">{{ item.name }}</a>
                        <div class="w-1/2 border-b-2 border-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </div>
                </div>

                <button class="md:hidden z-30" @click="isOpen = true">
                    <img src="../assets/icon-hamburger.svg" alt="Open Menu">
                </button>
            </nav>

            <div class="border-2 border-white text-white p-6 md:p-8 w-full md:w-fit">
                <h1 class="text-4xl md:text-6xl font-light uppercase leading-tight tracking-widest">
                    Impressive<br>Experiences<br>That Deliver
                </h1>
            </div>
        </div>
    </section>
</template>

<style scoped></style>