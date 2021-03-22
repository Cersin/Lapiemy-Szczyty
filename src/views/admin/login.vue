<template>
  <div class="login">
    <form @submit.prevent="loginAdmin">
      <label for='name'>Użytkownik</label>
      <input type='text' id='user' v-model='name'>

      <label for='password'>Hasło</label>
      <input type='password' id='password' v-model='password'>

      <button>Zaloguj</button>
    </form>
  </div>
</template>

<script>
import {HTTP} from './../../http-common.js';

export default {
  name: "login",
  data() {
    return {
      name: '',
      password: ''
    }
  },
  created() {
    HTTP.post('/admin/verify').then((res) => console.log(res.data.logged)).catch((err) => console.log(err));
  },
  methods: {
    loginAdmin() {
      // HTTP.get('/articles').then((res) => console.log(res.data));
      HTTP.post('/admin/login', {
        name: this.name,
        password: this.password
      }).then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res.data);
      }).catch((err) => {
        console.log(JSON.stringify(err));
      });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
