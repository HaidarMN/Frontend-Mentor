<template>
  <div
    class="image-cover flex min-h-screen flex-col justify-between bg-[length:100%] bg-top bg-no-repeat"
    :class="footer_color_store.color"
  >
    <main class="m-auto">
      <slot />
    </main>
    <GeneralFooter :color="footer_color_store.color" />
  </div>
</template>

<script setup>
import { useFooterColor } from "~/stores/footerColor";

// Variabel
const footer_color_store = useFooterColor();
</script>

<style lang="scss" scoped>
.image-cover {
  background-image: url("/images/faq-accordion/background-pattern-mobile.svg");
  @media (min-width: 768px) {
    background-image: url("/images/faq-accordion/background-pattern-desktop.svg");
  }
}
</style>
