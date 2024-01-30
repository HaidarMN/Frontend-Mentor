<template>
  <div
    class="bg-dark-gray my-8 flex w-72 flex-col items-center gap-6 rounded-xl p-4 font-[Inter] md:my-0 md:w-96"
  >
    <img
      src="/images/social-link/avatar-jessica.jpeg"
      alt="avatar"
      class="w-24 rounded-full"
    />

    <div class="flex flex-col items-center gap-2">
      <h1 class="text-2xl font-medium text-white">Jessica Randall</h1>
      <h2 class="text-sm text-green">London, United Kingdom</h2>
    </div>

    <p class="text-sm font-light text-white">
      "Front-end developer and avid reader."
    </p>

    <div class="flex w-full flex-col gap-4">
      <span
        v-for="(sosmed, index) in sosmed_list"
        :key="index"
        class="bg-gray w-full cursor-pointer rounded-xl px-4 py-3 text-center text-sm font-semibold text-white hover:bg-green hover:text-off-black"
        >{{ sosmed }}</span
      >
    </div>
  </div>
</template>

<script setup>
import { useFooterColor } from "~/stores/footerColor";

// Varibel
const footer_color_store = useFooterColor();
const sosmed_list = ref([
  "Github",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
]);

// Function
onMounted(() => {
  footer_color_store.changeFooterColor("bg-off-black");
});
</script>

<style lang="scss" scoped>
@font-face {
  font-family: Inter;
  src: url("~/assets/fonts/Inter-VariableFont_slnt,wght.ttf");
}
</style>
