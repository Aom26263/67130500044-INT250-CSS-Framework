<script setup></script>

<template>
    <header class="flex justify-end p-8">
        <nav class="flex gap-8 text-sm">
            <a href="#">Vector</a>
            <a href="#">Illustrations</a>
            <a href="#">Images</a>
            <a href="#">Icons</a>
        </nav>
    </header>
  
    <div class="flex justify-between px-8 py-8">
        <div class="flex items-center">
            <input type="text" placeholder="search" class="w-full placeholder-gray-400 focus:border-gray-400 "/>
        </div>
        <button type="button" class="px-6 py-2 text-sm  font-medium text-white transition-colors duration-200 bg-black rounded shadow-md 
        hover:bg-gray-800">Upload</button>
    </div>

    <div class="flex flex-col items-center gap-3">
        <div class="flex justify-center items-center gap-4">
            <img src="../assets/pic1.jpeg" class="w-xs">
            <img src="../assets/pic2.jpg" class="w-xs h-54">
            <img src="../assets/pic3.webp" class="w-xs">
        </div>
        <div class="flex justify-center items-center gap-4">
            <img src="../assets/pic4.jpg" class="w-xs">
            <img src="../assets/pic5.jpg" class="w-xs">
            <img src="../assets/pic6.jpeg" class="w-xs">
        </div>
    </div>

    
    
</template>

<style scoped></style>