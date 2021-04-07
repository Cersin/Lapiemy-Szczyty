import mutations from "@/store/modules/gallery/mutations";
import actions from "@/store/modules/gallery/actions";
import getters from "@/store/modules/gallery/getters";

export default {
    namespaced: true,
    state() {
        return {
            images: [],
            canPaginate: false
        }
    },
    mutations: mutations,
    actions: actions,
    getters: getters
}
