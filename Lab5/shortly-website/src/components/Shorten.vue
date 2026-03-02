<script setup>
const links = [
  { original: 'https://frontendmentor.io', short: 'https://rel.ink/k4lKyk' },
  { original: 'https://twitter.com/frontendmentor', short: 'https://rel.ink/gxOXp9' },
  { original: 'https://linkedin.com/frontend-mentor', short: 'https://rel.ink/gob3X9' }
];
</script>

<template>
  <div class="w-full px-6 lg:px-12 py-10 bg-gray-100">
    <div class="bg-indigo-900 p-6 md:p-10 rounded-xl flex flex-col md:flex-row gap-4 items-center">
      <input type="text" placeholder="Shorten a link here..." class="w-full md:flex-1 p-3 md:p-4 rounded-lg text-lg bg-white">
      <button class="w-full md:w-auto bg-cyan-400 hover:bg-indigo-600 text-white font-bold py-3 md:py-4 px-8 rounded-lg">
        Shorten It!
      </button>
    </div>

    <div class="mt-6 flex flex-col gap-4">
      <div v-for="(link, index) in links" :key="index" class="bg-white rounded-lg flex flex-col md:flex-row md:items-center justify-between p-4 shadow-sm">
        <div class="text-black font-medium border-b border-gray-200 pb-3 md:border-none md:pb-0 w-full md:w-auto truncate text-center md:text-left">
          {{ link.original }}
        </div>
        
        <div class="flex flex-col md:flex-row items-center gap-3 mt-3 md:mt-0 w-full md:w-auto">
          <div class="text-cyan-400 font-medium text-center md:text-left">
            {{ link.short }}
          </div>
          <button class="bg-cyan-400 hover:bg-indigo-600 text-white font-bold py-2 px-8 rounded-lg">
            Copy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>