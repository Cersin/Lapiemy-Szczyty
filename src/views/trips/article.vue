<template>
  <div class="full-article">
    <div class="post" v-if="currentPost">

      <div class="description">
        <div class="description__details">
          <p class="description__details-title">{{ currentPost.title }}</p>
          <p class="description__details-time">{{ $filters.moment(currentPost.tripDate, "DD MMMM YYYY") }}</p>
          <p class="description__details-category">{{ currentPost.category }}</p>
          <p class="description__details-distance">Dystans:{{ currentPost.distance }}km</p>
        </div>
        <div class="mainPhoto">
          <img :src="currentPost.mainPhoto" alt="Main Photo">
        </div>
      </div>

      <div class="ck-content" v-html="currentPost.content"></div>
      <div class="description-map" v-html="currentPost.map"></div>
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
  methods: {},
  async beforeCreate() {
    const post = await HTTP.get(`articles/${this.article}`);
    this.currentPost = post.data.data.article;
  }
}
</script>

<style lang="scss">
@import "src/styles/abstract/variables";
@import "src/styles/components/post";
@import "~vue-wysiwyg/dist/vueWysiwyg.css";


.full-article {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
}

.post {
  display: flex;
  flex-direction: column;
  width: 55vw;

  @media only screen and (max-width: 1600px) {
    width: 60vw;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
}

.mainPhoto {
  display: flex;
  justify-content: center;

  img {
    max-width: 30vw;
    height: auto;
    border-radius: 10px;
  }
}

.description {
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: .2rem;
  margin-bottom: 5rem;

  @media only screen and (max-width: 860px) {
    flex-direction: column;
  }

  &__details {
    margin: 0 auto;
    width: 40%;

    @media only screen and (max-width: 860px) {
      text-align: center;
      margin: 2rem 0;
    }

    &-title {
      font-size: 3rem;

      @media only screen and (max-width: 860px) {
        font-size: 2rem;
      }
    }

    &-time {
      font-size: 1.4rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.15);
    }

    &-category {
      color: $color-secondary;
      font-size: 1.2rem;
    }

    &-distance {
      color: rgba(0, 0, 0, 0.5);
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  &-map {

    iframe {
      height: 40vh;
      margin-top: 5rem;
    }
  }
}


</style>
