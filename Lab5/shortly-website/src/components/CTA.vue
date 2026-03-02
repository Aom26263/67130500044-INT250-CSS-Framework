<script setup></script>

<template>
    <div class="cta-section w-full bg-indigo-900 bg-cover bg-center bg-no-repeat py-20 flex flex-col items-center justify-center gap-6">
        <h1 class="text-white text-3xl md:text-4xl font-bold text-center">Boost your links today</h1>
        <button class="bg-cyan-400 hover:bg-indigo-600 text-white font-bold py-2 px-8 rounded-lg">Get Started</button>
    </div>
</template>

<style scoped>
.cta-section {
    background-image: url('../assets/bg-boost-mobile.svg');
}

@media (min-width: 768px) {
    .cta-section {
        background-image: url('../assets/bg-boost-desktop.svg');
    }
}
</style>