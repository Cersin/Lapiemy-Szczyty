import { createStore } from 'vuex'
import categoriesModule from '@/store/modules/categories/index'
import postsModule from '@/store/modules/posts/index'
import authModule from '@/store/modules/auth/index'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    categories: categoriesModule,
    posts: postsModule,
    auth: authModule
  }
})
