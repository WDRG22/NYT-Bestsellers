<template>
    <BookList
      list-name="picture-books"
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
  