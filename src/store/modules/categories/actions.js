import {HTTP} from '@/http-common';

export default {
    async getCategories(context) {
        const category = await HTTP.get('category');
        await context.commit('setCategories', {
            categories: category.data.data.categories
        });
    }
}
