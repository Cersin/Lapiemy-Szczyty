<template>
  <form>
    <div class="input">
      <label for="title">Tytuł</label>
      <input id="title" v-model="post.title" type="text">
    </div>

    <div class="input">
      <label for="description">Opis</label>
      <input id="description" v-model="post.description" type="text">
    </div>

    <div class="input">
      <label for="category">Kategoria</label>
      <input id="category" v-model="post.category" type="text">
    </div>

    <!--  TODO  -->
    <div class="input">
      <label for="mainPhoto">Główne zdjęcie</label>
      <input id="mainPhoto" v-model="post.mainPhoto" type="text">
    </div>

    <div class="input">
      <label for="tripDate">Data wycieczki</label>
      <input id="tripDate" v-model="post.tripDate" type="date">
    </div>

    <div class="input">
      <label for="duration">Czas</label>
      <input id="duration" v-model="post.duration" type="time">
    </div>

    <div class="input">
      <label for="distance">Dystans</label>
      <input id="distance" v-model="post.distance" type="number">
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
      post: {
        title: null, // required
        description: null, // required
        category: null, // required
        mainPhoto: null, // // required
        images: null, // no required
        tripDate: null, // required
        duration: null, // no required
        distance: null, // no required
      },

      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor.
        language: 'pl'
      }
    }
  },
  methods: {
    async addPost() {
      try {
        await this.$store.dispatch('articles/sendPost', {
          post: this.post,
          content: this.editorData
        });
      } catch (e) {
        console.log(e.message);
        console.log(e.response.data.message);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
.ck-content p{
  color: red;
}
</style>
