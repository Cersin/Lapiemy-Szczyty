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
  width: 80%;
  margin: 0 auto;

}

.articles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 3rem;
  padding: 2rem 0;
  width: 100%;
}
</style>
