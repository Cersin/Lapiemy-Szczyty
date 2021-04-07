import {HTTP} from '@/http-common';

export default {
    async getPhotos(context, payload) {
        if (context.state.images.length !== 0 && !payload.paginate) {
            return;
        }
        const images = await HTTP.get(`image?skip=${payload.skip}&limit=12`);
        context.commit('setImages', {
            images: images.data.data.images
        })
    }

}
