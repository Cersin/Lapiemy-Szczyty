<template>
  <div class="full-article">
    <div class="post" v-if="currentPost">

      <div class="mainPhoto">
        <img :src="currentPost.mainPhoto" alt="Main Photo">
      </div>

      <div class="mapa-turystyczna" v-html="currentPost.map"></div>

      <div class="content" v-html="currentPost.content"></div>
    </div>
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

<style lang="scss">
.full-article {
  width: 100vw;
  display: flex;
  justify-content: center;
}

.post {
  display: flex;
  flex-direction: column;
  width: 70vw;
}

.mainPhoto {
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
}

.content {

  figure {
    margin: 0 auto;
    text-align: center;
  }
  img {
    max-width: 100%;

  }
}

img {
}

</style>
