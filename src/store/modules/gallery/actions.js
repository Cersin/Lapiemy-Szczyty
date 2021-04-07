import {HTTP} from '@/http-common';

export default {
    async getPhotos(context) {
        if (context.state.images.length !== 0) {
            return;
        }
        const images = await HTTP.get('image');
        context.commit('setImages', {
            images: images.data.data.images
        })
    }

}
