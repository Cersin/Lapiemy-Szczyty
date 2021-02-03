<template>
  <div class="card">
    <img src="../assets/ok.jpg" alt="Article photo">

    <div class="card__box">
      <header class="card__box-title">Trzy Szczyty - Kriźna, Ostredok</header>
      <p class="card__box-category">Wycieczki, Słowacja</p>
      <p class="card__box-distance">Dystans: 7,6km</p>
      <p class="card__box-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur venenatis blandit. Praesent vehicula, libero non pretium vulputate, lacus arcu facilisis lectus, sed feugiat tellus nulla eu dolor. Nulla porta bibendum lectus quis euismod. Aliquam volutpat ultricies porttitor. Cras risus nisi, accumsan vel cursus ut, sollicitudin vitae dolor. Fusce scelerisque eleifend lectus in bibendum. Suspendisse lacinia egestas felis a volutpat.</p>
    </div>
  </div>
</template>

<script>
export default {
name: "card"
}
</script>

<style lang="scss" scoped>
@import "src/styles/abstract/variables";
  .card {
    background-color: #EEEE;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 80%;
      height: 30vh;
      object-fit: cover;
      object-position: center;
      margin-top: 2rem;
    }

    &__box {
      background-color: $color-white;
      transform: translateY(-2rem);
      width: 65%;
      padding: 1.5rem;

      &-title {
        font-weight: 800;
        font-size: 1.5rem;
        letter-spacing: 2px;
      }

      &-category {
        color: $color-secondary;
        font-size: 1.1rem;
        margin-top: .5rem;
      }

      &-distance {
        font-size: 1.1rem;
        margin-top: .2rem;
        font-weight: 600;
        color: rgba(0,0,0,0.3);
      }

      &-description {
        font-size: 1.2rem;
        margin-top: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4; /* number of lines to show */
        -webkit-box-orient: vertical;
      }
    }
  }
</style>
