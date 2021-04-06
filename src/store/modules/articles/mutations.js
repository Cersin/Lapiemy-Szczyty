export default {
    setPosts(state, payload) {
        state.articles = payload.articles;
    },
    setArticle(state, payload) {
        state.articlesCategory = payload.articles
    },
    setUrl(state, payload) {
        state.url = payload.url;
    },
    paginate(state, payload) {
        state.skip = payload.skip;
    },
    canPaginate(state, payload) {
        state.canPaginate = payload.canPaginate
    },
    canPaginateBack(state, payload) {
        state.canPaginateBack = payload.canPaginateBack
    },
    setStats(state, payload) {
        state.statistic = payload.stats[0]
    }
}
