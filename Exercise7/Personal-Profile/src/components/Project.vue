<script setup></script>

<template>
  <section id="projects" class="bg-slate-100 dark:bg-gray-950 transition-colors duration-300 py-12 sm:py-20">
    <div class="max-w-6xl mx-auto px-6 sm:px-16">

      <!-- Header -->
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12">
        Featured Projects
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

        <!-- Card 1 -->
        <div class="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
          <img
            src="../assets/Screenshot 2026-05-18 134115.png"
            class="w-full h-48 sm:h-56 object-cover object-top"
          />
          <div class="px-5 sm:px-6 py-5">
            <h3 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
              Kinya Medication Care
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              A full-stack healthcare management platform designed to support medication tracking,
              adherence monitoring, health analytics, and real-time patient management through an
              intuitive and modern dashboard experience.
            </p>
            <div class="flex gap-6">
              <a href="#" class="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-teal-400 uppercase tracking-wider hover:underline">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M8 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2M16 2h6v6M10 14L22 2"/></svg>
                Live Demo
              </a>
              <a href="#" class="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-teal-400 uppercase tracking-wider hover:underline">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
          <img
            src="../assets/Screenshot 2026-05-18 135203.png"
            class="w-full h-48 sm:h-56 object-cover object-top"
          />
          <div class="px-5 sm:px-6 py-5">
            <h3 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
              COMBO &amp; BOMB
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              A tactical line-connecting and block-exploding game featuring five progressively
              difficult stages. Players progress from a basic 4×4 practice grid to a high-stakes
              8×8 "Hell" mode filled with 14 bombs, requiring precise strategy to clear each level.
            </p>
            <div class="flex gap-6">
              <a href="#" class="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-teal-400 uppercase tracking-wider hover:underline">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M8 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2M16 2h6v6M10 14L22 2"/></svg>
                Live Demo
              </a>
              <a href="#" class="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-teal-400 uppercase tracking-wider hover:underline">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped></style>
