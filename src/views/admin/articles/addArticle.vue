<template>
<div>
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
  <div class="ck-content">
    {{temporaryPost}}
    <h2>Content of the editor.</h2><p>&nbsp;</p><h4>coś jeszcze</h4>
  </div>
</div>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue';

import Editor from '../../../ckeditor5/build/ckeditor.js';

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
      temporaryPost: "test",

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
      console.log(this.editor.builtinPlugins.map( plugin => plugin.pluginName ));
      this.temporaryPost = this.editorData;
      try {
        await this.$store.dispatch('articles/sendPost', {
          post: this.post,
          content: this.editorData
        });
      } catch (e) {
        console.log(e.message);
        console.log(e.response.data.message);
      }
    },
  }
    
  }


</script>

<style lang="scss" scoped>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
.ck-content p{
  color: red;
}
</style>
