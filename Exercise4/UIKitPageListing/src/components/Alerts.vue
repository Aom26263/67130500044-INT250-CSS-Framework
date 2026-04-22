<script setup>
</script>

<template>
    <div class="flex flex-col p-10 gap-2 hover:border-1 m-10 rounded-xl border-gray-400 bg-white">
       <h1 class="font-bold text-xl">3. Alerts</h1>
       <p class="text-sm text-gray-500">Reusable feedback messages for success, warning, and error states.</p>
       <div class="flex flex-col gap-3 pt-3">
            <button class="border-1 border-green-200 rounded-l p-4 py-5 bg-blue-100 text-green-700 text-left">
                <h1 class="font-bold">Success Alert</h1>
                <p class="text-sm">Your profile has been updated successfully.</p>
            </button>
            <button class="border-1 border-yellow-200 rounded-l p-4 py-5 bg-blue-100 text-yellow-700 text-left">
                <h1 class="font-bold">Warning Alert</h1>
                <p class="text-sm">Please review the form before submitting.</p>
            </button>
            <button class="border-1 border-red-200 rounded-l p-4 py-5 bg-blue-100 text-red-700 text-left">
                <h1 class="font-bold">Error Alert</h1>
                <p class="text-sm">Something went wrong. Please try again later.</p>
            </button>
       </div>
    </div>
</template>

<style scoped></style>