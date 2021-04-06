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
        let urlNew = `articles?skip=${context.state.skip}&limit=${context.state.limit}
                ${payload.country}
                ${payload.mountains}
                ${payload.distance}`;
        // sprawdza czy url nie jest takie samo jak wczesniej
        if (context.state.url === urlNew) {
            // sprawdza czy chcemy paginować
            if (payload.paginate) {
                await context.commit('paginate', {
                    skip: context.state.skip + payload.add,
                    limit: context.state.limit + payload.add
                });
                const urlPaginate = `articles?skip=${context.state.skip}&limit=${context.state.limit}
                ${payload.country}
                ${payload.mountains}
                ${payload.distance}`;
                const posts = await HTTP
                    .get(urlPaginate);
                if (posts.data.results >= 8) {
                    context.commit('canPaginate', {
                        canPaginate: true
                    });
                } else {
                    context.commit('canPaginate', {
                        canPaginate: false
                    });
                }
                await context.commit('setPostsPaginate', {
                    articles: posts.data.data.articles
                });
                if (context.state.skip > 0) {
                    context.commit('canPaginateBack', {
                        canPaginateBack: true
                    });
                } else {
                    context.commit('canPaginateBack', {
                        canPaginateBack: false
                    });
                }
                context.commit('setUrl', {
                    url: urlPaginate
                });
            }
        } else {
            await context.commit('paginate', {
                skip: 0,
                limit: 8
            });
            urlNew = `articles?skip=${context.state.skip}&limit=${context.state.limit}
                ${payload.country}
                ${payload.mountains}
                ${payload.distance}`;
            await context.commit('setUrl', {
                url: urlNew
            });
            const posts = await HTTP
                .get(urlNew);
            if (posts.data.results >= 8) {
                context.commit('canPaginate', {
                    canPaginate: true
                });
            } else {
                context.commit('canPaginate', {
                    canPaginate: false
                });
            }
            if (context.state.skip > 0) {
                context.commit('canPaginateBack', {
                    canPaginateBack: true
                });
            } else {
                context.commit('canPaginateBack', {
                    canPaginateBack: false
                });
            }
            await context.commit('setPosts', {
                articles: posts.data.data.articles
            });
        }
    }
}
