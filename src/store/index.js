import { createStore } from 'vuex'
import categoriesModule from '@/store/modules/categories/index'
import articlesModule from '@/store/modules/articles/index'
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
    articles: articlesModule,
    auth: authModule
  }
})
