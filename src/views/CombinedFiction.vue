<template>
  <BookList list-name="combined-print-and-e-book-fiction" />
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

<style scoped lang="scss"></style>
