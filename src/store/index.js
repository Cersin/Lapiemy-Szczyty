import { createStore } from 'vuex'
import categoriesModule from '@/store/modules/categories/index'
import postsModule from '@/store/modules/posts/index'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    categories: categoriesModule,
    posts: postsModule
  }
})
