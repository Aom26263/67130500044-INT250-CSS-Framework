<script setup>
import { ref } from 'vue'

const courses = [
  {
    code: 'INT250',
    status: 'In Progress',
    title: 'CSS Framework',
    description: 'Learn how to build responsive and interactive web applications using Vue.js and Tailwind CSS.',
    progress: 72,
  },
  {
    code: 'INT161',
    status: 'In Progress',
    title: 'Object-Oriented Programming',
    description: 'Practice Java programming, object-oriented design, and software development principles.',
    progress: 58,
  },
]

const selectedCourse = ref(null)

function openModal(course) {
  selectedCourse.value = course
}

function closeModal() {
  selectedCourse.value = null
}
</script>

<template>
  <div class="flex flex-col gap-6 px-4 py-4 sm:flex-row sm:px-10">
    <div
      v-for="course in courses"
      :key="course.code"
      class="flex-1 bg-white rounded-2xl shadow p-6 flex flex-col gap-4"
    >
      <div class="flex justify-between items-center">
        <span class="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
          {{ course.code }}
        </span>
        <span class="text-xs font-medium bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
          {{ course.status }}
        </span>
      </div>

      <div>
        <h2 class="text-lg font-bold text-gray-900">{{ course.title }}</h2>
        <p class="text-sm text-gray-500 mt-1">{{ course.description }}</p>
      </div>

      <div>
        <div class="flex justify-between text-sm text-gray-500 mb-1">
          <span>Progress</span>
          <span>{{ course.progress }}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div
            class="bg-indigo-600 h-2 rounded-full"
            :style="{ width: course.progress + '%' }"
          ></div>
        </div>
      </div>

      <div class="flex items-center gap-4 mt-auto">
        <button
          class="bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
          @click="openModal(course)"
        >
          View Course Details
        </button>
        <button class="text-sm font-medium text-gray-700 hover:text-indigo-600 transition">
          Submit Assignment
        </button>
      </div>
    </div>
  </div>

  <!-- Popup ตอนกด view -->
  <div
    v-if="selectedCourse"
    class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    @click.self="closeModal"
  >
    <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md mx-4 sm:mx-0 relative">
      <button
        class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none"
        @click="closeModal"
      >
       x
      </button>

      <span class="text-xs font-medium bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
        {{ selectedCourse.code }}
      </span>

      <h2 class="text-2xl font-bold text-gray-900 mt-3 mb-2">{{ selectedCourse.title }}</h2>
      <p class="text-sm text-gray-500 mb-6">{{ selectedCourse.description }}</p>

      <div class="bg-gray-50 rounded-xl p-4 mb-6">
        <p class="text-sm font-semibold text-gray-700 mb-2">Learning Progress</p>
        <div class="w-full bg-gray-200 rounded-full h-3">
          <div
            class="bg-indigo-600 h-3 rounded-full"
            :style="{ width: selectedCourse.progress + '%' }"
          ></div>
        </div>
        <p class="text-sm text-gray-500 mt-1">{{ selectedCourse.progress }}% completed</p>
      </div>

      <div class="flex justify-end gap-3">
        <button
          class="px-5 py-2 rounded-xl text-sm font-medium text-gray-700 border border-gray-200 hover:bg-gray-50 transition"
          @click="closeModal"
        >
          Close
        </button>
        <button class="px-5 py-2 rounded-xl text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition">
          Start Learning
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
