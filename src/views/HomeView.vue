<template>
  <section class="section">
    <h1 class="title has-text-centered">New York Times Bestseller Lists</h1>
    <div class="columns is-multiline mx-6">
      <div
        class="column is-12"
        v-for="list in listsData.lists"
        :key="list.list_name"
      >
        <hr class="has-background-light" />
        <router-link
          class="title has-text-link"
          :to="'/' + list.list_name_encoded"
          >{{ list.list_name }}</router-link
        >
        <div class="columns">
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
      await axios
        .get(axios.defaults.baseURL + "/lists/overview/.json?" + store.$nytKey)
        .then((response) => {
          this.listsData = response.data.results;
          console.log(this.listsData);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
