<template>
  <div v-if="stats" class="about">
    <div class="czosnek">
      <img src="../assets/czosnek.png" alt="Zdjęcie Czonska">
      <h1>Cześć! Nazywam się Czosnek!</h1>
      <h2>I bardzo kocham góry!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam asperiores assumenda, atque deserunt
        dicta eligendi esse illum molestias nobis obcaecati odit praesentium quas, repellendus repudiandae sequi
        similique veniam vitae.</p>
    </div>
    <div class="stats">
      <h1>Liczba wycieczek</h1>
      <h2>{{ stats.trips }}</h2>
      <h1>Całkowity pokonany dystans</h1>
      <h2>{{ stats.distance }} km</h2>
      <h1>Całkowity czas wycieczek:</h1>
      <h2>{{ stats.hours }}:{{ stats.minutes }} h</h2>
    </div>

    <div class="contact">
      <span class="contact-icon">
        <font-awesome-icon icon="envelope"/>
        Kontakt
      </span>
      <h2>wojcik.szymon1@gmail.com</h2>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "about",
  created() {
    this.$store.dispatch('articles/getStats');
  },
  computed: {
    ...mapGetters({
      stats: "articles/statistic",
    })
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/abstract/variables";

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.czosnek {
  text-align: center;
  width: 60%;

  @media only screen and (max-width: 1000px) {
    width: 90%;
  }

  img {
    margin-top: 5rem;
    border-radius: 30px;
    height: auto;
    width: 400px;

    @media only screen and (max-width: 700px) {
      width: 200px;
    }
  }

  h1 {
    font-size: 3rem;
    color: $color-primary;
  }

  h2 {
    font-size: 1.8rem;
    color: $color-primary-darker;
  }

  p {
    font-size: 1.2rem;
  }
}

.stats {
  margin-top: 5rem;
  text-align: center;

  h1 {
    color: $color-secondary;
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.8rem;
    margin-top: .5rem;
  }
}

.contact {
  margin-top: 3rem;
  text-align: center;

  &-icon {
    font-size: 3rem;
    color: $color-primary;
  }

  h2 {
    font-weight: 400;
  }
}

</style>
