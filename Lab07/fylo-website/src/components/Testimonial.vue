<script setup>
import bgQuotes from '../asset/bg-quotes.png'
import profile1 from '../asset/profile-1.jpg'
import profile2 from '../asset/profile-2.jpg'
import profile3 from '../asset/profile-3.jpg'

const testimonials = [
  {
    text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    name: 'Satish Patel',
    title: 'Founder & CEO. Huddle',
    avatar: profile1,
  },
  {
    text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    name: 'Bruce McKenzie',
    title: 'Founder & CEO. Huddle 2',
    avatar: profile2,
  },
  {
    text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    name: 'Eva Boyd',
    title: 'Founder & CEO. Huddle 3',
    avatar: profile3,
  },
]
</script>

<template>
  <section class="px-6 md:px-10 pt-12 md:pt-16 pb-16 md:pb-20 relative bg-gray-50 dark:bg-darkBlue">
    <img
      :src="bgQuotes"
      alt=""
      class="absolute w-12 md:w-24 z-0"
      style="top: 1rem; left: 1.5rem;"
    />

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 relative z-10 mt-8 max-w-6xl mx-auto">
      <div
        v-for="(item, index) in testimonials"
        :key="index"
        class="bg-white dark:bg-darkBlue-03 rounded-lg p-6 md:p-8 flex flex-col gap-4 md:gap-6 shadow-sm"
      >
        <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{{ item.text }}</p>
        <div class="flex items-center gap-3">
          <img :src="item.avatar" :alt="item.name" class="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover shrink-0" />
          <div>
            <p class="text-gray-900 dark:text-white font-bold text-sm">{{ item.name }}</p>
            <p class="text-gray-500 dark:text-gray-400 text-xs">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>