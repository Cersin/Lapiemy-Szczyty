export default {
    getPosts(state) {
        return state.articles;
    },
    getCategoryPosts(state) {
        return state.articlesCategory;
    },
    canPaginate(state) {
        return state.canPaginate
    }
}
