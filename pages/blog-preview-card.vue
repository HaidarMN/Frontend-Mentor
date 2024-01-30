<template>
  <div
    class="group my-8 flex w-72 cursor-pointer flex-col gap-4 rounded-xl border border-black bg-white p-4 font-[Figtree]"
  >
    <img
      src="/images/blog-preview/illustration-article.svg"
      alt="cover img"
      class="rounded-xl"
    />

    <div class="flex flex-col gap-2">
      <span
        class="w-fit rounded-lg bg-yellow px-2.5 py-0.5 text-sm font-semibold"
        >Learning</span
      >
      <span class="text-xs font-bold">Published 21 Dec 2023</span>
    </div>

    <h1 class="text-xl font-extrabold group-hover:text-yellow">
      HTML & CSS foundations
    </h1>

    <p class="text-xs text-grey">
      These languages are the backbone of every website, defining structure,
      content, and presentation.
    </p>

    <div class="flex flex-row items-center gap-2">
      <img
        src="~/assets/images/blog-preview/image-avatar.webp"
        alt="avatar"
        class="w-8 rounded-full"
      />
      <span class="text-sm font-extrabold">Greg Hooper</span>
    </div>
  </div>
</template>

<script setup>
import { useFooterColor } from "~/stores/footerColor";

// Varibel
const footer_color_store = useFooterColor();

// Function
onMounted(() => {
  footer_color_store.changeFooterColor("bg-yellow");
});
</script>

<style lang="scss" scoped>
@font-face {
  font-family: Figtree;
  src: url("~/assets/fonts/Figtree-VariableFont_wght.ttf");
}
</style>
