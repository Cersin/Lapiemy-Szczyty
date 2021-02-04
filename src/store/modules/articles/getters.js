export default {
    getPosts(state) {
        return state.articles;
    },
    getCategoryPosts: (state) => (category) =>  {
        return state.articles.filter((art) => art.category === category);
    }
}
