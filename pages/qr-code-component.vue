<template>
  <div
    class="flex w-72 flex-col items-center gap-4 rounded-xl bg-white p-4 pb-6 font-sans"
  >
    <img
      src="/images/qr-code/image-qr-code.png"
      alt="QR Code"
      class="w-full rounded-xl"
    />
    <h1 class="text-dark-blue-1 text-center text-xl font-bold">
      Improve your front-end skills by building projects
    </h1>
    <p class="text-center text-sm text-grayish-blue">
      Scan the QR code to visit Frontend Mentor and take your coding skills to
      the next level
    </p>
  </div>
</template>

<script setup>
import { useFooterColor } from "~/stores/footerColor";

// Varibel
const footer_color_store = useFooterColor();

// Function
onMounted(() => {
  footer_color_store.changeFooterColor("bg-light-gray-1");
});
</script>

<style lang="scss" scoped></style>
