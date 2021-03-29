<template>
  <div class="card">
    <img :src="`http://${mainPhoto}`" alt="Article photo">

    <div class="card__box">
      <header class="card__box-title">{{ title }}</header>
      <p class="card__box-category">{{ category }}</p>
      <p class="card__box-distance">{{ distance }} km</p>
      <p class="card__box-description">{{ description }}</p>
    </div>

    <div class="card__bottom">
      <button @click="goToArticle()" class="card__bottom-button">
        <span class="card__bottom-button-arrow"></span>
        <span class="card__bottom-button-text">Czytaj</span>
      </button>
      <p class="card__bottom-date">{{ $filters.moment(tripTime, "DD MMMM YYYY") }}</p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "card",
  props:[
    "id",
    "title",
    "category",
    "distance",
    "description",
    "tripTime",
    "mainPhoto"
  ],
  methods: {
    goToArticle() {
      this.$router.push({ path: `/wycieczki/${this.category}/${this.title}`});
    }
  }
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
      height: 20rem;

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

    .card__bottom {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      padding: 1rem 2rem;
      background-color: $color-secondary-darker;

      &-button {
        border: none;
        background-color: $color-grey;
        display: flex;
        padding: .5rem;
        border-radius: 5px;
        font-family: "Comic Sans MS", sans-serif;
        cursor: pointer;
        transition: all .3s;

        &:hover {
          background-color: $color-grey-light;
        }

        &:active {
          background-color: darken($color-grey-light, 10);
        }


        &-arrow {
          background-color: $color-secondary-darker;
          clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
          width: 3rem;
          height: 2rem;
          border-radius: 10px;
        }

        &-text {
          margin-left: .5rem;
          align-self: flex-end;
          color: $color-secondary-darker;
          font-weight: 800;

        }
      }

      &-date {
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: 600;
        color: rgba(0,0,0,0.3);
      }
    }
  }
</style>
