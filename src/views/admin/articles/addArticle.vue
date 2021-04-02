<template>
  <div>
    <form action="addPost()">
      <div class="input">
        <label for="title">Tytuł</label>
        <input id="title" v-model="post.title" type="text" required minlength="3">
      </div>

      <div class="input">
        <label for="description">Opis</label>
        <input id="description" v-model="post.description" type="text" required>
      </div>

      <div class="input">
        <label for="category">Kategoria</label>
        <select v-model="post.category" id="category" name="category">
          <option v-for="(category, i) in categories" v-bind:key="i" :value="category.name">{{ category.name }}</option>
        </select>
      </div>

      <div class="add-category">
        <button @click.prevent="isAddingCategory = !isAddingCategory">Dodaj kategorię</button>
        <div v-if="isAddingCategory" class="add-category-active">
          <label for="newCategory">Kategoria</label>
          <input id="newCategory" v-model="newCategory" type="text" required>

          <label for="categoryPhoto">Zdjęcie kategorii</label>
          <input type="file" ref="categoryPhoto"
                 id="categoryPhoto" name="categoryPhoto"
                 accept="image/png, image/jpeg, image/jpg" @change="categoryFileUpload($event)">
          <button class="article__button" @click.prevent="addCategory()">Dodaj</button>
        </div>
      </div>

      <div class="input">
        <label for="mainPhoto">Główne zdjęcie</label>
        <input type="file" ref="mainPhoto"
               id="mainPhoto" name="mainPhoto"
               accept="image/png, image/jpeg, image/jpg" @change="onFileUpload($event)">
      </div>

      <div class="input">
        <label for="tripDate">Data wycieczki</label>
        <input id="tripDate" v-model="post.tripDate" placeholder="Data wycieczki" type="date" required>
      </div>

      <div class="input">
        <label for="duration">Czas</label>
        <input id="duration" v-model="post.duration" type="time">
      </div>

      <div class="input">
        <label for="distance">Dystans</label>
        <input id="distance" v-model="post.distance" type="number">
      </div>

      <div class="input">
        <label for="map">Mapa</label>
        <input id="map" v-model="post.map" type="text">
      </div>

      <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
      <!-- <button @click.prevent="addPost()">Dodaj artykuł</button> -->
      <button class="article__button" @click.prevent="addPost()">
            <span class="article__button-polygon"></span>
            <span class="article__button-text">Dodaj artykuł</span>
      </button>
    </form>
  </div>
</template>

<script>
import {HTTP} from '@/http-common';
import CKEditor from '@ckeditor/ckeditor5-vue';

import Editor from '@heaglock/custom-classic-ckeditor5';

import '@ckeditor/ckeditor5-build-classic/build/translations/pl';

export default {
  name: "addArticle",
  components: {
    ckeditor: CKEditor.component
  },
  data() {
    return {
      editableArticle:null,
      isAddingCategory: false,
      newCategory: null,
      categories: null,
      mainPhoto: null,
      categoryPhoto: null,
      post: {
        title: null, // required
        description: null, // required
        category: null, // required
        images: null, // no required
        tripDate: null, // required
        duration: null, // no required
        distance: null, // no required
        map: null // no required
      },
      editor: Editor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor.
        toolbar: {
          items: [
            'heading',
            '|',
            'fontFamily',
            'fontSize',
            'fontColor',
            'fontBackgroundColor',
            'highlight',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'alignment',
            'outdent',
            'indent',
            '|',
            'imageUpload',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            'horizontalLine',
            '|',
            'undo',
            'redo'
          ]
        },
        language: 'pl',
        image: {
          toolbar: [
            'imageTextAlternative',
            'imageStyle:full',
            'imageStyle:side',
            'linkImage'
          ]
        },
        table: {
          contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableCellProperties',
            'tableProperties'
          ]
        },
        simpleUpload: {
          // The URL that the images are uploaded to.
          uploadUrl: 'http://localhost:3001/image/send',

          // Enable the XMLHttpRequest.withCredentials property.
          withCredentials: false,

          // Headers sent along with the XMLHttpRequest to the upload server.
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      }
    }
  },
  methods: {
    async addPost() {
      let formData = new FormData();
      formData.append('upload', this.mainPhoto);
      if (this.mainPhoto) {
        try {
          const imageRespond = await HTTP.post('image/send', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          await this.$store.dispatch('articles/sendPost', {
            post: this.post,
            content: this.editorData,
            mainPhoto: imageRespond.data.url
          });
        } catch (e) {
          console.log(e.message);
          console.log(e.response.data.message);
        }
      } else {
        console.log('Nie dodałeś zdj');
      }

    },
    onFileUpload($event) {
      this.mainPhoto = $event.target.files[0];
      console.log(this.mainPhoto);
    },
    categoryFileUpload($event) {
      this.categoryPhoto = $event.target.files[0];
      console.log(this.categoryPhoto);
    },
    async addCategory() {
      let formData = new FormData();
      formData.append('upload', this.categoryPhoto);
      if (this.categoryPhoto) {
        try {
          const imageRespond = await HTTP.post('image/send', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          const category = await HTTP.post(`/category`, {
            name: this.newCategory,
            photo: imageRespond.data.url
          });
          this.categories.push(category.data.category);
          this.isAddingCategory = false;
        } catch (e) {
          console.log(e.message);
          console.log(e.response.data.message);
        }
      } else {
        console.log('Nie dodałeś zdj');
      }

    }
  },
  async beforeCreate() {
    const category = await HTTP.get(`/category`);
    // console.log(category.data.data.categories);
    this.categories = category.data.data.categories;
    this.editableArticle = this.$route.params;
    this.post.title = this.editableArticle.title;
    this.post.description = this.editableArticle.description;
    this.post.category = this.editableArticle.category;
    this.post.tripDate = this.editableArticle.tripDate;
    this.post.duration = this.editableArticle.duration;
    this.post.distance = this.editableArticle.distance;
    this.post.map = this.editableArticle.map;
    this.editorData = this.editableArticle.content;

    console.log(this.post.tripDate)
    
  }
}


</script>

<style lang="scss" scoped>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
@import "src/styles/abstract/variables";

form {
  // background-color: gray;
  background-color: rgba(238, 238, 238, 0.486);
  width: 70vw;
  margin: 0 auto;
  font-size: 1.3rem;
  padding-bottom: 1rem;

  label {
    font-size: 1.5rem;
    margin: auto;
  }

  input, select{
    width: 20vw;
    padding: .7rem 1.5rem;
    border-radius: 2px;
    border: 2px solid $color-primary;
    border-bottom: 3px solid $color-primary;
    background-color: rgba(white, 0.8);
    display: block;

    &:required{
      box-shadow: none;
    }

    &:focus {
      outline: none;
      border: 2px solid transparent;
      box-shadow: 0 1rem 1.5rem rgba(black, 0.2);
      border-bottom: 3px solid $color-primary;
    }
    &:focus:invalid {
      border: 2px solid transparent;
      border-bottom: 3px solid red;
    }
  }
}

.input:not(:last-child) {
  margin-bottom: 1rem;
}

.article__button {
  border: none;
  display: flex;
  padding: .5rem;
  box-shadow: 0 0.5rem 1rem rgba(black, 0.2);
  font-family: "Comic Sans MS", sans-serif;
  cursor: pointer;
  transition: all .3s;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;

  &:hover {
    background-color: $color-grey-light;
  }

  &:active {
    background-color: darken($color-grey-light, 10);
  }

  &-polygon {
    background-color: $color-secondary;
    // clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(0% 100%, 25% 30%, 40% 60%, 60% 10%, 100% 100%, 0% 100%);
    width: 2.5rem;
    height: 2.5rem;
  }

  &-text {
    margin-left: 1rem;
    margin-right: 1rem;
    align-self: flex-end;
    color: $color-secondary-darker;
    font-weight: 700;
    font-size: 1.4rem;
  }
}

.add-category {
  label {
    margin-bottom: 1rem;
    text-align: center;
  }

  &-active {
    display: flex;
    flex-direction: column;
    background-color: $color-secondary;
    width: 20vw;
    margin: 1rem 0;
    padding: 1rem 0;
  }
}
</style>
