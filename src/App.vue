<template>
  <!--  <div id="nav">-->
  <!--    <router-link to="/">Home</router-link>-->
  <!--    <router-link to="/about">About</router-link>-->
  <!--  </div>-->
  <div class="full-page">
    <the-navigation></the-navigation>
    <router-view/>
    <the-footer></the-footer>
  </div>
</template>

<style lang="scss">
@import "styles/base/animations";
@import "styles/base/base";
@import "styles/base/typography";
@import "styles/base/utilities";
@import "styles/abstract/mixins";
@import "styles/abstract/variables";
</style>

<script>
import TheFooter from "@/components/layout/TheFooter";
import TheNavigation from "@/components/layout/TheNavigation";
export default {
  components: {TheNavigation, TheFooter }
}
</script>
