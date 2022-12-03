<template>
  <section class="section">
    <h1 class="title has-text-centered has-text-white">
      Combined Print and E-Book Fiction
    </h1>
    <hr class="mx-6" />
    <div class="columns is-multiline mx-6 px-6">
      <div
        class="column is-12 has-text-centered p-1"
        v-for="book in listData"
        :key="book.title"
      >
        <BookRow
          id="bookRow"
          :title="book.book_details[0].title"
          :author="book.book_details[0].author"
          :description="book.book_details[0].description"
          :rank="book.rank"
          :weeks="book.weeks_on_list"
          :amazonUrl="book.amazon_product_url"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import axios from "axios";
import BookRow from "../components/BookRow.vue";
import { useUserStore } from "../store";

export default {
  name: "HomeView",
  components: {
    BookRow,
  },
  data() {
    return {
      nytKey: this.$nytKey,
      listData: {},
    };
  },
  created() {
    this.getBooks();
  },
  methods: {
    async getBooks() {
      const store = useUserStore();
      store.setIsLoading(true);
      await axios
        .get(
          axios.defaults.baseURL +
            "/lists.json?list=hardcover-fiction&" +
            store.$nytKey
        )
        .then((response) => {
          this.listData = response.data.results;
          console.log(this.listData);
          store.setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setTimeout(() => this.getBooks(), 6000);
        });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles.scss";

#bookRow {
  border-bottom: 2px solid $grey-dark;
}
</style>
