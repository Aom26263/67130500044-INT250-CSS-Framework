<script setup>
const stats = [
  { label: 'Active Courses', value: '3' },
  { label: 'Pending Assignments', value: '2' },
  { label: 'Completed Tasks', value: '8' },
  { label: 'Overall Progress', value: '72%' },
]
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-10 py-4">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="bg-white rounded-2xl shadow-sm p-5 flex flex-col gap-3"
    >
      <p class="text-sm text-gray-500">{{ stat.label }}</p>
      <p class="text-3xl font-bold text-gray-800">{{ stat.value }}</p>
    </div>
  </div>
</template>