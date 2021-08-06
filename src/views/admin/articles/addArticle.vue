<template>
  <div>
    <form action="addPost()">
      <div class="input">
        <label for="title">Tytuł</label>
        <input id="title" v-model="post.title" type="text"  >
        <div style="color:red;" v-if="v$.post.title.$error">{{v$.post.title.$errors[0].$message}}</div>
        <!-- required minlength="3"  @blur="v$.post.title.$touch" -->
      </div>

      <div class="input">
        <label for="description">Opis</label>
        <input id="description" v-model="post.description" type="text">
        <div style="color:red;" v-if="v$.post.description.$error">{{v$.post.description.$errors[0].$message}}</div>
      </div>

      <div class="input">
        <label for="country">Kraj</label>
        <input id="country" v-model="post.country" type="text">
        <div style="color:red;" v-if="v$.post.country.$error">{{v$.post.country.$errors[0].$message}}</div>
      </div>

      <div class="input">
        <label for="category">Kategoria</label>
        <select v-model="post.category" id="category" name="category">
          <option v-for="(category, i) in categories" v-bind:key="i" :value="category.name">{{ category.name }}</option>
        </select>
        <div style="color:red;" v-if="v$.post.category.$error">{{v$.post.category.$errors[0].$message}}</div>
      </div>

      <div class="add-category">
        <button @click.prevent="isAddingCategory = !isAddingCategory">Dodaj kategorię</button>
        <div v-if="isAddingCategory" class="add-category-active">
          <label for="newCategory">Kategoria</label>
          <input id="newCategory" v-model="newCategory" type="text">
          <div style="color:red;" v-if="v$.newCategory.$error">{{v$.newCategory.$errors[0].$message}}</div>
          <button class="article__button" @click.prevent="addCategory()" :disabled="v$.newCategory.$invalid">Dodaj</button>
        </div>
      </div>

      <div class="input" v-if="!mainPhoto">
        <label for="mainPhoto">Główne zdjęcie</label>
        <input type="file" ref="mainPhoto"
               id="mainPhoto" name="mainPhoto"
               accept="image/png, image/jpeg, image/jpg" @change="onFileUpload($event)">
      </div>

      <div class="mainPhoto" v-else>
        <img :src="mainPhoto" alt="Main Photo">
        <button @click.prevent="mainPhoto = null">Zmień zdjęcie główne</button>
      </div>
      <div style="color:red;" v-if="v$.mainPhoto.$error">{{v$.mainPhoto.$errors[0].$message}}</div>

      <div class="input">
        <label for="tripDate">Data wycieczki</label>
        <input id="tripDate" v-model="post.tripDate" placeholder="Data wycieczki" type="date">
        <div style="color:red;" v-if="v$.post.tripDate.$error">{{v$.post.tripDate.$errors[0].$message}}</div>
      </div>

      <div class="input">
        <label for="duration">Czas wycieczki w minutach</label>
        <input id="duration" v-model="post.duration" type="number">
      </div>

      <div class="input">
        <label for="distance">Dystans</label>
        <input id="distance" v-model="post.distance" type="number">
      </div>

      <div class="input">
        <label for="map">Mapa</label>
        <input id="map" v-model="post.map" type="text">
      </div>

      <div v-if="post.map" v-html="post.map"></div>

      <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
      <div style="color:red;" v-if="v$.editorData.$error">{{v$.editorData.$errors[0].$message}}</div>
      <!-- <button @click.prevent="addPost()">Dodaj artykuł</button> -->
      <button class="article__button" @click.prevent="addPost()" v-if="!editableArticle">
        <span class="article__button-polygon"></span>
        <span class="article__button-text">Dodaj artykuł</span>
      </button>
      <button class="article__button" @click.prevent="editPost()" v-else>
        <span class="article__button-polygon"></span>
        <span class="article__button-text">Edytuj artykuł</span>
      </button>
    </form>
  </div>
</template>

<script>
import {HTTP} from '@/http-common';
import CKEditor from '@ckeditor/ckeditor5-vue';

import Editor from '@heaglock/custom-classic-ckeditor5';

import '@ckeditor/ckeditor5-build-classic/build/translations/pl';

import useVuelidate from '@vuelidate/core';
import { helpers, required,minLength, maxLength } from '@vuelidate/validators';

export default {
  name: "addArticle",
  components: {
    ckeditor: CKEditor.component
  },
  setup () {
    return { v$: useVuelidate() }
  },
  
  data() {
    return {
      editableArticle: null,
      isAddingCategory: false,
      newCategory: null,
      categories: null,
      mainPhoto: null,
      post: {
        title: null, // required
        description: null, // required
        category: null, // required
        images: null, // no required
        tripDate: null, // required
        duration: null, // no required
        distance: null, // no required
        country: null, // required
        map: null // no required
      },
      editor: Editor,
      editorData: null,
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
          uploadUrl: 'http://lapiemyszczyty.ct8.pl/image/send',

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
  validations(){
    return {
      post:{
        title:{required: helpers.withMessage( `Tytuł jest wymagany!`, required ) ,
              minLength: helpers.withMessage( ({$params}) => `Tytuł powinien zawierać conajmniej ${$params.min} znaków!`, minLength(5)), 
              $autoDirty: true},
        description:{required: helpers.withMessage( `Opis jest wymagany!`, required ) ,
                    maxLength:helpers.withMessage( ({$params}) => `Opis powinien zawierać mniej niż ${$params.max} znaków!`, maxLength(100)), 
                    $autoDirty: true },
        country:{required: helpers.withMessage( `Kraj jest wymagany!`, required ),
                $autoDirty: true},
        category:{required: helpers.withMessage( `Kategoria jest wymagana!`, required ), $autoDirty: true},
        tripDate:{required: helpers.withMessage( `Data wycieczki jest wymagana!`, required), $autoDirty: true},
      },
      mainPhoto:{required:helpers.withMessage( `Zdjęcie główne jest wymagane!`, required ), $autoDirty: true},
      editorData:{required:helpers.withMessage( `Uzupełnij post!`, required ), $autoDirty: true},
      newCategory:{required:helpers.withMessage( `Nazwa jest wymagana!`, required )}
    }
  },
  methods: {
    async addPost() {
      this.v$.post.$touch();
      this.v$.mainPhoto.$touch();
      this.v$.editorData.$touch();
      if(this.v$.post.$error || this.v$.mainPhoto.$error || this.v$.editorData.$error ) return alert('Proszę poprawić błędy w formularzu :)');
      
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
    async editPost() {
      this.v$.post.$touch();
      this.v$.mainPhoto.$touch();
      this.v$.editorData.$touch();
      if(this.v$.post.$error || this.v$.mainPhoto.$error || this.v$.editorData.$error ) return alert('Proszę poprawić błędy w formularzu :)');
      if (this.editableArticle.mainPhoto === this.mainPhoto) {
        console.log("Takie samo zdjęcie główne")
        await HTTP.patch(`articles/${this.post._id}`,{
                title: this.post.title,
                description: this.post.description,
                country: this.post.country,
                category: this.post.category,
                distance: this.post.distance,
                mainPhoto: this.mainPhoto,
                content: this.editorData,
                duration: this.post.duration,
                tripDate: this.post.tripDate,
                map: this.post.map
            });
            window.location = '/';
      }else if(this.editableArticle.mainPhoto !== this.mainPhoto){
        let formData = new FormData();
        formData.append('upload', this.mainPhoto);
        if (this.mainPhoto) {
          try {
            const imageRespond = await HTTP.post('image/send', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            await HTTP.patch(`articles/${this.post._id}`, {
              title: this.post.title,
              description: this.post.description,
              country: this.post.country,
              category: this.post.category,
              distance: this.post.distance,
              mainPhoto: imageRespond.data.url,
              content: this.editorData,
              duration: this.post.duration,
              tripDate: this.post.tripDate,
              map: this.post.map
            });
            window.location = '/';
          } catch (e) {
            console.log(e.message);
            console.log(e.response.data.message);
          }
        } else {
          console.log('Nie dodałeś zdj');
        }
      }

    },
    onFileUpload($event) {
      this.mainPhoto = $event.target.files[0];
    },
    async addCategory() {
      try {
        const category = await HTTP.post(`/category`, {
          name: this.newCategory
        });
        this.categories.push(category.data.category);
        this.isAddingCategory = false;
      } catch (e) {
        console.log(e.message);
        console.log(e.response.data.message);
      }
    },
  },
  async beforeCreate() {
    const category = await HTTP.get(`/category`);
    this.categories = category.data.data.categories;

    if (this.$route.params.title) {
      this.editableArticle = this.$route.params;
      this.post = this.editableArticle;
      this.post.tripDate = this.$filters.moment(this.editableArticle.tripDate, "YYYY-MM-DD");
      this.mainPhoto = this.editableArticle.mainPhoto;
      this.editorData = this.editableArticle.content;
    }
  },
  // created() {
  //   this.v$.reset();
  // },
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

  input, select {
    width: 20vw;
    padding: .7rem 1.5rem;
    border-radius: 2px;
    border: 2px solid $color-primary;
    border-bottom: 3px solid $color-primary;
    background-color: rgba(white, 0.8);
    display: block;

    &:required {
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

.mainPhoto {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  img {
    max-width: 30vw;
    height: auto;
    border-radius: 10px;
  }

  button {
    width: 10vw;
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
