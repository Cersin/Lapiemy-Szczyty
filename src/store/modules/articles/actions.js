import {HTTP} from '@/http-common';
import router from '../../../router/index';

export default {
    // eslint-disable-next-line no-unused-vars
    async sendPost(context, payload) {
        await HTTP.post('articles', {
            title: payload.post.title,
            description: payload.post.description,
            category: payload.post.category,
            distance: payload.post.distance,
            mainPhoto: payload.mainPhoto,
            content: payload.content,
            duration: payload.post.duration,
            tripDate: payload.post.tripDate,
            map: payload.post.map
        });

        await router.push({path: '/admin'});
    },

    async getFourArticles(context) {
        if (context.state.articles) {
            return;
        }
        const posts = await HTTP.get('articles?skip=0&limit=4');
        await context.commit('setPosts', {
            articles: posts.data.data.articles
        });
    },

    async getArticlesByCategory(context, payload) {
        const articles = await HTTP.get(`articles?category=${payload.category}`);
        await context.commit('setArticle', {
            articles: articles.data.data.articles
        });
    }
}
