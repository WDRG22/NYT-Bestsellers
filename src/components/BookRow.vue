<template>
  <div class="content mx-6 mt-6">
    <div class="columns px-6">
      <div class="column is-1">
        <h2 class="has-text-light">{{ rank }}.</h2>
      </div>
      <div class="column is-10">
        <div class="block mb-6 mx-2">
          <h2
            class="subtitle is-6 has-text-light has-text-weight-light has-text-left"
          >
            <p v-if="weeks == 1">New this week</p>
            <p v-else>{{ weeks }} weeks on list</p>
          </h2>
          <h1
            class="title has-text-left has-text-white has-text-weight-bold is-4"
          >
            {{ title }}
          </h1>
          <h2 class="subtitle has-text-left has-text-light is-italic is-6">
            by {{ author }}
          </h2>
          <h2
            class="subtitle has-text-left has-text-light has-text-weight-light is-6"
          >
            {{ description }}
          </h2>
        </div>
        <div class="block has-text-left mb-6" id="footer-block">
          <a
            class="button has-background-info has-text-light has-text-weight-bold"
            :href="amazonUrl"
          >
            BUY
          </a>
        </div>
      </div>
      <div class="column is-1">
        <figure class="image">
          <img :src="image" alt="Book cover placeholder" />
        </figure>
      </div>
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
    weeks: Number,
    amazonUrl: String,
  },
  mounted() {
    // this.log();
  },
  methods: {
    log() {
      //console.log(this.weeks);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles.scss";
</style>
