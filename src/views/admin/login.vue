<template>
  <div class="login">
    <form @submit.prevent="loginAdmin">
      <h2>Zaloguj się</h2>
      <label for='name'>Użytkownik</label>
      <input type='text' id='user' v-model='name'>

      <label for='password'>Hasło</label>
      <input type='password' id='password' v-model='password'>

      <button>Zaloguj</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      name: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async loginAdmin() {
      try {
        await this.$store.dispatch('login', {
          name: this.name,
          password: this.password
        });
      } catch (e) {
        this.error = e.message;
        window.alert(this.error);
        console.log(e.message);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/styles/base/utilities";

.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  background-color: $color-secondary-darker;
  height: 40vh;
  width: 45vh;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover h2 {
    color: $color-grey;
  }
}

h2 {
  margin-bottom: 5rem;
  color: $color-grey-light;
  font-size: 3rem;
  transition: all 1s;
}

label {
  color: $color-grey-light;
  margin-bottom: .5rem;
  font-size: 1.5rem;
}

input {
  margin-bottom: .5rem;
  background-color: $color-primary;
  color: $color-white;
  text-align: center;
  transition: all .5s;

  &:focus {
    background-color: darken($color-primary, 5);
    width: 50%;
  }
}

button {
  margin-top: 1rem;
  text-decoration: none;
  background-color: $color-primary;
  border: none;
  padding: 1rem 3rem;
  border-radius: 10px;
  color: $color-white;
  transition: all .2s;

  &:hover {
    background-color: darken($color-primary, 5);
    transform: translateY(2px);
  }

  &:active {
    background-color: lighten($color-primary, 5);
  }

}
</style>
