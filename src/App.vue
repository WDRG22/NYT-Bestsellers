<template>
  <div v-show="store.isLoading" class="fa_spinner_wrapper">
    <font-awesome-icon icon="fa-solid fa-circle-notch fa-spin" class="fa-spin fa-6x"></font-awesome-icon>
  </div>
  <div v-show="!store.isLoading">
    <nav class="navbar has-background-black-ter p-1">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item has-text-weight-bold has-text-white is-size-4"
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
  
    <section>              
        <RouterView/>      
    </section>

    <footer class="footer has-background-black-bis has-text-centered has-text-grey">
      <div class="columns">
        <div class="column is-offset-4">
          <p>About</p>
          <p>Privacy</p>
          <p>Terms</p>   
        </div>
        <div class="column">
          <p class="has-text-right">
            Created with the use of 
            <a href="https://developer.nytimes.com/docs/books-product/1/overview">
              New York Times Books API
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
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

nav{
  border-bottom: 2px solid $white;
}

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
