<script setup>
import { ref } from 'vue'

const showEmail = ref(false)

function toggleEmail() {
  showEmail.value = !showEmail.value
}
</script>

<template>
  <section id="contact" class="bg-slate-200 dark:bg-black transition-colors duration-300 py-10 sm:py-16 px-4 sm:px-8">
    <div class="max-w-4xl mx-auto">

      <!-- Card -->
      <div class="bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl px-6 py-12 sm:px-16 sm:py-20 text-center border border-gray-200 dark:border-gray-800 transition-colors duration-300">

        <!-- Title -->
        <h2 class="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-5">
          Get In Touch
        </h2>

        <!-- Subtitle -->
        <p class="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-10 sm:mb-14">
          Have a vision for your next digital product? Let's build something
          exceptional together. Reach out via any of my platforms.
        </p>

        <!-- Social icons -->
        <div class="flex flex-wrap justify-center gap-8 sm:gap-12">

          <!-- Email -->
          <div class="relative flex flex-col items-center gap-3 group">
            <button @click="toggleEmail" class="flex flex-col items-center gap-3 cursor-pointer">
              <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-blue-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="3"/>
                  <polyline points="2,4 12,13 22,4"/>
                </svg>
              </div>
              <span class="text-xs text-gray-600 dark:text-gray-400 font-medium group-hover:text-blue-600 dark:group-hover:text-white transition-colors">Email</span>
            </button>

            <div
              v-if="showEmail"
              class="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 whitespace-nowrap z-10"
            >
              <p class="text-xs text-gray-500 dark:text-gray-400 mb-1 font-medium">Email</p>
              <p class="text-sm font-bold text-blue-600 dark:text-blue-400">rom26263@gmail.com</p>
              <div class="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800"></div>
            </div>
          </div>

          <!-- GitHub -->
          <a href="https://github.com/Aom26263" target="_blank" class="flex flex-col items-center gap-3 group">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-blue-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16,18 22,12 16,6"/>
                <polyline points="8,6 2,12 8,18"/>
              </svg>
            </div>
            <span class="text-xs text-gray-600 dark:text-gray-400 font-medium group-hover:text-blue-600 dark:group-hover:text-white transition-colors">GitHub</span>
          </a>

          <!-- Instagram -->
          <a href="https://www.instagram.com/axmsz_p" target="_blank" class="flex flex-col items-center gap-3 group">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-blue-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </div>
            <span class="text-xs text-gray-600 dark:text-gray-400 font-medium group-hover:text-blue-600 dark:group-hover:text-white transition-colors">Instagram</span>
          </a>

          <!-- Facebook -->
          <a href="https://www.facebook.com/sorrawich.prasopsub" target="_blank" class="flex flex-col items-center gap-3 group">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-blue-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2 C7 2 5 7 5 12 C5 17 7 22 12 22"/>
                <path d="M12 2 C17 2 19 7 19 12 C19 17 17 22 12 22"/>
              </svg>
            </div>
            <span class="text-xs text-gray-600 dark:text-gray-400 font-medium group-hover:text-blue-600 dark:group-hover:text-white transition-colors">Facebook</span>
          </a>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
