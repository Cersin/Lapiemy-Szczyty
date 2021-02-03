<template>
  <div class="card">
    <img src="#" alt="Foto">
    <div class="card__content">
      <div class="card__content--title">
        
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "card",
};
</script>

<style lang="scss" scoped>
@import "src/styles/abstract/variables";
.card{
  background-color: $color-grey-light;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
}
</style>
