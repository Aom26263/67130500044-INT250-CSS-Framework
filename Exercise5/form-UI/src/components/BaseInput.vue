<script setup>
defineProps({
  fullName: String,
  studentId: String,
  email: String,
  password: String,
  fullNameError: String,
  studentIdError: String,
  emailError: String,
  passwordError: String,
})

const emit = defineEmits([
  'update:fullName',
  'update:studentId',
  'update:email',
  'update:password',
])
</script>

<template>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 w-full">
        <div class="flex flex-col gap-1">
            <label class="text-sm font-semibold text-slate-800">Full Name <span class="text-red-500">*</span></label>
            <input
                type="text"
                placeholder="Enter your full name"
                :value="fullName"
                @input="emit('update:fullName', $event.target.value)"
                :class="fullNameError ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-blue-500 focus:ring-blue-200'"
                class="rounded-lg border px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 outline-none focus:ring-2 transition"
            />
            <p v-if="fullNameError" class="text-xs text-red-500">{{ fullNameError }}</p>
        </div>

        <div class="flex flex-col gap-1">
            <label class="text-sm font-semibold text-slate-800">Student ID <span class="text-red-500">*</span></label>
            <input
                type="text"
                placeholder="e.g. 6601234567"
                :value="studentId"
                @input="emit('update:studentId', $event.target.value)"
                :class="studentIdError ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-blue-500 focus:ring-blue-200'"
                class="rounded-lg border px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 outline-none focus:ring-2 transition"
            />
            <p v-if="studentIdError" class="text-xs text-red-500">{{ studentIdError }}</p>
        </div>

        <div class="flex flex-col gap-1">
            <label class="text-sm font-semibold text-slate-800">Email <span class="text-red-500">*</span></label>
            <input
                type="email"
                placeholder="yourname@example.com"
                :value="email"
                @input="emit('update:email', $event.target.value)"
                :class="emailError ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-blue-500 focus:ring-blue-200'"
                class="rounded-lg border px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 outline-none focus:ring-2 transition"
            />
            <p v-if="emailError" class="text-xs text-red-500">{{ emailError }}</p>
        </div>

        <div class="flex flex-col gap-1">
            <label class="text-sm font-semibold text-slate-800">Password <span class="text-red-500">*</span></label>
            <input
                type="password"
                placeholder="At least 8 characters"
                :value="password"
                @input="emit('update:password', $event.target.value)"
                :class="passwordError ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-blue-500 focus:ring-blue-200'"
                class="rounded-lg border px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 outline-none focus:ring-2 transition"
            />
            <p v-if="passwordError" class="text-xs text-red-500">{{ passwordError }}</p>
        </div>
    </div>
</template>

<style scoped></style>
