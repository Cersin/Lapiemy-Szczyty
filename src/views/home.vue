<template>
  <div class="home">
    <home-header></home-header>
    <div class="articles">
      <card></card>
      <card></card>
      <card></card>
      <card></card>
      <card></card>
    </div>
  </div>

</template>

<script>

import HomeHeader from "@/components/home-header";
import Card from "@/components/card";
export default {
  name: "Home",
  components: {Card, HomeHeader}
}
</script>

<style lang="scss" scoped>
  .home {
    min-height: 100%;
    display: grid;
    grid-template-rows: 20vw 1fr repeat(2, min-content);
    justify-content: center;
  }

  .articles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 3rem;
    padding: 2rem;
    justify-self: center;
    width: 70%;
    
    @media only screen and (max-width: 700px)  {
      width: 100%;
    }
  }
</style>
