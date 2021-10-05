export default {
    setImages(state, payload) {
        payload.images.forEach((el) => state.images.push(`https://www.lapiemyszczyty.pl${el.url}`));
    },
    setPaginate(state, payload) {
        state.canPaginate = payload.canPaginate
    }
}
