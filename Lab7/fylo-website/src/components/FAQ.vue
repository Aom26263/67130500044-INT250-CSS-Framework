<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const faqs = [
  {
    question: 'What is Bookmark?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?',
  },
  {
    question: 'How can I request a new browser?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?',
  },
  {
    question: 'Is ther a mobile app?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?',
  },
  {
    question: 'What about other Chromium browsers',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?',
  },
]

const openIndex = ref(null)
const faqContainer = ref(null)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}

function handleClickOutside(event) {
  if (faqContainer.value && !faqContainer.value.contains(event.target)) {
    openIndex.value = null
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>

<template>
  <section class="flex flex-col items-center px-4 py-10 md:px-6 md:py-16 bg-gray-50 dark:bg-darkBlue-01">
    <h2 class="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-center dark:text-white">Frequently Asked Questions</h2>
    <p class="text-center text-sm md:text-base max-w-xs md:max-w-lg mb-8 md:mb-12 text-gray-600 dark:text-gray-400">
      Here are some of our FAQs. If you have any other questions you'd like answered please feel
      free to email us.
    </p>

    <div ref="faqContainer" class="w-full max-w-xl md:max-w-2xl">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="border-b border-gray-200 dark:border-gray-700"
      >
        <button
          class="flex justify-between items-center w-full py-4 md:py-5 text-left cursor-pointer bg-transparent border-none gap-4"
          @click="toggle(index)"
        >
          <span
            :class="openIndex === index ? 'text-accent-cyan' : 'text-gray-800 dark:text-gray-200'"
            class="text-sm md:text-base font-medium transition-colors duration-200"
          >
            {{ faq.question }}
          </span>

          <svg
            :class="[
              'w-4 h-4 md:w-5 md:h-5 shrink-0 transition-transform duration-300',
              openIndex === index ? 'rotate-180 text-accent-cyan' : 'text-gray-500 dark:text-gray-400',
            ]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        <div
          v-show="openIndex === index"
          class="pb-4 md:pb-5 text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed text-justify"
        >
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
