<script setup></script>

<template>
    <section>
        <div class="w-full max-w-6xl mx-auto my-32 px-6 text-gray-800 md:px-0">
            <div class="flex justify-center mb-8 md:justify-between">
                <h2 class="text-4xl text-center uppercase md:text-left md:text-5xl">Our Creations</h2>
                <button class="hidden md:block px-10 py-2 font-bold tracking-widest uppercase border-2 border-black hover:bg-black hover:text-white">See All</button>
            </div>
            <div class="flex flex-col justify-between w-full gap-y-6 text-2xl text-white uppercase md:flex-row md:gap-y-0 md:gap-x-8">
                <div class="relative overflow-hidden md:w-1/4 group">
                    <img src="../assets/desktop/image-deep-earth.jpg" class="hidden w-full duration-200 md:block group-hover:scale-110" />
                    <img src="../assets/mobile/image-deep-earth.jpg" class="w-full md:hidden" />
                    <div class="absolute inset-0 bg-linear-to-b from-transparent to-gray-800 group-hover:from-white/20 group-hover:to-white/20 opacity-80 group-hover:opacity-100"></div>
                    <h5 class="absolute px-6 w-52 bottom-4 duration-200 md:px-10 md:bottom-8">DEEP EARTH</h5>
                </div>

                <div class="relative overflow-hidden md:w-1/4 group">
                    <img src="../assets/desktop/image-night-arcade.jpg" class="hidden w-full duration-200 md:block group-hover:scale-110" />
                    <img src="../assets/mobile/image-night-arcade.jpg" class="w-full md:hidden" />
                    <div class="absolute inset-0 bg-linear-to-b from-transparent to-gray-800 group-hover:from-white/20 group-hover:to-white/20 opacity-80 group-hover:opacity-100"></div>
                    <h5 class="absolute px-6 w-52 bottom-4 duration-200 md:px-10 md:bottom-8">NIGHT ARCADE</h5>
                </div>

                <div class="relative overflow-hidden md:w-1/4 group">
                    <img src="../assets/desktop/image-soccer-team.jpg" class="hidden w-full duration-200 md:block group-hover:scale-110" />
                    <img src="../assets/mobile/image-soccer-team.jpg" class="w-full md:hidden" />
                    <div class="absolute inset-0 bg-linear-to-b from-transparent to-gray-800 group-hover:from-white/20 group-hover:to-white/20 opacity-80 group-hover:opacity-100"></div>
                    <h5 class="absolute px-6 w-52 bottom-4 duration-200 md:px-10 md:bottom-8">SOCCER TEAM VR</h5>
                </div>

                <div class="relative overflow-hidden md:w-1/4 group">
                    <img src="../assets/desktop/image-grid.jpg" class="hidden w-full duration-200 md:block group-hover:scale-110" />
                    <img src="../assets/mobile/image-grid.jpg" class="w-full md:hidden" />
                    <div class="absolute inset-0 bg-linear-to-b from-transparent to-gray-800 group-hover:from-white/20 group-hover:to-white/20 opacity-80 group-hover:opacity-100"></div>
                    <h5 class="absolute px-6 w-52 bottom-4 duration-200 md:px-10 md:bottom-8">THE GRID</h5>
                </div>
            </div>

            <div class="flex flex-col justify-between w-full gap-y-6 text-2xl text-white uppercase pt-10 md:flex-row md:gap-y-0 md:gap-x-8">
                <div class="relative overflow-hidden md:w-1/4 group">
                    <img src="../assets/desktop/image-from-above.jpg" class="hidden w-full duration-200 md:block group-hover:scale-110" />
                    <img src="../assets/mobile/image-from-above.jpg" class="w-full md:hidden" />
                    <div class="absolute inset-0 bg-linear-to-b from-transparent to-gray-800 group-hover:from-white/20 group-hover:to-white/20 opacity-80 group-hover:opacity-100"></div>
                    <h5 class="absolute px-6 w-52 bottom-4 duration-200 md:px-10 md:bottom-8">FROM UP ABOVE VR</h5>
                </div>

                <div class="relative overflow-hidden md:w-1/4 group">
                    <img src="../assets/desktop/image-pocket-borealis.jpg" class="hidden w-full duration-200 md:block group-hover:scale-110" />
                    <img src="../assets/mobile/image-pocket-borealis.jpg" class="w-full md:hidden" />
                    <div class="absolute inset-0 bg-linear-to-b from-transparent to-gray-800 group-hover:from-white/20 group-hover:to-white/20 opacity-80 group-hover:opacity-100"></div>
                    <h5 class="absolute px-6 w-52 bottom-4 duration-200 md:px-10 md:bottom-8">POCKET BOREALIS</h5>
                </div>

                <div class="relative overflow-hidden md:w-1/4 group">
                    <img src="../assets/desktop/image-curiosity.jpg" class="hidden w-full duration-200 md:block group-hover:scale-110" />
                    <img src="../assets/mobile/image-curiosity.jpg" class="w-full md:hidden" />
                    <div class="absolute inset-0 bg-linear-to-b from-transparent to-gray-800 group-hover:from-white/20 group-hover:to-white/20 opacity-80 group-hover:opacity-100"></div>
                    <h5 class="absolute px-6 w-52 bottom-4 duration-200 md:px-10 md:bottom-8">THE CURIOSITY</h5>
                </div>

                <div class="relative overflow-hidden md:w-1/4 group">
                    <img src="../assets/desktop/image-fisheye.jpg" class="hidden w-full duration-200 md:block group-hover:scale-110" />
                    <img src="../assets/mobile/image-fisheye.jpg" class="w-full md:hidden" />
                    <div class="absolute inset-0 bg-linear-to-b from-transparent to-gray-800 group-hover:from-white/20 group-hover:to-white/20 opacity-80 group-hover:opacity-100"></div>
                    <h5 class="absolute px-6 w-52 bottom-4 duration-200 md:px-10 md:bottom-8">MAKE IT FISHEYE</h5>
                </div>
            </div>
            <div class="flex justify-center mt-8 md:hidden">
                <button class="w-full px-10 py-2 my-0 font-bold tracking-widest uppercase border-2 border-black hover:bg-black hover:text-white">See All</button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.group:hover h5 {
    transform: scale(1.1);
    color: black;
}
</style>
