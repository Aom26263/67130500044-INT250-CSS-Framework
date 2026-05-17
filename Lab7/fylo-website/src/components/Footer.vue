<script setup>
import iconPhone from '../asset/icon-phone.svg'
import iconEmail from '../asset/icon-email.svg'
import iconFacebook from '../asset/facebook.svg'
import iconTwitter from '../asset/twitter.svg'
import iconInstagram from '../asset/instagram.svg'
</script>

<template>
  <footer class="bg-[#0d1f3c] text-white px-6 py-10 md:px-12 md:py-14">
    <div class="max-w-6xl mx-auto flex flex-col gap-10 md:flex-row md:justify-between md:gap-10">

      <!-- Contact Info -->
      <div class="flex flex-col gap-5 text-sm">
        <div class="flex items-center gap-3">
          <img :src="iconPhone" alt="phone" class="w-4 h-4 shrink-0" />
          <span>+1-543-123-4567</span>
        </div>
        <div class="flex items-center gap-3">
          <img :src="iconEmail" alt="email" class="w-4 h-4 shrink-0" />
          <span>example@fylo.com</span>
        </div>
      </div>

      <!-- Nav Links -->
      <div class="flex flex-col sm:flex-row gap-3 sm:gap-10 md:gap-16 text-sm">
        <ul class="flex flex-col gap-3 md:gap-4">
          <li><a href="#" class="hover:text-teal-400 transition-colors">About</a></li>
          <li><a href="#" class="hover:text-teal-400 transition-colors">Jobs</a></li>
          <li><a href="#" class="hover:text-teal-400 transition-colors">Press</a></li>
          <li><a href="#" class="hover:text-teal-400 transition-colors">Blog</a></li>
        </ul>
        <ul class="flex flex-col gap-3 pt-5 md:gap-4">
          <li><a href="#" class="hover:text-teal-400 transition-colors">Contact Us</a></li>
          <li><a href="#" class="hover:text-teal-400 transition-colors">Terms</a></li>
          <li><a href="#" class="hover:text-teal-400 transition-colors">Privacy</a></li>
        </ul>
      </div>

      <!-- Social Icons -->
      <div class="flex justify-center md:justify-start md:items-start gap-3">
        <a href="#" class="w-9 h-9 rounded-full border border-white flex items-center justify-center hover:border-teal-400 transition-colors">
          <img :src="iconFacebook" alt="Facebook" class="w-4 h-4" />
        </a>
        <a href="#" class="w-9 h-9 rounded-full border border-white flex items-center justify-center hover:border-teal-400 transition-colors">
          <img :src="iconTwitter" alt="Twitter" class="w-4 h-4" />
        </a>
        <a href="#" class="w-9 h-9 rounded-full border border-white flex items-center justify-center hover:border-teal-400 transition-colors">
          <img :src="iconInstagram" alt="Instagram" class="w-4 h-4" />
        </a>
      </div>

    </div>
  </footer>
</template>

<style scoped></style>