<template>
  <section class="desktop">
    <div class="container">
      <button style="margin-right: 1rem" @click="addArticle">Dodaj post</button>
      <button @click="open =!open">Edytuj post</button>
    </div>
    
    <transition name="popup__transition">
      <div class="popup" id="popup" v-if="open && articles">
        <div class="popup__content">
          <table>
            <tr>
              <th>LP</th>
              <th>Tytuł</th>
              <th>Akcja</th>  
            </tr>
            <tr v-for="(article, i) in articles" v-bind:key="i">
              <td>{{i+1}}</td>
              <td>{{article.title}}</td>
              <td><button @click="editArticle(article)">Edytuj</button></td>
            </tr>
          </table>
          Jakiś contencik
        </div>
        <a href="#" @click="open = !open" class="popup__close">&times;</a>
      </div>
    </transition>
  </section>
</template>

<script>
import {HTTP} from '@/http-common';
export default {
  name: "desktop",
  data(){
    return{
      open:false,
      articles:null,
    }
  },
  methods: {
    addArticle() {
      this.$router.push('/admin/articles/add');
    },
    editArticle(editableArticle){
      console.log(editableArticle)
      this.$router.push({ name: 'editArticle', params:editableArticle });
    },
  },
  async beforeCreate() {
    const response = await HTTP.get(`/articles`);
    this.articles = response.data.data.articles;
  }
}
</script>

<style lang="scss" scoped>
@import "./src/styles/base/utilities";

  .popup__transition-enter-active, .popup__transition-leave-active{
    transition: all .5s;
  }
  
  .popup__transition-enter-from, .popup__transition-leave-to{
    opacity: 0;
    transform: scale(0);
  }
  .popup{
    position: absolute;
    background-color: white;
    width: 60vw;
    
    z-index: 999;
    border-radius: 50px;
    padding: 3rem;

    &__close {
      &:link,
      &:visited {
        color: grey;
        position: absolute;
        top: 2rem;
        right: 3rem;
        font-size: 3.5rem;
        text-decoration: none;
        display: inline-block;
        transition: all 0.2s;
        line-height: 1;
      }

      &:hover {
        color: $color-primary;
      }
    }
  }
  .desktop {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $color-secondary-darker;
    width: 100%;
    height: 100%;
  }

  .container {
    background-color: $color-primary;
    padding: 10rem 2rem;
    display: flex;
    justify-content: space-evenly;
    width: 60%;
    border-radius: 50px;
    box-shadow: 5px 6px 5px rgba(0, 0, 0, .3);
  }

  button {
    border: none;
    background-color: $color-secondary-darker;
    font-size: 3rem;
    color: $color-white;
    padding: 2rem;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 5px 6px 5px rgba(0, 0, 0, .2);
    transition: all .5s;

    &:hover {
      background-color: rgba($color-secondary-darker, .8);
      transform: translateY(-2px);
    }
  }

</style>
