export default {
    getPosts(state) {
        return state.articles;
    },
    getCategoryPosts(state) {
        return state.articlesCategory;
    },
    canPaginate(state) {
        return state.canPaginate
    },
    canPaginateBack(state) {
        return state.canPaginateBack
    },
    statistic(state) {
        return state.statistic
    }
}
