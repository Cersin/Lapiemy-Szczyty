<template>
  <section>
    <div @click="goToArticleList(article.title)" class="article" v-for="article in categoryArticles"
         :key="article.title">
      <img class="article-img" :src="require(`../../assets/article-photos/${article.mainPhoto}.jpg`)"
           alt="Article photo">
      <h1 class="article-name">{{ article.title }}</h1>
    </div>


    <div @click="goToArticleList(article.title)" class="article" v-for="article in categoryArticles"
         :key="article.title">
      <img class="article-img" :src="require(`../../assets/article-photos/${article.mainPhoto}.jpg`)"
           alt="Article photo">
      <h1 class="article-name">{{ article.title }}</h1>
    </div>
    <div @click="goToArticleList(article.title)" class="article" v-for="article in categoryArticles"
         :key="article.title">
      <img class="article-img" :src="require(`../../assets/article-photos/${article.mainPhoto}.jpg`)"
           alt="Article photo">
      <h1 class="article-name">{{ article.title }}</h1>
    </div>
  </section>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "ArticleList",
  props: ['category'],
  computed: {
    ...mapGetters({
      articles: 'articles/getCategoryPosts'
    }),
    categoryArticles() {
      return this.articles(this.category);
    }
  },
  methods: {
    goToArticleList(title) {
      this.$router.push({path: `/wycieczki/${this.category}/${title}`});
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/abstract/variables";

section {
  margin: 2rem 0;

  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, 40rem);
  grid-gap: 3rem;
  align-content: start;
  justify-self: center;
  justify-content: center;
}

.article {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 40vh;
  cursor: pointer;

  &-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(70%);

    grid-row: 1 / 2;
    grid-column: 1 / 2;
    transition: all 1s;
  }

  &-name {
    font-size: 2.5rem;
    color: $color-secondary;
    z-index: 10;

    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: center;
    justify-self: center;
    text-align: center;
    transition: all .5s;
  }

  &:hover &-name,
  &:active &-name {
    font-size: 2.7rem;
  }

  &:hover &-img,
  &:active &-img {
    filter: brightness(90%);
  }
}
</style>
