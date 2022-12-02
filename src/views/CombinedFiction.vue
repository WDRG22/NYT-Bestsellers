<template>

  <section class="section">
    <div class="columns is-multiline mx-6">
      <div
        class="column is-one-fifth has-text-centered p-1"
        v-for="book in listData"
        
      >
        <BookBox
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
import BookBox from "../components/BookBox.vue";
import { useUserStore } from "../store";

export default {
  name: "HomeView",
  components: {
    BookBox,
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
      store.setIsLoading(true)
      await axios
        .get(axios.defaults.baseURL + "/lists.json?list=combined-print-and-e-book-fiction&" + store.$nytKey)
        .then((response) => {
          this.listData = response.data.results;          
          console.log(this.listData)
          store.setIsLoading(false)
        })
        .catch((error) => {
          console.log(error);
          setTimeout(() => this.getBooks(), 6000)
        });
    },
  },
};
</script>

<style scoped lang="scss">

</style>
