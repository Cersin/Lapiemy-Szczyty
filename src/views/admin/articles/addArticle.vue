<template>
  <form>
    <div class="input">
      <label for="title">Tytuł</label>
      <input id="title" v-model="title" type="text">
    </div>

    <div class="input">
      <label for="description">Opis</label>
      <input id="description" v-model="description" type="text">
    </div>

    <div class="input">
      <label for="category">Kategoria</label>
      <input id="category" v-model="category" type="text">
    </div>

    <!--  TODO  -->
    <div class="input">
      <label for="mainPhoto">Główne zdjęcie</label>
      <input id="mainPhoto" v-model="mainPhoto" type="text">
    </div>

    <div class="input">
      <label for="tripDate">Data wycieczki</label>
      <input id="tripDate" v-model="tripDate" type="date">
    </div>

    <div class="input">
      <label for="duration">Czas</label>
      <input id="duration" v-model="duration" type="time">
    </div>

    <div class="input">
      <label for="distance">Dystans</label>
      <input id="distance" v-model="distance" type="number">
    </div>

    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    <button @click.prevent="addPost()">Add test</button>
  </form>

</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/pl';

export default {
  name: "addArticle",
  components: {
    ckeditor: CKEditor.component
  },
  data() {
    return {
      title: null, // required
      description: null, // required
      category: null, // required
      mainPhoto: null, // // required
      images: null, // no required
      tripDate: null, // required
      duration: null, // no required
      distance: null, // no required

      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor.
        language: 'pl'
      }
    }
  },
  methods: {
    addPost() {
      console.log(this.tripDate);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>
