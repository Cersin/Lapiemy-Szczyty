<template>
  <div>
    <div v-for="(image, index) in images" :key="index">
      <img @click="showSingle(image, index)" height="300" :src="image">
    </div>
    <button @click="showSingle(image)">Show all.</button>

    <vue-easy-lightbox
        escDisabled
        moveDisabled
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
  name: "gallery",
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      imgs: [], // Img Url , string or Array of string
      visible: false,
      index: 0 // default: 0
    }
  },
  beforeCreate() {
    this.$store.dispatch('gallery/getPhotos');
  },
  computed: {
    ...mapGetters({
      images: "gallery/images"
    })
  },
  methods: {
    showSingle(image, index) {
      console.log(index);
      this.imgs = this.images; // all images
      if (index) {
        this.index = index // index of imgList
      } else {
        this.index = 0;
      }
      this.show()
    },
    show() {
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
