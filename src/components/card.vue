<template>
  <div class="card">
    <img :src="mainPhoto" alt="Article photo">

    <div class="card__box">
      <p class="card__box-date">{{ $filters.moment(tripTime, "DD MMMM YYYY") }}</p>
      <header class="card__box-title">{{ title }}</header>
      <p class="card__box-category">{{ country }}, {{ category }}</p>
      <p class="card__box-distance">Dystans: {{ distance }}km</p>
      <!--      <p class="card__box-description">{{ description }}</p>-->
      <button @click="goToArticle()" class="button-green card__box-button">Zobacz</button>
    </div>


  </div>
</template>

<script>
export default {
  name: "card",
  props: [
    "id",
    "title",
    "category",
    "distance",
    "description",
    "tripTime",
    "mainPhoto",
    "country"
  ],
  methods: {
    goToArticle() {
      this.$router.push({path: `/wycieczki/${this.category}/${this.title}`});
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/styles/abstract/variables";

.card {
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  padding-bottom: 3rem;
  box-shadow: 10px 2px 10px rgba(0, 0, 0, .1);
  max-width: 500px;
  justify-self: center;

  img {
    width: 100%;
    height: 25vh;
    object-fit: cover;
    object-position: center;
    border-radius: 30px 30px 0 0;
  }

  &__box {
    width: 90%;
    margin: 2rem auto 0 auto;
    background-color: white;
    display: flex;
    flex-direction: column;

    &-title {
      font-weight: 500;
      font-size: 1.7rem;
      letter-spacing: 1px;
    }

    &-category {
      color: $color-secondary;
      font-weight: 500;
      font-size: 1.1rem;
    }

    &-distance {
      margin-top: .2rem;
      opacity: .7;
      font-weight: 500;
      font-size: 1.1rem;
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

    &-date {
      font-size: 1.1rem;
      opacity: .7;
      font-style: normal;
      text-transform: uppercase;
      font-weight: 500;
    }

    &-button {
      margin-top: 2rem;
      align-self: flex-end;
    }
  }
}
</style>
