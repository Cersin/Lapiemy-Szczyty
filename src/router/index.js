import { createRouter, createWebHistory } from 'vue-router'
import tripsCategories from "@/views/trips/tripsCategories";
import home from "@/views/home";
import articleList from "@/views/trips/articleList";
import article from "@/views/trips/article";
import gallery from "@/views/gallery";
import about from "@/views/about";
import desktop from "@/views/admin/desktop";
import login from "@/views/admin/login";
import list from "@/views/admin/articles/list";
import editArticle from "@/views/admin/articles/editArticle";
import addArticle from "@/views/admin/articles/addArticle";
import listCategory from "@/views/admin/categories/listCategory";
import editCategory from "@/views/admin/categories/editCategory";
import addCategory from "@/views/admin/categories/addCategory";

const routes = [
  { path: '/', component: home},
  { path: '/wycieczki', component: tripsCategories },
  { path: '/wycieczki/:category', component: articleList },
  { path: '/wycieczki/:category/:article', component: article },
  { path: '/galeria', component: gallery },
  { path: '/o-nas', component: about },
  { path: '/admin', component: desktop },
  { path: '/admin/login', component: login },
  { path: '/admin/articles', component: list },
  { path: '/admin/articles/:article/edit', component: editArticle},
  { path: '/admin/articles/:article/add', component: addArticle},
  { path: '/admin/category', component: listCategory },
  { path: '/admin/category/:category/edit', component: editCategory},
  { path: '/admin/category/:category/add', component: addCategory}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
