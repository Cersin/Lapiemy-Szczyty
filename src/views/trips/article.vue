<template>
  <div class="article" v-if="currentPost">

    <div class="mainPhoto">
      <img :src="currentPost.mainPhoto" alt="Main Photo">
    </div>

    <div class="mapa-turystyczna" v-html="currentPost.map"></div>

    <div class="article" v-html="currentPost.content"></div>
  </div>
</template>

<script>
import {HTTP} from '@/http-common';

export default {
  name: "post",
  data() {
    return {
      currentPost: null,
      map: null
    }
  },
  props: ['article'],
  async beforeCreate() {
    const post = await HTTP.get(`articles/${this.article}`);
    this.currentPost = post.data.data.article;

  }
}
</script>

<style lang="scss" scoped>

</style>
