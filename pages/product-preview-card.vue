<template>
  <div class="flex flex-col rounded-xl bg-white md:flex-row">
    <div
      style="
        background-image: url(&quot;/images/product-preview-card/image-product-desktop.jpg&quot;);
      "
      class="h-44 w-full rounded-t-xl bg-cover bg-center bg-no-repeat md:h-auto md:w-72 md:rounded-l-xl md:rounded-tr-none"
    ></div>

    <div class="flex w-72 flex-col gap-4 p-4 md:p-8">
      <span
        class="font-monsterrat text-xs tracking-[0.5rem] text-dark-grayish-blue"
        >PERFUME</span
      >
      <h1
        class="text-very-dark-blue-1 font-fraunces text-3xl font-bold md:text-4xl"
      >
        Grabielle Essence Eau De Parfum
      </h1>
      <p class="text-sm text-dark-grayish-blue md:text-base">
        A floral, solar, and voluptuous interpretation composed by Oliver Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>

      <div class="flex flex-row items-center gap-4">
        <span
          class="font-fraunces text-2xl font-bold text-dark-cyan md:text-3xl"
          >$149.99</span
        >
        <span class="text-xs text-grayish-blue"><del>$169.99</del></span>
      </div>

      <button
        class="flex w-full flex-row items-center justify-center gap-4 rounded-lg bg-dark-cyan px-4 py-2 text-white hover:bg-[hsl(158_36%_25%)]"
      >
        <img src="/images/product-preview-card/icon-cart.svg" alt="icon cart" />
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { useFooterColor } from "~/stores/footerColor";

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Monsterrat&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Fraunces&display=swap",
    },
  ],
});

// Varibel
const footer_color_store = useFooterColor();

// Function
onMounted(() => {
  footer_color_store.changeFooterColor("bg-cream");
});
</script>

<style lang="scss" scoped></style>
