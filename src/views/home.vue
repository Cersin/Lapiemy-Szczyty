<template>
  <div class="home">
    <home-header></home-header>
    <div class="articles">
      <card v-for="article in articles"
            :key="article._id"
            :id="article._id"
            :title=article.title
            :category=article.category
            :distance=article.distance
            :description=article.description
            :tripTime="article.tripDate"
            :mainPhoto="article.mainPhoto"

      ></card>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import HomeHeader from "@/components/home-header";
import Card from "@/components/card";

export default {
  name: "Home",
  components: {Card, HomeHeader},
  data() {
    return {}
  },
  beforeCreate() {
    this.$store.dispatch('articles/getFourArticles');
  },
  computed: {
    ...mapGetters({
      articles: "articles/getPosts"
    })
  }
}
</script>

<style lang="scss" scoped>
.home {
  min-height: 100%;
  display: grid;
  grid-template-rows: 20vw 1fr repeat(2, min-content);
}

.articles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 3rem;
  padding: 2rem 0;
  justify-self: center;
  width: 70%;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
}
</style>
