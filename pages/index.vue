<template>
  <div class="bg-gray-50 min-h-screen p-10 pt-20 flex flex-col gap-4">
    <h1 class="text-3xl font-bold text-center">Frontend Mentor Challenge</h1>

    <div class="relative">
      <span @click="filter_open = !filter_open" class="cursor-pointer"
        >Filter By</span
      >
      <div
        v-show="filter_open"
        class="absolute bg-white rounded-lg mt-2 z-20 shadow-md flex flex-col w-60"
      >
        <div class="flex flex-col">
          <span
            class="px-4 py-2 border-b border-slate-300 bg-gray-100 text-gray-400 font-semibold text-sm"
            >ORDER</span
          >
          <div class="flex flex-col">
            <label
              v-for="(order_menu, index) in order_options"
              :key="index"
              class="px-4 py-2 border-b border-slate-300 flex flex-row items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="order-by"
                :value="order_menu.value"
                @click="selectOrder(order_menu.value)"
                :checked="order_menu.value == 'recent'"
              />
              {{ order_menu.label }}
            </label>
          </div>

          <span
            class="px-4 py-2 border-b border-slate-300 bg-gray-100 text-gray-400 font-semibold text-sm"
            >DIFFICULTY</span
          >
          <div class="flex flex-col">
            <label
              v-for="(difficulty_menu, index) in difficulty_options"
              :key="index"
              class="px-4 py-2 border-b border-slate-300 flex flex-row items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                :name="`difficulty${index}`"
                :value="difficulty_menu.value"
                @click="pushSelectedDifficulty(difficulty_menu.value, index)"
              />
              {{ difficulty_menu.label }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="filter_open"
    class="h-full w-screen absolute inset-0 z-10"
    @click="filter_open = !filter_open"
  ></div>
</template>

<script setup>
// Variabel
const filter_open = ref(false);
const order_options = ref([
  { label: "Most Recent", value: "recent" },
  { label: "Easier First", value: "easier" },
  { label: "Harder First", value: "harder" },
]);
const difficulty_options = ref([
  { label: "Newbie", value: 1 },
  { label: "Junior", value: 2 },
  { label: "Intermediate", value: 3 },
  { label: "Advanced", value: 4 },
]);
const selected_difficulty = ref([]);

// Function
const selectOrder = (val) => {
  navigateTo({
    path: "/",
    query: {
      order: val == "recent" ? undefined : val,
      difficulty: useRoute().query?.difficulty,
    },
  });
};
const pushSelectedDifficulty = (val, index) => {
  var index = selected_difficulty.value.indexOf(val);
  if (index == -1) {
    selected_difficulty.value.push(val);
  } else {
    selected_difficulty.value.splice(index, 1);
  }
  navigateTo({
    path: "/",
    query: {
      order: useRoute().query?.order,
      difficulty:
        selected_difficulty.value.length == 0
          ? undefined
          : selected_difficulty.value.join(","),
    },
  });
};
</script>

<style lang="scss" scoped></style>
