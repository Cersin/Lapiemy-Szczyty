<template>
  <div class="card">
    <img src="../assets/ok.jpg" alt="Article photo">

    <div class="card__box">
      <header class="card__box-title">{{title}}</header>
      <p class="card__box-category">{{category}}</p>
      <p class="card__box-distance">{{distance}}</p>
      <p class="card__box-description"> {{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props:[
    "title",
    "category",
    "distance",
    "description"]
};
</script>

<style lang="scss" scoped>
@import "src/styles/abstract/variables";
  .card {
    background-color: #EEEE;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 90%;
      height: 30vh;
      object-fit: cover;
      object-position: center;
      margin-top: 2rem;
    }

    &__box {
      background-color: $color-white;
      transform: translateY(-2rem);
      width: 65%;
      padding: 1.5rem;

      &-title {
        font-weight: 800;
        font-size: 1.5rem;
        letter-spacing: 2px;
      }

      &-category {
        color: $color-secondary;
        font-size: 1.1rem;
        margin-top: .5rem;
      }

      &-distance {
        font-size: 1.1rem;
        margin-top: .2rem;
        font-weight: 600;
        color: rgba(0,0,0,0.3);
      }

      &-description {
        font-size: 1.2rem;
        margin-top: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4; /* number of lines to show */
        -webkit-box-orient: vertical;
      }
    }
  }
</style>
