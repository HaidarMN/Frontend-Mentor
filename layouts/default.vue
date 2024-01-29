<template>
  <div
    class="flex min-h-screen flex-col justify-between"
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

<style lang="scss" scoped></style>
