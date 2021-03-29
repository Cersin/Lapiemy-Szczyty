import mutations from "@/store/modules/articles/mutations";
import actions from "@/store/modules/articles/actions";
import getters from "@/store/modules/articles/getters";

export default {
    namespaced: true,
    state() {
        return {
            articles: null

        }
    },
    mutations: mutations,
    actions: actions,
    getters: getters
}
