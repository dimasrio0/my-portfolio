<template>
  <div class="grid md:grid-cols-2 grid-cols-1 text-white pb-11 md:mt-0 mt-5" id="hero">
    <div class="flex flex-col justify-center md:items-start items-center">
      <div class="">
        <h2 class="text-3xl md:text-left text-center">
          I'm a <span class="text-[#C778DD]">Developer</span> with expertise in
          <span class="text-[#C778DD]">Frontend</span> and
          <span class="text-[#C778DD]">Backend</span> software development.
        </h2>
      </div>
      <h5 class="text-sm text-[#ABB2BF] my-6 md:text-left text-center">
        I can create a website that is user-friendly, beautiful to look at, and
        optimized on all devices.
      </h5>
      <a
        href="https://wa.me/6289524002195"
        target="_blank"
        class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-[#C778DD] dark:text-[#C778DD] dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 md:w-1/4 w-2/4 transition "
      >
        Contact Me !
      </a>
    </div>
    <div
      style="
        background-image: url('/src/assets/img/shape-1.svg'),
          url('/src/assets/img/shape-2.svg');
        background-repeat: no-repeat, no-repeat;
        background-position: top left 10%, bottom 20% right 12%;
      "
      class="md:block hidden"
    >
      <img class="h-auto w-[200%] ml-6" :src="me" />
      <div
        class="p-1 border border-[#ABB2BF] rounded max-w-[430px] mx-auto text-center"
      >
        <span class="px-2 bg-[#C778DD] mx-1"></span>
        <span class="text-[#ABB2BF] ml-1">Currently working on</span>
        Kredit Plus,jakarta
      </div>
    </div>
  </div>
</template>

<script setup>
import me from "../../../src/assets/img/me-illustration.png";
</script>
