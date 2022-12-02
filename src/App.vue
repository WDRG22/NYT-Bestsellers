<template>
  <nav class="navbar is-dark p-1">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item has-text-weight-bold is-size-4"
        >Home Page</router-link
      >
      <a
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar-menu"
        @click="showMobileMenu = !showMobileMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div
      class="navbar-menu"
      id="navbar-menu"
      v-bind:class="{ 'is-active': showMobileMenu }"
    >
      <div class="navbar-start">
        <div class="navbar-item"></div>
      </div>
    </div>
  </nav>

  <section>
    <div v-show="store.isLoading" class="fa_spinner_wrapper">
      <font-awesome-icon icon="fa-solid fa-spinner fa-spin" class="fa-spin fa_custom fa-5x"></font-awesome-icon>
    </div>

    <div>
      <RouterView/>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import { useUserStore } from "./store";

const store = useUserStore();
const showMobileMenu = ref(false);
</script>

<style scoped lang="scss">
@import "@/assets/styles.scss";

section{
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
