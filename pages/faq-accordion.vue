<template>
  <div
    class="my-8 flex w-[32rem] flex-col gap-4 rounded-xl bg-white p-6 font-[WorkSans] shadow-md"
  >
    <header class="flex flex-row items-center gap-4">
      <img src="/images/faq-accordion/icon-star.svg" alt="Star" />
      <h1 class="text-dark-purple text-4xl font-bold">FAQs</h1>
    </header>

    <div class="flex flex-col divide-y">
      <div
        v-for="(faq, index) in faq_list"
        :key="index"
        class="group flex w-full cursor-pointer flex-col py-4"
        @click="openFAQ(faq.ask)"
      >
        <div class="flex w-full flex-row items-center justify-between">
          <h2 class="text-dark-purple font-bold group-hover:text-purple-700">
            {{ faq.ask }}
          </h2>
          <img
            :src="`/images/faq-accordion/icon-${selected_faq == faq.ask ? 'minus' : 'plus'}.svg`"
            :alt="`${selected_faq == faq.ask ? 'minus' : 'plus'} icon`"
          />
        </div>
        <p
          class="text-grayish-purple text-sm transition-all"
          :class="
            selected_faq == faq.ask
              ? 'max-h-40 pt-4'
              : 'max-h-0 overflow-hidden'
          "
        >
          {{ faq.answer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFooterColor } from "~/stores/footerColor";

// Varibel
const footer_color_store = useFooterColor();
const faq_list = ref([
  {
    ask: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    ask: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    ask: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    ask: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
]);
const selected_faq = ref("");

// Function
const openFAQ = (val) => {
  if (val == selected_faq.value) {
    selected_faq.value = "";
  } else {
    selected_faq.value = val;
  }
};
onMounted(() => {
  footer_color_store.changeFooterColor("bg-light-pink");
});
</script>

<style lang="scss" scoped>
@font-face {
  font-family: WorkSans;
  src: url("~/assets/fonts/WorkSans-VariableFont_wght.ttf");
}
</style>
