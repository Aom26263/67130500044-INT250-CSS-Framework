<script setup>
</script>

<template>
    <div class="flex flex-col p-10 gap-2 hover:border-1 m-10 rounded-xl border-gray-400 bg-white">
       <h1 class="font-bold text-xl">6. Responsive Layout Example</h1>
       <p class="text-sm text-gray-500">A reusable section layout with content on the left and summary panel on the right.</p>
       <div class="flex gap-4 pt-3">
            <div class="flex-1 bg-gray-100 rounded-xl p-6">
                <h2 class="font-bold text-base mb-2">Main Content Area</h2>
                <p class="text-sm text-gray-500">
                    This area can be used for dashboard content, a feature section, course details, or product descriptions.
                    It demonstrates a simple reusable container pattern with consistent padding, rounded corners, and spacing.
                </p>
            </div>

            <div class="w-90 bg-blue-600 rounded-xl p-6 text-white">
                <h2 class="font-bold text-base mb-2">Summary Panel</h2>
                <p class="text-sm mb-4">
                    This panel can be reused for quick stats, announcements, or call-to-action content.
                </p>
                <button class="bg-white text-blue-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100">
                    Learn More
                </button>
            </div>
       </div>
    </div>
</template>

<style scoped></style>