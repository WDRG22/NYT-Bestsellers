<template>
  <div class="content mx-4 mt-6">
    <div class="columns">
      <div class="column is-1 has-text-grey">
        <h2 class="has-text-grey">{{ rank }}</h2>
      </div>
      <div class="column is-10">
        <figure class="image">
          <img :src="image" alt="Book cover placeholder" />
        </figure>
      </div>
      <div class="column is-1"></div>
    </div>
    <div class="block mb-6 mx-2">
      <h1 class="title has-text-left has-text-weight-bold is-4 mt-2">
        {{ title }}
      </h1>
      <h2 class="subtitle has-text-left is-italic is-6">by {{ author }}</h2>
      <h2 class="subtitle has-text-left has-text-grey-dark is-6">
        {{ description }}
      </h2>
    </div>
    <div class="block" id="footer-block">
      <button class="button has-text-link">Buy</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    author: String,
    description: String,
    image: String,
    rank: Number,
    title: String,
  },
  mounted() {
    this.log();
  },
  methods: {
    log() {
      console.log(this.rank);
    },
  },
};
</script>

<style scoped>
.content {
  position: relative;
  border-right: 2px solid hsl(0, 0%, 96%);
  min-height: 95%;
  max-height: 95%;
}

#footer-block {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
