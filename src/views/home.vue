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
            <option value="">Wszystkie</option>
            <option value="&country=Polska">Polska</option>
            <option value="&country=Za_Granica">Za granicą</option>
          </select>
        </div>

        <div class="searchbar__input-box">
        <span>
           <font-awesome-icon icon="mountain"/>
            Pasmo górskie
        </span>
          <select v-model="mountains">
            <option disabled value="">Wybierz góry</option>
            <option value="">Wszystkie</option>
            <option :value="`&category=${category.name}`" v-for="(category, i) in categories" :key="i">{{
                category.name
              }}
            </option>
          </select>
        </div>

        <div class="searchbar__input-box">
        <span>
           <font-awesome-icon icon="hiking"/>
            Dystans
        </span>
          <select v-model="distance">
            <option disabled value="">Wybierz dystans</option>
            <option value="">Wszystkie</option>
            <option value="&distance[lte]=5">do 5km</option>
            <option value="&distance[gt]=5&distance[lte]=10">5 do 10km</option>
            <option value="$distance[gt]=10">powyżej 10km</option>
          </select>
        </div>
      </div>

      <button @click="search()" class="button-green">Szukaj</button>

    </div>

    <div class="articles">
      <card v-for="article in articles"
            :key="article._id"
            :id="article._id"
            :title=article.title
            :category=article.category
            :distance=article.distance
            :country="article.country"
            :description=article.description
            :tripTime="article.tripDate"
            :mainPhoto="article.mainPhoto"
      ></card>

    </div>

    <div class="paginate">
      <button class="button-green back" @click="paginateBefore" :disabled="!canPaginateBack">Wstecz</button>
      <button class="button-green more" @click="paginateNext" :disabled="!canPaginate">Pokaż więcej</button>
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
      country: '',
      mountains: '',
      distance: ''
    }
  },
  async created() {
    this.$store.dispatch('articles/getArticles', {
      change: false,
      paginate: false,
      country: this.country,
      mountains: this.mountains,
      distance: this.distance
    });
    this.$store.dispatch('categories/getCategories');
  },
  computed: {
    ...mapGetters({
      articles: "articles/getPosts",
      categories: "categories/getCategories",
      canPaginate: "articles/canPaginate",
      canPaginateBack: "articles/canPaginateBack"
    })
  },
  methods: {
    search() {
      this.$store.dispatch('articles/getArticles', {
        change: true,
        paginate: false,
        country: this.country,
        mountains: this.mountains,
        distance: this.distance
      });
    },
    paginateNext() {
      this.$store.dispatch('articles/getArticles', {
        change: true,
        paginate: true,
        add: 8,
        country: this.country,
        mountains: this.mountains,
        distance: this.distance
      });
    },
    paginateBefore() {
      this.$store.dispatch('articles/getArticles', {
        change: true,
        paginate: true,
        add: -8,
        country: this.country,
        mountains: this.mountains,
        distance: this.distance
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/abstract/variables";
.paginate {
  margin-bottom: 2rem;
}
.back {
  margin-right: 2rem;
  margin-bottom: 1rem;
}
.home {
  flex: 1;
  width: 80%;
  margin: 0 auto;
}

.articles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 3rem;
  justify-content: center;
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
      font-size: 1.3rem;
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
      width: 25rem;
    }
    @media only screen and (max-width: 630px) {
      width: 15rem;
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
