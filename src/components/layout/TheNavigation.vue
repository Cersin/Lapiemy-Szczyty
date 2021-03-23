<template>
  <nav>
    <div class="logo" @click="$router.push('/')">
      <div class="logo-text">
        <p>Łapie<span class="logo-text-green">my</span></p>
        <p>Szczy<span class="logo-text-green">ty</span></p>
      </div>
      <font-awesome-icon class="logo-icon" icon="paw"/>
    </div>

    <div class="routing">
      <router-link class="routing-element" to="/wycieczki">Wycieczki</router-link>
      <router-link class="routing-element" to="/galeria">Galeria</router-link>
      <router-link class="routing-element" to="/o-nas">O nas</router-link>
      <router-link v-if="isLogged" class="routing-element" to="/admin">Admin</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavigation",
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/abstract/variables";

//// Stylizacja całej nawigacji /////
nav {
  background-color: $color-primary;
  color: $color-white;
  padding: 1rem;

  grid-row: nav-start / nav-end;

  display: flex;
  flex-direction: row;
  }

//// Stylizacja logo /////
.logo {
  font-family: "Open Sans", sans-serif;
  margin-left: 1.5rem;
  padding: .2rem 1rem;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;

  &-text {
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: 3px;
    transition: all .7s ease-in;

    &-green {
      color: $color-secondary;
      transition: all 1.5s;
      transition-delay: .8s;
    }
  }

  &-icon {
    font-size: 3.5rem;
    margin-left: .7rem;
    color: $color-secondary;
    transition: all 1.5s;
    transition-delay: .8s;
  }

  &:hover &-icon {
    color: $color-white;
  }

  &:hover &-text {
    color: $color-secondary;

    &-green {
      color: $color-white;
    }
  }
}

//// Stylizacja routingu /////
.routing {
  color: $color-white;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;

  &-element {
    font-size: 1.8rem;
    color: inherit;
    text-decoration: none;
    border-radius: 1rem;
    padding: 1rem;
    transition: all .5s;

    @media only screen and (max-width: 700px)  {
      font-size: 1.4rem;
    }

    &:hover {
      background-color: darken($color-secondary, 8);
      border-radius: 1rem;
      box-shadow: .2rem .1rem 1rem .1rem rgba(0, 0, 0, 0.2);
    }

    &:active {
      background-color: $color-secondary;
    }
  }

  .router-link-active {
    background-color: darken($color-secondary, 9);
    border-radius: 1rem;
    box-shadow: .2rem .1rem 1rem .1rem rgba(0, 0, 0, 0.2);
  }
}

</style>
