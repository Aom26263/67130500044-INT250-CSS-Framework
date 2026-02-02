<script setup>
import ProfileCard from './components/ProfileCard.vue';

</script>

<template>
  <div class="flex items-center justify-center gap-8 min-h-screen bg-gradient-to-br from-green-500 to-sky-400">
  <ProfileCard 
  background="./src/assets/background.jpg"
  profileimg="./src/assets/profile.jpg"
  name="Sorrawich Prasopsub"
  subheading="Student, 19, BKK"
  followers="20"
  following="10"
  projects="100"
  facebook="https://www.facebook.com/share/16LV3pD4vM/?mibextid=wwXIfr"
  Instagram="https://www.instagram.com/axmsz_p?igsh=c2dkMWR2bWJsYjlm&utm_source=qr"
  Tiktok="https://www.tiktok.com/@aom_sorrawich"
  />
  <ProfileCard 
  background="./src/assets/background1.jpg"
  profileimg="./src/assets/profile1.jpg"
  name="Wongsewaris Tumsud"
  subheading="Student, 20, BKK"
  followers="30"
  following="20"
  projects="10"
  facebook="https://www.facebook.com/wongsewaris.tumsud"
  Instagram="https://www.instagram.com/win_wwr/"
  Tiktok="https://www.tiktok.com/@winniewwr"
  />
  <ProfileCard 
  background="./src/assets/background2.avif"
  profileimg="./src/assets/profile2.jpg"
  name="Siyon Duendensirikul"
  subheading="Student, 19, BKK"
  followers="400"
  following="1000"
  projects="1"
  facebook="https://www.facebook.com/Viarerr"
  Instagram="https://www.instagram.com/viarerr"
  Tiktok="https://www.tiktok.com/@siyondundensiriku"
  />
  </div>
</template>

<style scoped></style>
