<template>
  <div class="header"></div>
</template>

<script>
export default {
name: "home-header"
}
</script>

<style lang="scss" scoped>
@import "src/styles/abstract/variables";
  .header {
    background-image: url('../assets/home-header.jpg');
    background-size: cover;
    background-position: 0 60%;

    display: flex;
    align-items: center;
  }
</style>
