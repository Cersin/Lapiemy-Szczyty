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

    async getArticles(context, payload) {
        // sprawdza czy artykuly są wczytywane pierwszy raz albo czy są filtrowane
        if (context.state.articles && !payload.change) {
            return;
        }
        if (!payload.change) {
            const urlNew = `articles?skip=${payload.skip}&limit=${payload.limit}`;
            const posts = await HTTP
                .get(urlNew);
            await context.commit('setPosts', {
                articles: posts.data.data.articles
            });

        } else {
            const urlNew = `articles?skip=${payload.skip}&limit=${payload.limit}
                ${payload.country}
                ${payload.mountains}
                ${payload.distance}`;
            // sprawdza czy url nie jest takie samo jak wczesniej
            if (context.state.url === urlNew) {
                return;
            } else {
                context.commit('setUrl', {
                    url: urlNew
                });
            }
            const posts = await HTTP
                .get(urlNew);
            await context.commit('setPosts', {
                articles: posts.data.data.articles
            });
        }
    },

    async getArticlesByCategory(context, payload) {
        const articles = await HTTP.get(`articles?category=${payload.category}`);
        await context.commit('setArticle', {
            articles: articles.data.data.articles
        });
    }
}
