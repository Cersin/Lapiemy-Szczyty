<template>
  <div>
    <button @click="test">Test kategorii</button>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  props: ['category'],
  methods: {
    test() {
      console.log(this.category);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
