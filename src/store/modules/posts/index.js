import mutations from "@/store/modules/posts/mutations";
import actions from "@/store/modules/posts/actions";
import getters from "@/store/modules/posts/getters";

export default {
    namespaced: true,
    state() {
        return {

        }
    },
    mutations: mutations,
    actions: actions,
    getters: getters
}
