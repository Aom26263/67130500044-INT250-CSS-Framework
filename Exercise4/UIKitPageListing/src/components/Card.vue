<script setup>
const cards = [
    {
        tag: 'New',
        title: 'Basic Card',
        description: 'A simple reusable card for general content blocks in a dashboard or landing page.'
    },
    {
        tag: 'Profile',
        title: 'Student Profile Card',
        description: 'A profile summary card showing student status, program, and quick information.'
    },
    {
        tag: 'Event',
        title: 'Event Card',
        description: 'A reusable event component for workshops, seminars, or hackathon activities.'
    }
]
</script>

<template>
    <div class="flex flex-col p-10 gap-2 hover:border-1 m-10 rounded-xl border-gray-400 bg-white">
       <h1 class="font-bold text-xl">5. Cards</h1>
       <p class="text-sm text-gray-500">Responsive card layout for reusable content blocks such as event, profile, or product cards.</p>
       <div class="flex gap-10 pt-3">
            <div
                v-for="card in cards"
                :key="card.title"
                class="flex flex-col border-1 w-80 rounded-lg p-3 border-gray-300"
            >
                <div class="flex justify-between">
                    <p class="border-1 rounded-full p-0 text-sm px-5 text-blue-700 bg-blue-200 border-blue-200">{{ card.tag }}</p>
                    <p class="text-sm text-gray-500">Reusable</p>
                </div>
                <div class="flex flex-col pt-5 gap-4">
                    <h1 class="font-bold text-xl">{{ card.title }}</h1>
                    <p class="text-sm text-gray-500">{{ card.description }}</p>
                    <p class="border-1 rounded-lg p-0 text-sm px-5 text-gray-500 border-gray-300 self-start mt-4">View Details</p>
                </div>
            </div>
       </div>
    </div>
</template>

<style scoped></style>