<template>
  <footer>
    <h3>&copy; Copyright Szymon Wójcik Adrian Ochała {{ year }}</h3>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      year: new Date().getFullYear().toString()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/abstract/variables";
footer {

  background-color: $color-primary;
  padding: 1rem;
  font-size: .8rem;
  color: lighten($color-primary, 7);

  display:flex;
  justify-content: center;
  align-self: flex-end;
  width: 100%;
}

</style>
