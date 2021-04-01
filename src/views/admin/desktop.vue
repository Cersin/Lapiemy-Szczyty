<template>
  <section class="desktop">
    <div class="container">
      <button style="margin-right: 1rem" @click="addArticle">Dodaj post</button>
      <button @click="addArticle">Edytuj post</button>
    </div>
  </section>
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
@import "./src/styles/base/utilities";

  .desktop {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $color-secondary-darker;
    width: 100%;
    height: 100%;
  }

  .container {
    background-color: $color-primary;
    padding: 10rem 2rem;
    display: flex;
    justify-content: space-evenly;
    width: 60%;
    border-radius: 50px;
    box-shadow: 5px 6px 5px rgba(0, 0, 0, .3);
  }

  button {
    border: none;
    background-color: $color-secondary-darker;
    font-size: 3rem;
    color: $color-white;
    padding: 2rem;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 5px 6px 5px rgba(0, 0, 0, .2);
    transition: all .5s;

    &:hover {
      background-color: rgba($color-secondary-darker, .8);
      transform: translateY(-2px);
    }
  }

</style>
