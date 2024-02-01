<template>
  <div class="flex flex-col gap-4 bg-black p-4 text-white">
    <h1>Socket is {{ isOpen }}</h1>
    <span v-for="data in response">{{ data }}</span>
  </div>
</template>

<script setup>
// Variabel
const isOpen = ref(false);
const response = ref([]);
const socket = new WebSocket("wss://socketsbay.com/wss/v2/1/demo/");

// Function
const connectSocket = () => {
  socket.addEventListener("open", (event) => (isOpen.value = true));
  socket.addEventListener("message", (event) =>
    response.value.push(event.data),
  );
  socket.addEventListener("error", (event) => console.error(event));
};

onMounted(() => {
  connectSocket();
});
</script>

<style lang="scss" scoped></style>
