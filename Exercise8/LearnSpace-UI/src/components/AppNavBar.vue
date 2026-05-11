<script setup>
import { ref } from 'vue'
import UserDropdown from './UserDropdown.vue';

const mobileOpen = ref(false)
</script>

<template>
    <header class="sticky top-0 z-30 border-b border-slate-200
    bg-white/90 backdrop-blur
    darK:border-slate-800 dark:bg-slate-900/90">
        <nav class="flex w-full items-center justify-between px-6 py-4">
            <a href="#" class="flex items-center gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-2xl
                bg-indigo-600 text-sm font-bold text-white shadow-sm">LS</div>
                <div>
                    <h1 class="text-lg font-bold leading-tight">LearnSpace</h1>
                    <p class="text-xs text-slate-500 dark:text-slate-400">Student Dashboard</p>
                </div>
            </a>

            <!-- Desktop Menu -->
             <ul class="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex dark:text-slate-400">
                <li><a href="#" class="transition hover:text-indigo-600">Dashboard</a></li>
                <li><a href="#" class="transition hover:text-indigo-600">Courses</a></li>
                <li><a href="#" class="transition hover:text-indigo-600">Assignments</a></li>
                <li><a href="#" class="transition hover:text-indigo-600">Progress</a></li>
             </ul>

             <!-- Desktop Dropdown -->
             <div class="hidden md:block">
               <UserDropdown />
             </div>

             <!-- Mobile Menu -->
             <div class="flex items-center gap-2 md:hidden">
               <UserDropdown />

               <button
                 class="flex items-center justify-center w-9 h-9 rounded-lg text-slate-600 hover:bg-slate-100 transition"
                 @click="mobileOpen = !mobileOpen"
               >
               <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
               </svg>
               <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
               </svg>
               </button>
             </div>
        </nav>

        <!-- Mobile Dropdown Menu -->
        <div v-if="mobileOpen" class="md:hidden border-t border-slate-200 bg-white px-6 py-4 flex flex-col gap-4">
          <ul class="flex flex-col gap-3 text-sm font-medium text-slate-600">
            <li><a href="#" class="block transition hover:text-indigo-600">Dashboard</a></li>
            <li><a href="#" class="block transition hover:text-indigo-600">Courses</a></li>
            <li><a href="#" class="block transition hover:text-indigo-600">Assignments</a></li>
            <li><a href="#" class="block transition hover:text-indigo-600">Progress</a></li>
          </ul>
        </div>
    </header>
</template>

<style scoped></style>