export default {
    setImages(state, payload) {
        payload.images.forEach((el) => state.images.push(`http://localhost:3001${el.url}`));
    }
}