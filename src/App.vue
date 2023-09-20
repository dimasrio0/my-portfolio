<template>
  <div class="bg-[#1E1E1E]">
    <div class="container mx-auto pb-10 max-w-screen-xl overflow-hidden px-6">
      <HeaderApp />
      <RouterView />
    </div>
    <FooterApp />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import { initFlowbite } from "flowbite";
import HeaderApp from "./components/layouts/HeaderApp.vue";
import { onMounted } from "vue";
import FooterApp from "./components/layouts/FooterApp.vue";

onMounted(() => {
  initFlowbite();
});
</script>

<style>
html {
  scroll-behavior: smooth; /* Aktifkan animasi smooth scroll */
}
</style>
