<template>
  <Body class="bg-gray-50" />
  <div class="flex flex-col gap-6 bg-cover p-6 pt-20 md:gap-4 md:p-10">
    <h1 class="text-center text-3xl font-bold">Frontend Mentor Challenge</h1>

    <div class="relative">
      <button
        @click="filter_open = !filter_open"
        class="rounded-lg bg-gray-600 px-4 py-2 font-medium text-white hover:bg-gray-700"
      >
        Filter By
      </button>
      <div
        v-show="filter_open"
        class="absolute z-20 mt-2 flex w-60 flex-col rounded-lg bg-white shadow-md"
      >
        <div class="flex flex-col">
          <span
            class="border-b border-slate-300 bg-gray-100 px-4 py-2 text-sm font-semibold tracking-widest text-gray-400"
            >ORDER</span
          >
          <div class="flex flex-col">
            <span
              v-for="(order_menu, index) in order_options"
              :key="index"
              class="flex cursor-pointer flex-row items-center gap-2 border-b border-l-4 border-slate-300 border-l-transparent px-4 py-2"
              :class="{
                '!border-l-gray-600': $route.query.order
                  ? $route.query.order === order_menu.value
                  : order_menu.value === 'recent',
              }"
              @click="selectOrder(order_menu.value)"
            >
              {{ order_menu.label }}
            </span>
          </div>

          <span
            class="border-b border-slate-300 bg-gray-100 px-4 py-2 text-sm font-semibold tracking-widest text-gray-400"
            >DIFFICULTY</span
          >
          <div class="flex flex-col">
            <label
              v-for="(difficulty_menu, index) in difficulty_options"
              :key="index"
              class="flex cursor-pointer flex-row items-center gap-2 border-b border-slate-300 px-4 py-2"
            >
              <input
                type="checkbox"
                :name="`difficulty${index}`"
                :value="difficulty_menu.value"
                :checked="selected_difficulty?.includes(difficulty_menu.value)"
                class="h-5 w-5 rounded border border-gray-200 text-red-600 checked:border-red-600 checked:bg-red-600 hover:border-red-50 hover:bg-red-50 focus:border-red-600 focus:bg-red-600 focus:ring-0 active:border-red-600 active:bg-red-50"
                @click="pushSelectedDifficulty(difficulty_menu.value, index)"
              />
              {{ difficulty_menu.label }}
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <NuxtLink
        v-for="challange in data_response"
        :key="challange.id"
        :to="challange.path"
        target="_blank"
        class="flex flex-col rounded-lg bg-white p-4 shadow-md"
      >
        <div class="flex flex-col gap-2">
          <span class="text-xl font-medium">
            {{ challange.name }}
          </span>

          <div class="flex w-full flex-row items-center justify-between">
            <div class="flex flex-row items-center gap-2">
              <span
                v-for="(skill, index) in challange.skills"
                :key="skill"
                class="font-bold"
                :class="{
                  'text-primary-blue': skill === 'HTML',
                  'text-primary-purple': skill === 'CSS',
                  'text-primary-pink': skill === 'JS',
                }"
                >{{ skill }}</span
              >
            </div>

            <span
              class="rounded-lg border px-2.5 py-0.5 text-sm font-semibold"
              :class="{
                'border-primary-blue text-primary-blue': challange.level === 1,
              }"
              >{{ getLevelName(challange.level) }}</span
            >
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>

  <div
    v-if="filter_open"
    class="absolute inset-0 z-10 h-full w-screen"
    @click="filter_open = !filter_open"
  ></div>
</template>

<script setup>
definePageMeta({
  layout: "home",
});
import { firestoreDB } from "~/server/lib/firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  getDocs,
  where,
} from "firebase/firestore";

// Variabel
const filter_open = ref(false);
const order_options = ref([
  { label: "Most Recent", value: "recent" },
  { label: "Easier First", value: "easier" },
  { label: "Harder First", value: "harder" },
]);
const difficulty_options = ref([
  { label: "Newbie", value: "1" },
  { label: "Junior", value: "2" },
  { label: "Intermediate", value: "3" },
  { label: "Advanced", value: "4" },
]);
const selected_difficulty = ref([]);
const query_data = computed(() => {
  const base = collection(firestoreDB, "challanges");
  const order = useRoute().query.order
    ? orderBy("level", useRoute().query.order === "easier" ? "asc" : "desc")
    : orderBy("date", "desc");
  const difficulty = useRoute().query.difficulty
    ? useRoute().query?.difficulty.split(",").map(Number)
    : [1, 2, 3, 4];

  return query(base, order, where("level", "in", difficulty));
});
const data_response = ref([]);

// Function
const getData = async () => {
  data_response.value = [];
  var querySnapshot = await getDocs(query_data.value);
  querySnapshot.forEach((doc) => {
    var response = {
      id: doc.id,
      name: doc.data().name,
      path: doc.data().path,
      skills: doc.data().skills,
      level: doc.data().level,
    };
    data_response.value.push(response);
  });
};
const selectOrder = async (val) => {
  await navigateTo({
    path: "/",
    query: {
      order: val == "recent" ? undefined : val,
      difficulty: useRoute().query?.difficulty,
    },
  });
  await getData();
};
const pushSelectedDifficulty = async (val, index) => {
  var index = selected_difficulty.value.indexOf(val);
  if (index == -1) {
    selected_difficulty.value.push(val);
  } else {
    selected_difficulty.value.splice(index, 1);
  }
  await navigateTo({
    path: "/",
    query: {
      order: useRoute().query?.order,
      difficulty:
        selected_difficulty.value.length == 0
          ? undefined
          : selected_difficulty.value.join(","),
    },
  });
  await getData();
};
const getLevelName = (val) => {
  if (val === 1) {
    return "NEWBIE";
  } else if (val === 2) {
    return "JUNIOR";
  } else if (val === 3) {
    return "INTERMEDIATE";
  } else {
    return "ADVANCED";
  }
};

onMounted(() => {
  if (useRoute().query.difficulty) {
    selected_difficulty.value = useRoute().query.difficulty.split(",");
  }
  getData();
});
</script>

<style lang="scss" scoped></style>
