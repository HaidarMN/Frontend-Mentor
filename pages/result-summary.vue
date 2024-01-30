<template>
  <div
    class="flex w-full max-w-md flex-col rounded-xl bg-white font-[HankenGrotesk] shadow-md md:max-w-2xl md:flex-row"
  >
    <div
      class="from-light-royal-blue to-light-slate-blue flex w-full flex-col items-center justify-between gap-4 rounded-b-xl bg-gradient-to-t p-8 md:w-60 md:rounded-l-xl md:rounded-br-none"
    >
      <h1 class="text-light-lavender text-center font-bold">Your Result</h1>

      <div
        class="from-violet-blue to-persian-blue flex h-32 w-32 flex-col items-center justify-center gap-1 rounded-full bg-gradient-to-b"
      >
        <span class="text-6xl font-bold text-white">{{ total }}</span>
        <span class="text-light-lavender text-xs">of 100</span>
      </div>

      <div class="flex flex-col items-center justify-center gap-2">
        <span class="text-2xl font-medium text-white">Great</span>
        <p class="text-light-lavender text-center text-xs">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>

    <div class="flex w-full flex-col gap-6 p-6 md:w-80">
      <h1 class="text-dark-gray-blue text-xl font-bold">Summary</h1>

      <div class="flex flex-col gap-2.5">
        <div
          v-for="(value_of_data, index) in response_data"
          :key="index"
          class="flex w-full flex-row items-center justify-between rounded-xl px-4 py-3 font-semibold"
          :class="{
            'text-light-red bg-light-red/10':
              value_of_data.category === 'Reaction',
            'text-orangey-yellow bg-orangey-yellow/10':
              value_of_data.category === 'Memory',
            'text-green-teal bg-green-teal/10':
              value_of_data.category === 'Verbal',
            'text-cobalt-blue bg-cobalt-blue/10':
              value_of_data.category === 'Visual',
          }"
        >
          <div class="flex flex-row items-center gap-2">
            <img :src="value_of_data.icon" :alt="value_of_data.name" />
            <span>{{ value_of_data.name }}</span>
          </div>

          <span class="text-light-lavender flex flex-row items-center gap-2">
            <b class="text-dark-gray-blue">{{ value_of_data.score }}</b> / 100
          </span>
        </div>
      </div>

      <button
        class="bg-dark-gray-blue hover:from-light-royal-blue hover:to-light-slate-blue w-full rounded-full px-4 py-2 font-medium text-white hover:bg-gradient-to-t"
      >
        Continue
      </button>
    </div>
  </div>
</template>

<script setup>
import { useFooterColor } from "~/stores/footerColor";

// Varibel
const footer_color_store = useFooterColor();
const response_data = ref([]);
const total = computed(() => {
  var temp = 0;
  response_data.value?.map((item) => (temp += item?.score));
  return (temp / response_data.value.length).toFixed(0);
});

// Function
const getData = () => {
  $fetch("/json/result-summary.json", {
    method: "GET",
  })
    .then((response) => (response_data.value = response))
    .catch((err) => console.error(err));
};

onMounted(() => {
  footer_color_store.changeFooterColor("bg-pale-blue");
  getData();
});
</script>

<style lang="scss" scoped>
@font-face {
  font-family: HankenGrotesk;
  src: url("~/assets/fonts/HankenGrotesk-VariableFont_wght.ttf");
}
</style>
