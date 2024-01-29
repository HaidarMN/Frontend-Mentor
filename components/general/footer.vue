<template>
  <footer class="p-4 text-center text-xs md:text-sm" :class="color">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
    >. Coded by
    <a href="https://haidarmn.github.io" target="_blank"
      >Haidar Muhammad Naufal</a
    >
  </footer>
</template>

<script setup>
const props = defineProps({
  color: String,
});
</script>

<style lang="scss" scoped>
a {
  @apply text-[#6d6f78];
}
</style>
