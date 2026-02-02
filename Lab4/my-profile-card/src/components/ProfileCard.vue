<script setup>
defineProps([
    "profileimg",
    "background",
    "name",
    "subheading",
    "followers",
    "following",
    "projects",
    "facebook",
    "Instagram",
    "Tiktok"
])
</script>

<template>
    <div class="bg-white shadow-lg rounded-2xl min-[320px]
    overflow-hidden text-center hover:-translate-y-2 transition-transform duration-300">
        <div class="relative min-h-32 bg-cover bg-center" 
        :style="'background-image: url('+ background +')'">
            <img :src="profileimg" alt="Profile Image"
            class="inline-block w-32 h-32 rounded-full object-center object-cover
            border-[6px] border-white absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2">
        </div>

        <div class="px-6 pt-20 pb-6">
            <h2 class="font-bold text-black-800 text-2xl mb-2">{{ name }}</h2>
            
            <h3 class="text-gray-600 text-lg">{{ subheading }}</h3>
        </div>

        <!-- stats -->
         <div class="p-6 border-t border-gray-200 flex items-center justify-center gap-6">
            <!-- Followers -->
            <div>
                <h4 class="text-gray-600 text-sm">Followers</h4>
                <p class="font-bold text-gray-600 text-2xl">{{ followers }}</p>
            </div>
            
            <!-- Following -->
             <div>
                <h4 class="text-gray-600 text-sm">Following</h4>
                <p class="font-bold text-gray-600 text-2xl">{{ following }}</p>
             </div>

             <!-- Project -->
             <div>
                <h4 class="text-gray-600 text-sm">Project</h4>
                <p class="font-bold text-gray-600 text-2xl">{{ projects }}</p>
             </div>
         </div>
         <div class="p-4 flex justify-center gap-4">
            <!-- facebook -->
            <a :href="facebook" target="_blank">
                <img src="../assets/icon-facebook.png" class="w-8 h-8">
            </a>

             <!-- Ig -->
            <a :href="Instagram" target="_blank">
                <img src="../assets/ig-icon.jpg" class="w-8 h-8">
            </a>

             <!-- tiktok -->
            <a :href="Tiktok" target="_blank">
                <img src="../assets/tiktok-icon-free-png.png" class="w-8 h-8">
            </a>
         </div>
    </div>
</template>

<style scoped></style>