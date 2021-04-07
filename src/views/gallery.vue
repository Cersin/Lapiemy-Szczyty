<template>
  <div>
    <div class="container">
      <button class="button-green" @click="showSingle(image)">Pokaż wszystkie</button>
      <div class="images">
        <img v-for="(image, index) in images" :key="index" @click="showSingle(image, index)" height="300" :src="image">
      </div>
    </div>

    <vue-easy-lightbox
        escDisabled
        moveDisabled
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
        @on-prev-click="previous"
        @on-next-click="next"
    >
    </vue-easy-lightbox>
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
    },
    next(){
      this.index += 1;
    },
    previous(){
      this.index -= 1;
    }
  },
  watch:{
    index(){
      console.log(this.index);
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 70%;
  flex-direction: column;
  margin: 0 auto;

  @media only screen and (max-width: 800px) {
    width: 90%;
  }
}

button {
  margin: 2rem 0;
}

.images {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, 300px);

  @media only screen and (max-width: 1500px) {
    grid-template-columns: repeat(auto-fill, 200px);
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 125px);
  }

  img {
    width: 300px;
    height: auto;

    @media only screen and (max-width: 1500px) {
      width: 200px;
    }

    @media only screen and (max-width: 1000px) {
      width: 125px;
    }
  }
}

</style>
