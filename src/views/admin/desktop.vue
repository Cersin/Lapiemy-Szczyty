<template>
  <div>
    <button @click="addArticle">DODAJ ARTYKUł</button>
  </div>
</template>

<script>
export default {
  name: "desktop",
  methods: {
    addArticle() {
      this.$router.push('/admin/articles/add');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
