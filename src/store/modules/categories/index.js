import mutations from "@/store/modules/categories/mutations";
import actions from "@/store/modules/categories/actions";
import getters from "@/store/modules/categories/getters";

export default {
    namespaced: true,
    state() {
        return {
            categories: null
        }
    },
    mutations: mutations,
    actions: actions,
    getters: getters
}
