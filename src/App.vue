<template>
  <div v-show="store.isLoading" class="fa_spinner_wrapper">
    <font-awesome-icon
      icon="fa-solid fa-circle-notch fa-spin"
      class="fa-spin fa-6x"
    ></font-awesome-icon>
  </div>
  <div v-show="!store.isLoading">
    <TheNavbar />
    <RouterView />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { useUserStore } from "./store";
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";

const store = useUserStore();
</script>

<style scoped lang="scss">
@import "@/assets/styles.scss";

nav {
  border-bottom: 2px solid $white;
}

section {
  height: 100%;
}

.fa_spinner_wrapper {
  position: relative;
  display: flex;
  min-height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
