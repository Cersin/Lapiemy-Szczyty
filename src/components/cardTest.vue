<template>
  <div class="card">
    <img :src="require(`../assets/article-photos/${mainPhoto}.jpg`)" alt="Article photo">

    <div class="card__box">
      <header class="card__box-title">{{ title }}</header>
      <p class="card__box-category">{{ category }}</p>
      <p class="card__box-distance">{{ distance }}</p>
      <p class="card__box-description">{{ description }}</p>
    </div>

    <div class="card__bottom">
        <button class="card__bottom-button" @click="goToArticle()">
            <span class="card__bottom-button-polygon"></span>
            <span class="card__bottom-button-text">Czytaj</span>
        </button>
      
      <p class="card__bottom-date">{{ $filters.moment(tripTime, "DD MMMM YYYY") }}</p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "cardTest",
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

      &-button {
        border:none ;
        display: flex;
        padding: .5rem;
        box-shadow: 0 0.5rem 1rem rgba(black, 0.2);
        font-family: "Comic Sans MS", sans-serif;
        cursor: pointer;
        transition: all .3s;

        &:hover {
          background-color: $color-grey-light;
        }

        &:active {
          background-color: darken($color-grey-light, 10);
        }

        &-polygon{
            background-color: $color-secondary;
            // clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%);
            clip-path: polygon(0% 100%, 25% 30%, 40% 60%,60% 10%, 100% 100%, 0% 100%);
            width: 2.5rem;
            height: 2.5rem;
            
        }

        &-text {
          margin-left: 1rem;
          margin-right: 1rem;
          align-self: flex-end;
          color: $color-secondary-darker;
          font-weight: 700;
          font-size: 1.4rem;

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
