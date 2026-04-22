<script setup>
defineProps({
    label: { type: String, default: '' },
    modelValue: { type: Boolean, default: false },
    error: { type: String, default: '' },
})
defineEmits(['update:modelValue'])
</script>

<template>
    <div class="flex flex-col gap-1">
        <label class="flex cursor-pointer items-start gap-3">
            <input
                type="checkbox"
                :checked="modelValue"
                @change="$emit('update:modelValue', $event.target.checked)"
                class="mt-0.5 h-4 w-4 rounded border-slate-300 accent-blue-600"
            />
            <span class="text-sm text-blue-600">{{ label }}</span>
        </label>
        <p v-if="error" class="text-xs text-red-500 ml-7">{{ error }}</p>
    </div>
</template>

<style scoped></style>
