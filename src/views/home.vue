<template>
  <div class="home">
    <div class="searchbar">
      <div class="searchbar__input">
        <div class="searchbar__input-box">
        <span>
           <font-awesome-icon icon="map-marker-alt"/>
          Lokalizacja
        </span>
          <select v-model="country">
            <option disabled value="">Wybierz kraj</option>
            <option>Wszystkie</option>
            <option>Polska</option>
            <option>Za granicą</option>
          </select>
        </div>

        <div class="searchbar__input-box">
        <span>
           <font-awesome-icon icon="mountain"/>
            Pasmo górskie
        </span>
          <select v-model="mountains">
            <option disabled value="">Wybierz góry</option>
            <option>Wszystkie</option>
            <option v-for="(category, i) in categories" :key="i">{{ category.name }}</option>
          </select>
        </div>

        <div class="searchbar__input-box">
        <span>
           <font-awesome-icon icon="hiking"/>
            Dystans
        </span>
          <select v-model="distance">
            <option disabled value="">Wybierz dystans</option>
            <option>Wszystkie</option>
            <option>do 5km</option>
            <option>5 do 10km</option>
            <option>powyżej 10km</option>
          </select>
        </div>
      </div>

      <button class="button-green">Szukaj</button>

    </div>

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
import Card from "@/components/card";

export default {
  name: "Home",
  components: {Card},
  data() {
    return {
      country: 'Wszystkie',
      mountains: 'Wszystkie',
      distance: 'Wszystkie'
    }
  },
  async beforeCreate() {
    this.$store.dispatch('articles/getFourArticles');
    this.$store.dispatch('categories/getCategories');
  },
  computed: {
    ...mapGetters({
      articles: "articles/getPosts",
      categories: "categories/getCategories"
    })
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/abstract/variables";

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

.searchbar {
  display: flex;
  justify-content: space-evenly;
  background-color: $color-primary;
  color: white;
  margin-top: 6rem;
  margin-bottom: 2.5rem;
  padding: 3rem;
  border-radius: 12px;

  @media only screen and (max-width: 850px) {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }


  &__input {
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 850px) {
      flex-direction: column;
    }
  }

  &__input-box {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    margin-right: 2rem;

    @media only screen and (max-width: 850px) {
      margin-bottom: .5rem;
    }
  }

  select {
    width: 30rem;
    padding: .8rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;

    @media only screen and (max-width: 1500px) {
      width: 22rem;
    }

    @media only screen and (max-width: 1140px) {
      width: 15rem;
    }

    @media only screen and (max-width: 850px) {
      width: 30rem;
    }
    @media only screen and (max-width: 630px) {
      width: 20rem;
    }
  }

  button {
    height: 50%;
    align-self: center;
    margin-top: 1.5rem;

    @media only screen and (max-width: 850px) {
      margin-top: 0;
    }
  }
}


</style>
