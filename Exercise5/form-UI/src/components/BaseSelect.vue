<script setup>
defineProps({
    label: { type: String, default: '' },
    modelValue: { type: String, default: '' },
    options: { type: Array, default: () => [] },
    placeholder: { type: String, default: 'Select an option' },
    error: { type: String, default: '' },
})
defineEmits(['update:modelValue'])
</script>

<template>
    <div class="flex flex-col gap-1">
        <label class="text-sm font-semibold text-slate-800">
            {{ label }} <span class="text-red-500">*</span>
        </label>
        <select
            :value="modelValue"
            @change="$emit('update:modelValue', $event.target.value)"
            :class="error ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-blue-500 focus:ring-blue-300'"
            class="rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:ring-2 cursor-pointer"
        >
            <option value="" disabled selected>{{ placeholder }}</option>
            <option v-for="opt in options" :key="opt.value" :value="opt.value">
                {{ opt.label }}
            </option>
        </select>
        <p v-if="error" class="text-xs text-red-500">{{ error }}</p>
    </div>
</template>

<style scoped></style>
