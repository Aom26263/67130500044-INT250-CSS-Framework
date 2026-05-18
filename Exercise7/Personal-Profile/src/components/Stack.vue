<script setup></script>

<template>
  <section id="stack" class="bg-slate-100 dark:bg-gray-950 transition-colors duration-300 py-12 sm:py-20">
    <div class="max-w-6xl mx-auto px-6 sm:px-16">

      <!-- Header -->
      <div class="text-center mb-10 sm:mb-14">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Technical Stack</h2>
        <p class="text-gray-500 dark:text-gray-400 text-sm sm:text-base">The tools I use for maximum efficiency and performance</p>
      </div>

      <!-- Cards: 3 col mobile → 6 col sm+ -->
      <div class="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-5">

        <!-- JavaScript -->
        <div class="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 sm:px-8 py-5 sm:py-8 flex flex-col items-center gap-2 sm:gap-3 hover:shadow-md transition-shadow duration-200">
          <svg viewBox="0 0 40 40" class="w-8 h-8 sm:w-10 sm:h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="36" height="36" rx="5" stroke="#2563EB" stroke-width="2.5"/>
            <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" fill="#2563EB" font-size="13" font-weight="800" font-family="monospace">JS</text>
          </svg>
          <span class="text-xs font-semibold text-gray-600 dark:text-gray-300 text-center leading-tight">JavaScript</span>
        </div>

        <!-- Vue.js -->
        <div class="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 sm:px-8 py-5 sm:py-8 flex flex-col items-center gap-2 sm:gap-3 hover:shadow-md transition-shadow duration-200">
          <svg viewBox="0 0 40 40" class="w-8 h-8 sm:w-10 sm:h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="4" fill="#2563EB"/>
            <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#2563EB" stroke-width="2" fill="none"/>
            <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#2563EB" stroke-width="2" fill="none" transform="rotate(60 20 20)"/>
            <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#2563EB" stroke-width="2" fill="none" transform="rotate(120 20 20)"/>
          </svg>
          <span class="text-xs font-semibold text-gray-600 dark:text-gray-300 text-center leading-tight">Vue.js</span>
        </div>

        <!-- Node.js -->
        <div class="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 sm:px-8 py-5 sm:py-8 flex flex-col items-center gap-2 sm:gap-3 hover:shadow-md transition-shadow duration-200">
          <svg viewBox="0 0 40 40" class="w-8 h-8 sm:w-10 sm:h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="36" height="36" rx="6" stroke="#2563EB" stroke-width="2.5"/>
            <polyline points="10,26 17,20 10,14" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <line x1="20" y1="26" x2="30" y2="26" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
          <span class="text-xs font-semibold text-gray-600 dark:text-gray-300 text-center leading-tight">Node.js</span>
        </div>

        <!-- MySQL -->
        <div class="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 sm:px-8 py-5 sm:py-8 flex flex-col items-center gap-2 sm:gap-3 hover:shadow-md transition-shadow duration-200">
          <svg viewBox="0 0 40 40" class="w-8 h-8 sm:w-10 sm:h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="20" cy="10" rx="12" ry="5" stroke="#2563EB" stroke-width="2.5"/>
            <path d="M8 10 Q8 20 20 20 Q32 20 32 10" stroke="#2563EB" stroke-width="2.5" fill="none"/>
            <ellipse cx="20" cy="20" rx="12" ry="5" stroke="#2563EB" stroke-width="2.5"/>
            <path d="M8 20 Q8 30 20 30 Q32 30 32 20" stroke="#2563EB" stroke-width="2.5" fill="none"/>
          </svg>
          <span class="text-xs font-semibold text-gray-600 dark:text-gray-300 text-center leading-tight">MySQL</span>
        </div>

        <!-- Tailwind CSS -->
        <div class="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 sm:px-8 py-5 sm:py-8 flex flex-col items-center gap-2 sm:gap-3 hover:shadow-md transition-shadow duration-200">
          <svg viewBox="0 0 40 40" class="w-8 h-8 sm:w-10 sm:h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="11" y="2" width="18" height="30" rx="4" stroke="#2563EB" stroke-width="2.5"/>
            <line x1="11" y1="10" x2="29" y2="10" stroke="#2563EB" stroke-width="2"/>
            <ellipse cx="20" cy="36" rx="5" ry="2.5" stroke="#2563EB" stroke-width="2"/>
            <line x1="20" y1="32" x2="20" y2="33.5" stroke="#2563EB" stroke-width="2"/>
          </svg>
          <span class="text-xs font-semibold text-gray-600 dark:text-gray-300 text-center leading-tight">Tailwind<br/>CSS</span>
        </div>

        <!-- AWS / Vercel -->
        <div class="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl px-4 sm:px-8 py-5 sm:py-8 flex flex-col items-center gap-2 sm:gap-3 hover:shadow-md transition-shadow duration-200">
          <svg viewBox="0 0 40 40" class="w-8 h-8 sm:w-10 sm:h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 26 C8 26 6 22 10 19 C10 13 15 10 20 12 C22 8 28 8 30 13 C34 13 36 17 34 21 L32 26Z" stroke="#2563EB" stroke-width="2.5" stroke-linejoin="round"/>
            <path d="M14 26 L20 14 L26 26" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <line x1="16" y1="22" x2="24" y2="22" stroke="#2563EB" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="text-xs font-semibold text-gray-600 dark:text-gray-300 text-center leading-tight">AWS /<br/>Vercel</span>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped></style>
