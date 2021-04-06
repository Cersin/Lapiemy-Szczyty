<template>
  <div class="about">
    <div class="czosnek">
      <img src="../assets/czosnek.png" alt="Zdjęcie Czonska">
      <h2>Cześć! Nazywam się Czosnek!</h2>
      <p>Kocham góry!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam asperiores assumenda, atque deserunt dicta eligendi esse illum molestias nobis obcaecati odit praesentium quas, repellendus repudiandae sequi similique veniam vitae.</p>
    </div>
    <h1>{{ stats.trips }}</h1>
    <h1>{{ stats.distance }}</h1>
    <h1>{{ stats.duration }}</h1>
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
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.czosnek {
  text-align: center;
  width: 50%;
  img {
    margin-top: 5rem;
    border-radius: 30px;
    height: auto;
    width: 30vw;
  }
}

</style>
