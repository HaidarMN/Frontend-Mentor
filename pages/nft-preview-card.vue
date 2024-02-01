<template>
  <div
    class="bg-very-dark-blue-4 flex w-60 flex-col gap-3 rounded-xl p-4 font-[Outfit] shadow-xl"
  >
    <div class="group relative cursor-pointer">
      <img
        src="/images/nft-preview-card/image-equilibrium.jpg"
        alt="equilibrium"
        class="rounded-lg"
      />
      <div
        class="bg-cyan absolute inset-0 h-full w-full rounded-lg opacity-0 group-hover:opacity-50"
      ></div>
      <div
        class="absolute inset-0 flex h-full w-full items-center justify-center opacity-0 group-hover:opacity-100"
      >
        <img
          src="/images/nft-preview-card/icon-view.svg"
          alt="view"
          class="w-8"
        />
      </div>
    </div>

    <h1 class="hover:text-cyan cursor-pointer font-semibold text-white">
      Equilibrium #3429
    </h1>
    <p class="text-soft-blue text-xs">
      Our Equilibrium collection promotes balance and calm.
    </p>

    <div class="flex w-full flex-row items-center justify-between">
      <div class="flex flex-row items-center gap-2">
        <img src="/images/nft-preview-card/icon-ethereum.svg" alt="etheteum" />
        <span class="text-cyan text-xs">0.041 ETH</span>
      </div>

      <div class="flex flex-row items-center gap-2">
        <img src="/images/nft-preview-card/icon-clock.svg" alt="clock" />
        <span class="text-soft-blue text-xs">3 days left</span>
      </div>
    </div>

    <div class="border-very-dark-blue-5 border-t"></div>

    <div class="flex flex-row items-center gap-2">
      <img
        src="/images/nft-preview-card/image-avatar.png"
        alt="avatar"
        class="w-6 rounded-full border border-white"
      />
      <span class="text-soft-blue text-xs">
        Creator of
        <b class="hover:text-cyan cursor-pointer font-medium text-white"
          >Jules Wyvern</b
        >
      </span>
    </div>
  </div>
</template>

<script setup>
import { useFooterColor } from "~/stores/footerColor";

// Varibel
const footer_color_store = useFooterColor();

// Function
onMounted(() => {
  footer_color_store.changeFooterColor("bg-very-dark-blue-3");
});
</script>

<style lang="scss" scoped>
@font-face {
  font-family: Outfit;
  src: url("~/assets/fonts/Outfit-VariableFont_wght.ttf");
}
</style>
