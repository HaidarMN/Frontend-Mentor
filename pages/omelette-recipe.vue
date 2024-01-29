<template>
  <div
    class="flex w-full max-w-lg flex-col gap-4 rounded-b-xl bg-white p-4 font-[Outfit] md:my-8 md:rounded-xl"
  >
    <img
      src="~/assets/images/omelette-recipe/image-omelette.jpeg"
      alt="Omelette"
      class="rounded-xl"
    />

    <h1 class="text-dark-charcoal font-[YoungSerif] text-2xl tracking-wide">
      Simple Omelette Recipe
    </h1>
    <p class="text-dark-charcoal text-sm">
      An easy and quick dish, perfect for any meal. This classic omelette
      combines beaten eggs cooked to perfection, optionally filled with your
      choice of cheese, vegetables, or meats.
    </p>

    <div class="bg-rose-white flex flex-col gap-2 rounded-xl px-4 py-2">
      <h3 class="font-bold text-[#cd5c5c]">Preparaion Time</h3>
      <ul class="list-outside list-disc pl-6 text-[#cd5c5c]">
        <li
          v-for="(preparation, index) in preparation_list"
          :key="index"
          class="text-dark-charcoal pb-2 pl-2 marker:text-[#cd5c5c]"
        >
          <b class="text-wenge-brown font-bold">{{ preparation.bold }}</b
          >: {{ preparation.text }}
        </li>
      </ul>
    </div>

    <div class="flex flex-col gap-2">
      <h2 class="font-[YoungSerif] text-xl tracking-wide text-[#8b4513]">
        Instructions
      </h2>
      <ol class="text-wenge-brown list-outside list-decimal pl-6">
        <li
          v-for="(list, index) in instruction_list"
          :key="index"
          class="text-wenge-brown pb-2 pl-4 marker:font-bold marker:text-[#8b4513]"
        >
          <b>{{ list.bold }}</b
          >: {{ list.text }}
        </li>
      </ol>
    </div>

    <div class="flex flex-col gap-2">
      <h2 class="font-[YoungSerif] text-xl tracking-wide text-[#8b4513]">
        Nutrition
      </h2>
      <p class="text-dark-charcoal text-sm">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>

      <table class="border-collapse">
        <tbody>
          <tr
            v-for="(table_content, index) in table_content_list"
            :key="index"
            class="border-light-gray border-b last:border-none"
          >
            <td class="text-dark-charcoal p-4">{{ table_content.label }}</td>
            <td class="p-4 font-semibold text-[#8b4513]">
              {{ table_content.value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useFooterColor } from "~/stores/footerColor";

// Varibel
const footer_color_store = useFooterColor();
const preparation_list = ref([
  { bold: "Total", text: "Approximately 10 minutes" },
  { bold: "Preparation", text: "5 minutes" },
  { bold: "Cooking", text: "5 minutes" },
]);
const instruction_list = ref([
  {
    bold: "Beat the eggs",
    text: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or mil for a fluffier texture.",
  },
  {
    bold: "Heat the pan",
    text: "Placce a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    bold: "Cook the omelette",
    text: "Once the butter is melted and bubling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surfaces.",
  },
  {
    bold: "Add fillings (optional)",
    text: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    bold: "Fold and serve",
    text: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    bold: "Enjoy",
    text: "Serve hot, with additional salt and pepper if needed.",
  },
]);
const table_content_list = ref([
  { label: "Calories", value: "277kcal" },
  { label: "Carbs", value: "0g" },
  { label: "Protein", value: "20g" },
  { label: "Fat", value: "22g" },
]);

// Function
onMounted(() => {
  footer_color_store.changeFooterColor("bg-rose-white");
});
</script>

<style lang="scss" scoped>
@font-face {
  font-family: Outfit;
  src: url("~/assets/fonts/Outfit-VariableFont_wght.ttf");
}
@font-face {
  font-family: YoungSerif;
  src: url("~/assets/fonts/YoungSerif-Regular.ttf");
}
</style>