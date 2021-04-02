import {HTTP} from '@/http-common';

export default {
    async getCategories(context) {
        if (context.state.categories) {
            return;
        }
        const category = await HTTP.get('category');
        await context.commit('setCategories', {
            categories: category.data.data.categories
        });
    }
}
