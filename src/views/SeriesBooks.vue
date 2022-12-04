<template>
    <BookList
      list-name="series-books"
    />
  </template>
  
  <script lang="ts">
  import BookList from "../components/BookList.vue";
  
  export default {
    name: "HomeView",
    components: {
      BookList,
    },
  };
  </script>
  
  <style scoped lang="scss">
  </style>
  