<script setup>
import { ref, watch } from 'vue'

const active = ref('Experience')
const isDark = ref(false)
const menuOpen = ref(false)

watch(isDark, (val) => {
  document.documentElement.classList.toggle('dark', val)
})

function goTo(section, id) {
  active.value = section
  menuOpen.value = false
  if (id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">

      <!-- Brand -->
      <span class="text-xl font-bold text-gray-900 dark:text-white tracking-tight">S. Prasopsub</span>

      <!-- Desktop nav links -->
      <div class="hidden sm:flex items-center gap-8">
        <a href="#" @click.prevent="goTo('Hero', 'hero')"
          :class="['text-sm font-medium transition-colors pb-0.5', active === 'Experience' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white']"
        >Experience</a>

        <a href="#" @click.prevent="goTo('Projects', 'projects')"
          :class="['text-sm font-medium transition-colors pb-0.5', active === 'Projects' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white']"
        >Projects</a>

        <a href="#" @click.prevent="goTo('Stack', 'stack')"
          :class="['text-sm font-medium transition-colors pb-0.5', active === 'Stack' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white']"
        >Stack</a>

        <a href="#" @click.prevent="goTo('About', 'about')"
          :class="['text-sm font-medium transition-colors pb-0.5', active === 'About' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white']"
        >About</a>

        <a href="#" @click.prevent="goTo('Contact', 'contact')"
          :class="['text-sm font-medium transition-colors pb-0.5', active === 'Contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white']"
        >Contact</a>
      </div>

      <!-- Right side: dark toggle + hamburger -->
      <div class="flex items-center gap-3">
        <!-- Dark / Light toggle -->
        <button
          @click="isDark = !isDark"
          class="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300 cursor-pointer"
          :class="isDark ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' : 'bg-gray-900 text-white hover:bg-gray-700'"
        >
          <span v-if="!isDark">🌙</span>
          <span v-else>☀️</span>
          <span class="hidden sm:inline">{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
        </button>

        <!-- Hamburger (mobile only) -->
        <button
          @click="menuOpen = !menuOpen"
          class="sm:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <span :class="['block w-5 h-0.5 bg-gray-700 dark:bg-gray-200 transition-all duration-300', menuOpen ? 'rotate-45 translate-y-2' : '']"></span>
          <span :class="['block w-5 h-0.5 bg-gray-700 dark:bg-gray-200 transition-all duration-300', menuOpen ? 'opacity-0' : '']"></span>
          <span :class="['block w-5 h-0.5 bg-gray-700 dark:bg-gray-200 transition-all duration-300', menuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
        </button>
      </div>
    </div>

    <!-- Mobile dropdown menu -->
    <div
      v-if="menuOpen"
      class="sm:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-6 py-4 flex flex-col gap-4 transition-colors duration-300"
    >
      <a href="#" @click.prevent="goTo('Hero', 'hero')"
        :class="['text-sm font-medium transition-colors', active === 'Experience' ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300']"
      >Experience</a>

      <a href="#" @click.prevent="goTo('Projects', 'projects')"
        :class="['text-sm font-medium transition-colors', active === 'Projects' ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300']"
      >Projects</a>

      <a href="#" @click.prevent="goTo('Stack', 'stack')"
        :class="['text-sm font-medium transition-colors', active === 'Stack' ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300']"
      >Stack</a>

      <a href="#" @click.prevent="goTo('About', 'about')"
        :class="['text-sm font-medium transition-colors', active === 'About' ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300']"
      >About</a>

      <a href="#" @click.prevent="goTo('Contact', 'contact')"
        :class="['text-sm font-medium transition-colors', active === 'Contact' ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300']"
      >Contact</a>
    </div>
  </nav>
</template>

<style scoped></style>
