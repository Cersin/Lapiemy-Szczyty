export default {
    setPosts(state, payload) {
        state.articles = payload.articles
    },
    setArticle(state, payload) {
        state.articlesCategory = payload.articles
    }
}
