<template>
  <!--  <div id="nav">-->
  <!--    <router-link to="/">Home</router-link>-->
  <!--    <router-link to="/about">About</router-link>-->
  <!--  </div>-->
  <div class="full-page">
    <the-navigation></the-navigation>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
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

.route-enter-from {
  opacity: .5;
  transform: translateX(-150px);
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.route-enter-active {
  transition: all .3s ease-out;
}

.route-leave-to {
  opacity: .5;
  transform: translateX(150px);
}

.route-leave-active {
  transition: all .3s ease-in;
}
</style>

<script>
import TheFooter from "@/components/layout/TheFooter";
import TheNavigation from "@/components/layout/TheNavigation";

export default {
  components: {TheNavigation, TheFooter},
  beforeCreate() {
    console.log(this.$store.dispatch('autoLogin'));

  }
}
</script>
