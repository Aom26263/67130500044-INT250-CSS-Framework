<script setup>
import { computed } from 'vue'

const props = defineProps({
    label: { type: String, default: 'Short Bio' },
    modelValue: { type: String, default: '' },
    placeholder: { type: String, default: 'Tell us about your interests...' },
    hint: { type: String, default: 'Optional: briefly describe your interests or previous experience.' },
    maxlength: { type: Number, default: 200 },
})
defineEmits(['update:modelValue'])

const charCount = computed(() => props.modelValue?.length ?? 0)
</script>

<template>
    <div class="flex flex-col gap-1">
        <label class="text-sm font-semibold text-slate-800">{{ label }}</label>
        <textarea
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :maxlength="maxlength"
            :placeholder="placeholder"
            rows="4"
            class="rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 outline-none resize-y transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        ></textarea>
        <div class="flex items-center justify-between">
            <p class="text-xs text-slate-500">{{ hint }}</p>
            <p class="text-xs text-slate-400">{{ charCount }} / {{ maxlength }}</p>
        </div>
    </div>
</template>

<style scoped></style>
