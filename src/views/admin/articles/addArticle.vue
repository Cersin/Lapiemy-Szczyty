<template>
  <div>
    <form>
      <div class="input">
        <label for="title">Tytuł</label>
        <input id="title" v-model="post.title" type="text">
      </div>

      <div class="input">
        <label for="description">Opis</label>
        <input id="description" v-model="post.description" type="text" required>
      </div>

      <div class="input">
        <label for="category">Kategoria</label>
        <input id="category" v-model="post.category" type="text">
      </div>

      <div class="input">
        <label for="mainPhoto">Główne zdjęcie</label>
        <input type="file" ref="mainPhoto"
               id="mainPhoto" name="mainPhoto"
               accept="image/png, image/jpeg, image/jpg" @change="onFileUpload($event)">
      </div>

      <div class="input">
        <label for="tripDate">Data wycieczki</label>
        <input id="tripDate" v-model="post.tripDate" placeholder="Data wycieczki" type="date">
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
    <!--  <div class="ck-content">-->
    <!--    {{temporaryPost}}-->
    <!--    <h2>Content of the editor.</h2><p>&nbsp;</p><h4>coś jeszcze</h4>-->
    <!--  </div>-->
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
      mainPhoto: null,
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

        // heading: {
        //     options: [
        //         { model: 'paragraph', title: 'Paragraf', class: 'ck-heading_paragraph' },
        //         { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
        //         { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
        //     ]
        // },
      }
    }
  },
  methods: {
    async addPost() {
        let formData = new FormData();
        formData.append('upload', this.mainPhoto);
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
    },
    onFileUpload($event) {
      this.mainPhoto = $event.target.files[0];
      console.log(this.mainPhoto);
    }
  }

}


</script>

<style lang="scss" scoped>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
@import "src/styles/abstract/variables";
form{
  // background-color: gray;
  background-color: rgba(238, 238, 238, 0.486);
  width: 70%;
  margin: 0 auto;
  font-size: 1.3rem;
  padding-bottom: 1rem;

  label{
    font-size: 1.5rem;
  }

  input{
  padding: .7rem 1.5rem;
  border-radius: 2px;
  border: 2px solid $color-primary;
  background-color: rgba(white, 0.8);
  display: block;

  &:focus{
    outline: none;
    border:none;
    box-shadow: 0 1rem 2rem rgba(black, 0.1);
    border-bottom: 3px solid $color-primary;
  }
  &:invalid{
    border:2px solid red;
    box-shadow: none;
  }
  &:focus:invalid {
    border:none;
    border-bottom: 3px solid red;
  }
}
}
.input:not(:last-child){
  margin-bottom: 1rem;
}

.article__button {
  border:none ;
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

  &-polygon{
    background-color: $color-secondary;
    // clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(0% 100%, 25% 30%, 40% 60%,60% 10%, 100% 100%, 0% 100%);
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
</style>
