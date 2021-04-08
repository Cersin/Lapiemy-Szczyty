import {createRouter, createWebHistory} from 'vue-router'
import home from "@/views/home";
import article from "@/views/trips/article";
import gallery from "@/views/gallery";
import about from "@/views/about";
import desktop from "@/views/admin/desktop";
import login from "@/views/admin/login";
import addArticle from "@/views/admin/articles/addArticle";
import store from "@/store/index";

const routes = [
    {path: '/', component: home},
    {path: '/wycieczki/:category/:article', component: article, props: true},
    {path: '/galeria', component: gallery},
    {path: '/o-nas', component: about},
    {path: '/admin', component: desktop, meta: {requiresLogin: true}},
    {path: '/admin/login', component: login},
    {path: '/admin/articles/edit', component: addArticle, name:'editArticle', meta: {requiresLogin: true}, props:true},
    {path: '/admin/articles/add', component: addArticle, meta: {requiresLogin: true}}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin) && !store.getters.isLogged) {
        console.log('Nie jestes zalogowany')
        router.push('/admin/login');
    } else {
        next();
    }
})


export default router
