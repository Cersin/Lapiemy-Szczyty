<template>
  <div class="home">
    <home-header></home-header>
    <h1>elo</h1>
    <h1>elo</h1>
    <h1>elo</h1>
  </div>

</template>

<script>

import HomeHeader from "@/components/home-header";
export default {
  name: "Home",
  components: {HomeHeader}
}
</script>

<style lang="scss" scoped>
  .home {
    min-height: 100%;
    display: grid;
    grid-template-rows: 20vw 1fr repeat(2, min-content);
  }
</style>
