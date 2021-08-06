<template>
  <div v-if="stats" class="about">
    <div class="czosnek">
      <img src="../assets/czosnek.png" alt="Zdjęcie Czonska">
      <h1>Dzień dobry… Cześć… Ahoj!</h1>
      <p class="text">Miałem iść czerwonym, nie jednak żółtym.. a może czarnym? Też tak czasem masz? 😊 Jednak jeżeli tutaj dotarłeś aż tutaj to: </p>
      <ol type="a">
        <li>Kochasz wędrówki górskie</li>
        <li>Szukasz ciekawych wycieczek</li>
        <li>Nie tak źle z czytaniem drogowskazów</li>
      </ol>
      <p class="text">
        Będę tutaj właśnie dla Ciebie.  Ten blog powstał z myślą o amatorach pieszych wędrówek. Pomogę Ci odnaleźć ciekawe szlaki, gdzie nie tylko się napatrzysz, nachodzisz, ale także odpoczniesz na łonie natury. Będę umieszczał ładne fotki (nie tylko dlatego, że będę na nich ja), ale także żebyś złapał małą zajawkę i niczym się nie rozczarował. Dodatkowo umiem pisać, więc opiszę Ci moje doznania z wycieczki i umieszczę mapę z wędrówki żebyś mógł też zostawić swój ślad na tych ścieżkach. Może kiedyś się spotkamy na szlaku, więc komu w drogę temu łapy na szlak.

      </p>
      <h2>PS. ŁapieMY szczyty😉</h2>
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
  flex: 1;
  flex-direction: column;
  align-items: center;
}

.czosnek {
  width: 50%;
  letter-spacing: .1rem;
  display: flex;
  flex-direction: column;
  align-items: center;


  .text {
    font-size: 1.4rem;
  }

  ol {
    margin-top: 1rem;
    margin-bottom: .5rem;
    font-size: 1.3rem;
    font-weight: 600;
  }

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
    font-size: 2rem;
    margin-top: 1rem;
    color: $color-primary-darker;
  }

  p {
    font-size: 1.2rem;
  }
}

.stats {
  margin-top: 3rem;
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
