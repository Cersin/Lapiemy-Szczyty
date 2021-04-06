export default {
    setPosts(state, payload) {
        state.articles = payload.articles;
    },
    setPostsPaginate(state, payload) {
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
        state.limit = payload.limit;
    },
    canPaginate(state, payload) {
        state.canPaginate = payload.canPaginate
    }
}
