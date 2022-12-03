<template>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
  />
  <section class="section">
    <h1 class="title has-text-centered has-text-light is-1">
      New York Times Bestseller Lists
    </h1>
    <div class="columns is-multiline mx-6">
      <div
        class="column is-12"
        v-for="list in listsData.lists"
        :key="list.list_name"
      >
        <hr class="has-background-grey-dark" />
        <router-link
          class="title has-text-white"
          :to="'/' + list.list_name_encoded"
        >
          {{ list.list_name }}
          <font-awesome-icon icon="fa-solid fa-angle-right" class="fa_custom" />
        </router-link>
        <div class="columns p-6 mx-6">
          <div
            class="column is-one-fifth has-text-centered p-1"
            v-for="book in list.books"
            :key="book.title"
          >
            <BookBox
              :title="book.title"
              :author="book.author"
              :description="book.description"
              :image="book.book_image"
              :rank="book.rank"
              :weeks="book.weeks_on_list"
              :amazonUrl="book.amazon_product_url"
            />
          </div>
        </div>
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
      listsData: {},
    };
  },
  created() {
    this.getListNames();
  },
  methods: {
    async getListNames() {
      const store = useUserStore();
      store.setIsLoading(true);
      await axios
        .get(axios.defaults.baseURL + "/lists/overview/.json?" + store.$nytKey)
        .then((response) => {
          this.listsData = response.data.results;
          console.log(this.listsData);
          store.setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setTimeout(() => this.getListNames(), 6000);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.fa_custom {
  color: white;
}
</style>
