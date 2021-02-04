<template>
  <div class="article-list">
    <div v-for="article in categoryArticles" :key="article.id">
      {{ article.title }}
    </div>
  </div>
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
}
}
</script>

<style lang="scss" scoped>
.article-list {

}
</style>
