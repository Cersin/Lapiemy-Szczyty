<template>
  <nav>
    <div class="logo" @click="$router.push('/')">
      <font-awesome-icon class="logo-icon" icon="paw"/>
      <div class="logo-text">
        <p>Łapie<span class="logo-text-green">my</span></p>
        <p>Szczy<span class="logo-text-green">ty</span></p>
      </div>
    </div>

    <div class="routing">
      <router-link class="routing-element" to="/">Wycieczki</router-link>
      <router-link class="routing-element" to="/galeria">Galeria</router-link>
      <router-link class="routing-element" to="/o-nas">O nas</router-link>
      <router-link v-if="isLogged" class="routing-element" to="/admin">Admin</router-link>
    </div>

    <div class="routing_mobile">
      <font-awesome-icon class="bar" icon="bars" @click="openMenu"/>
    </div>
  </nav>

  <transition name="menu">
    <div class="menu-mobile" v-if="isMenu">
      <router-link class="menu-mobile-element" to="/"  @click="openMenu">Wycieczki</router-link>
      <router-link class="menu-mobile-element" to="/galeria"  @click="openMenu">Galeria</router-link>
      <router-link class="menu-mobile-element" to="/o-nas"  @click="openMenu">O nas</router-link>
      <router-link v-if="isLogged" class="menu-mobile-element" to="/admin"  @click="openMenu">Admin</router-link>
    </div>
  </transition>

</template>

<script>
export default {
  name: "TheNavigation",
  data() {
    return {
      isMenu: false
    }
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    }
  },
  methods: {
    openMenu() {
      this.isMenu = !this.isMenu;
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
  justify-content: space-between;
}

//// Stylizacja logo /////
.logo {
  margin-left: 8vw;
  width: 30%;
  padding: .2rem 1rem;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (max-width: 700px) {
    margin-left: 0;
  }

  &-text {
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 3px;
    transition: all .7s ease-in;

    &-green {
      color: $color-secondary;
      transition: all 1.5s;
      transition-delay: .8s;
    }
  }

  &-icon {
    font-size: 4.5rem;
    margin-right: 1rem;
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
  align-items: center;
  margin-right: 8vw;
  flex: 1;
  justify-content: space-evenly;

  &-element {
    font-size: 1.5rem;
    font-weight: 500;
    margin-right: 3rem;
    color: inherit;
    text-decoration: none;
    border-radius: 1rem;
    padding: 1rem;

    &:after {
      content: "";
      background-color: white;
      height: 2px;
      width: 0;
      display: block;
      position: relative;
      top: .8rem;
      transition: all .5s;
    }

    &:hover:after {
      content: "";
      background-color: white;
      height: 2px;
      width: 100%;
      display: block;
      position: relative;
      top: .8rem;
    }

    @media only screen and (max-width: 700px) {
      display: none;
    }
  }

  .router-link-active:after {
    content: "";
    background-color: white;
    height: 2px;
    width: 100%;
    display: block;
    position: relative;
    top: .8rem;
  }
}

.routing_mobile {
  display: none;
  align-items: center;

  .bar {
    margin-right: 2rem;
    font-size: 2rem;
  }

  @media only screen and (max-width: 700px) {
    display: flex;
  }
}

.menu-mobile {
  display: flex;
  flex-direction: column;
  background-color: $color-primary-lighter;

  &-element {
    width: 100%;
    align-self: center;
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
    text-decoration: none;
    padding: 1.5rem;

    &:hover {
      background-color: $color-grey;
      color: black;
    }
  }
}

.menu-leave-to, .menu-enter {
  opacity: 0;
}

.menu-leave-active {
  transition: opacity 1s;
}

</style>
