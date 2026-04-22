<script setup>
import Creation from "./components/Creation.vue";
import Feature from "./components/Feature.vue";
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
import { ref } from "vue";

const menuItems = ref([
  { name: "About", link: "#"},
  { name: "Careers", link: "#"},
  { name: "Events", link: "#"},
  { name: "Products", link: "#"},
  { name: "Supports", link: "#"},
])

</script>

<template>
  <NavBar :menu-items="menuItems"/>
  <Feature />
  <Creation />
  <Footer />
</template>

<style scoped></style>
