export default {
    setPosts(state, payload) {
        state.articles = payload.articles
    },
    setArticle(state, payload) {
        state.articlesCategory = payload.articles
    },
    setUrl(state, payload) {
        state.url = payload.url;
    }
}
