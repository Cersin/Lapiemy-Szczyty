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
            mainPhoto: payload.post.mainPhoto,
            content: payload.content,
            duration: payload.post.duration,
            tripDate: payload.post.tripDate
        });

        await router.push({path: '/admin'});
    }
}
