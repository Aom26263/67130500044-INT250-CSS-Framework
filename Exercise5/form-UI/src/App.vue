<script setup>
import { computed, reactive, ref } from "vue";
import BaseInput from "./components/BaseInput.vue";
import BaseSelect from "./components/BaseSelect.vue";
import BaseRadioGroup from "./components/BaseRadioGroup.vue";
import BaseTextarea from "./components/BaseTextarea.vue";
import BaseCheckbox from "./components/BaseCheckbox.vue";

const form = reactive({
  fullName: "",
  studentId: "",
  email: "",
  password: "",
  program: "",
  yearLevel: "",
  bio: "",
  track: "",
  agree: false,
})

const submitted = ref(false)
const showModal = ref(false)

const programOptions = [
  { label: "Computer Science", value: "CS" },
  { label: "Digital Service Innovation", value: "DSI" },
  { label: "Information Technology", value: "IT" },
  { label: "Software Engineering", value: "SE" },
]

const trackOptions = [
  { label: "Frontend UI Development", value: "frontend" },
  { label: "Backend API Design", value: "backend" },
  { label: "UX/UI Design", value: "ux" },
  { label: "AI for Productivity", value: "ai" },
]

const yearOptions = [
  { label: "Year 1", value: "1", description: "Beginner student level" },
  { label: "Year 2", value: "2", description: "Intermediate foundation" },
  { label: "Year 3", value: "3", description: "Project-focused stage" },
  { label: "Year 4", value: "4", description: "Internship or capstone stage" },
]

const errors = computed(() => {
  const e = {}
  if (!form.fullName.trim()) e.fullName = "Full name is required."
  if (!form.studentId.trim()) {
    e.studentId = "Student ID is required."
  } else if (!/^\d{11}$/.test(form.studentId)) {
    e.studentId = "Student ID must be 11 digits."
  }
  if (!form.email.trim()) {
    e.email = "Email is required."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    e.email = "Please enter a valid email address."
  }
  if (!form.password.trim()) {
    e.password = "Password is required."
  } else if (form.password.length < 8) {
    e.password = "Password must be at least 8 characters."
  }
  if (!form.program) e.program = "Please select your program."
  if (!form.track) e.track = "Please choose a workshop track."
  if (!form.yearLevel) e.yearLevel = "Please select your year level."
  if (!form.agree) e.agree = "You must accept the terms before submitting."
  return e
})

const isFormValid = computed(() => Object.keys(errors.value).length === 0)

function handleSubmit() {
  submitted.value = true
  if (!isFormValid.value) return
  showModal.value = true
}

function closeModal() {
  showModal.value = false
  form.fullName = ""
  form.studentId = ""
  form.email = ""
  form.password = ""
  form.program = ""
  form.yearLevel = ""
  form.bio = ""
  form.track = ""
  form.agree = false
  submitted.value = false
}

function handleReset() {
  form.fullName = ""
  form.studentId = ""
  form.email = ""
  form.password = ""
  form.program = ""
  form.yearLevel = ""
  form.bio = ""
  form.track = ""
  form.agree = false
  submitted.value = false
}
</script>

<template>
  <div class="min-h-screen bg-slate-100 py-10 px-4">
    <div class="mx-auto max-w-4xl">
      <div class="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200">
        <div class="border-b border-slate-200 bg-slate-50 px-6 py-5">
          <p class="text-sm font-medium text-blue-600">Hands-on Lab</p>
          <h1 class="mt-1 text-2xl font-bold text-slate-900">Student Workshop Registration Form</h1>
          <p class="mt-2 text-sm text-slate-600">Practice styling form controls, focus status, and validation feedback with Vue.js and Tailwind CSS</p>
        </div>
        <form @submit.prevent="handleSubmit" class="p-6 md:p-8 flex flex-col gap-6">
          <BaseInput
            v-model:fullName="form.fullName"
            v-model:studentId="form.studentId"
            v-model:email="form.email"
            v-model:password="form.password"
            :fullNameError="submitted ? errors.fullName : ''"
            :studentIdError="submitted ? errors.studentId : ''"
            :emailError="submitted ? errors.email : ''"
            :passwordError="submitted ? errors.password : ''"
          />
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <BaseSelect
              label="Program / Major"
              placeholder="Select your program"
              :options="programOptions"
              v-model="form.program"
              :error="submitted ? errors.program : ''"
            />
            <BaseSelect
              label="Workshop Track"
              placeholder="Select a track"
              :options="trackOptions"
              v-model="form.track"
              :error="submitted ? errors.track : ''"
            />
          </div>
          <BaseRadioGroup
            label="Year Level"
            :options="yearOptions"
            v-model="form.yearLevel"
            :error="submitted ? errors.yearLevel : ''"
          />
          <BaseTextarea v-model="form.bio" />

          <BaseCheckbox
            v-model="form.agree"
            label="I confirm that the information provided is correct and I agree to participate in the workshop activities."
            :error="submitted ? errors.agree : ''"
          />

          <div class="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p class="text-sm text-slate-500">
              <span class="font-medium text-slate-700">Tip:</span>
              Try submitting with empty fields to test validation feedback.
            </p>
            <div class="flex gap-3">
              <button
                type="button"
                @click="handleReset"
                class="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                Reset Form
              </button>
              <button
                type="submit"
                class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Submit Registration
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>

  <Transition name="fade">
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div class="mx-4 w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl text-center">
        <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <svg class="h-7 w-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 class="text-xl font-bold text-slate-900">Registration Submitted</h2>
        <p class="mt-2 text-sm text-slate-500">Your workshop registration has been recorded successfully.</p>
        <button
          @click="closeModal"
          class="mt-6 rounded-lg bg-green-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Close
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
