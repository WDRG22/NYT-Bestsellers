
<template>
  <nav class="navbar is-dark p-1">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item has-text-weight-bold is-size-4">Home Page</router-link>
      <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu"
        @click="showMobileMenu = !showMobileMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" id="navbar-menu" v-bind:class="{ 'is-active': showMobileMenu }">
      <div class="navbar-start">
        <div class="navbar-item ">
        </div>
      </div>
    </div>
  </nav>

  <body>
    <div v-if="store.isLoading">
      <div class="is-loading-bar has-text-centered" v-bind:class="{ 'is-loading': store.isLoading }">
        <div class="lds-dual-ring"></div>
      </div>
    </div>
    <div v-else>
      <RouterView />
    </div>

  </body>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import { useUserStore } from './store'

const store = useUserStore()
const showMobileMenu = ref(false);

</script>

<style scoped>

</style>
