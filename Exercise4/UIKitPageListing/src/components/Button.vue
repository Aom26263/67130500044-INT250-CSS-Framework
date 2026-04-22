<script setup>
</script>

<template>
    <div class="flex flex-col p-10 gap-2 hover:border-1 m-10 rounded-xl border-gray-400 bg-white">
       <h1 class="font-bold text-xl">1. Buttons</h1>
       <p class="text-sm text-gray-500">Reusable action styles for primary, secondary, outline, and disabled states.</p>
       <div class="flex gap-10 pt-3">
            <button class="border-1 rounded-lg p-5 py-3 bg-blue-700 text-white">Primary Button</button>
            <button class="border-1 rounded-lg p-5 py-3 bg-gray-600 text-white">secondary Button</button>
            <button class="border-1 rounded-lg p-5 py-3 text-blue-700">Outline Button</button>
            <button class="rounded-lg p-5 py-3 bg-blue-200 text-gray-400">Disabled Button</button>
       </div>
    </div>
</template>

<style scoped></style>