<template>
  <div
    class="font-overpass bg-dark-blue2 flex w-72 flex-col gap-4 rounded-3xl p-6 md:w-96"
    :class="is_submitted ? 'items-center' : 'items-start'"
  >
    <img
      :src="`/images/interactive-rating/${is_submitted ? 'illustration-thank-you' : 'icon-star'}.svg`"
      alt="icon star"
      :class="is_submitted ? '' : 'h-10 w-10 rounded-full bg-white/5 p-3'"
    />

    <span
      v-if="is_submitted"
      class="text-orange my-2 rounded-full bg-white/5 px-4 py-1.5 text-sm"
    >
      You selected {{ selected_rating }} out of 5
    </span>

    <h1 class="text-2xl text-white">
      {{ is_submitted ? "Thank you!" : "How did we do?" }}
    </h1>

    <p
      class="text-light-gray2 text-sm"
      :class="is_submitted ? 'text-center' : 'text-start'"
    >
      {{
        is_submitted
          ? "We appreciate you taking time to give a rating. If you ever need more support, don't hesitate to get in touch!"
          : "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
      }}
    </p>

    <div
      v-if="!is_submitted"
      class="my-2 flex w-full flex-row items-center justify-between"
    >
      <span
        v-for="x in 5"
        :key="x"
        class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
        :class="
          selected_rating == x
            ? 'bg-orange text-white'
            : 'text-medium-gray hover:bg-medium-gray bg-white/5 hover:text-white'
        "
        @click="selected_rating = x"
        >{{ x }}</span
      >
    </div>

    <button
      v-if="!is_submitted"
      class="bg-orange hover:text-orange w-full rounded-full px-4 py-2 text-center tracking-widest text-white hover:bg-white"
      @click="is_submitted = true"
    >
      SUBMIT
    </button>
  </div>
</template>

<script setup>
import { useFooterColor } from "~/stores/footerColor";

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Overpass&display=swap",
    },
  ],
});

// Varibel
const footer_color_store = useFooterColor();
const selected_rating = ref();
const is_submitted = ref(false);

// Function
onMounted(() => {
  footer_color_store.changeFooterColor("bg-very-dark-blue2");
});
</script>

<style lang="scss" scoped></style>
