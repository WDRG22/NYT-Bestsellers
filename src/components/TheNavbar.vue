<template>
  <nav class="navbar has-background-black-ter p-1">
    <div class="navbar-brand">
      <router-link
        to="/"
        class="navbar-item has-text-weight-bold has-text-white is-size-4"
        >New York Times</router-link
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
</template>

<script setup lang="ts">
import { ref } from "vue";

const showMobileMenu = ref(false);
</script>
