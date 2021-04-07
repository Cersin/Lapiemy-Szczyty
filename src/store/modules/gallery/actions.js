import {HTTP} from '@/http-common';

export default {
    async getPhotos(context, payload) {
        if (context.state.images.length !== 0 && !payload.paginate) {
            return;
        }

        const images = await HTTP.get(`image?skip=${payload.skip}&limit=12`);

        if (images.data.results === 0 || images.data.results < 12) {
            context.commit('setPaginate', {
                canPaginate: false
            })
        } else {
            context.commit('setPaginate', {
                canPaginate: true
            })
        }
        context.commit('setImages', {
            images: images.data.data.images
        })
    }

}
