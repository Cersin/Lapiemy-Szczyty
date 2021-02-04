import mutations from "@/store/modules/categories/mutations";
import actions from "@/store/modules/categories/actions";
import getters from "@/store/modules/categories/getters";

export default {
    namespaced: true,
    state() {
        return {
            categories: [
                { name: 'Tatry', photo: 'ok'},
                { name: 'Mała Fatra', photo: 'ok2'},
                { name: 'Beskid Śląski', photo: 'ok'}
            ]
        }
    },
    mutations: mutations,
    actions: actions,
    getters: getters
}
