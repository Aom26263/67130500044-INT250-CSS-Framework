<script setup>
defineProps({
    label: { type: String, default: '' },
    modelValue: { type: String, default: '' },
    options: { type: Array, default: () => [] },
    error: { type: String, default: '' },
})
defineEmits(['update:modelValue'])
</script>

<template>
    <div class="flex flex-col gap-3">
        <label class="text-sm font-semibold text-slate-800">
            {{ label }} <span class="text-red-500">*</span>
        </label>
        <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
            <label
                v-for="opt in options"
                :key="opt.value"
                class="flex cursor-pointer items-start justify-between rounded-lg border p-4 transition"
                :class="modelValue === opt.value
                    ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-300'
                    : 'border-slate-300 bg-white hover:border-slate-400'"
            >
                <div class="flex flex-col gap-1">
                    <span class="text-sm font-semibold text-slate-800">{{ opt.label }}</span>
                    <span class="text-xs text-blue-500">{{ opt.description }}</span>
                </div>
                <input
                    type="radio"
                    :value="opt.value"
                    :checked="modelValue === opt.value"
                    @change="$emit('update:modelValue', opt.value)"
                    class="mt-0.5 accent-blue-600"
                />
            </label>
        </div>
        <p v-if="error" class="text-xs text-red-500">{{ error }}</p>
    </div>
</template>

<style scoped></style>
