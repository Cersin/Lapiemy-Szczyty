import mutations from "@/store/modules/auth/mutations";
import actions from "@/store/modules/auth/actions";
import getters from "@/store/modules/auth/getters";

export default {
    state() {
        return {
            isLogged: null
        }
    },
    mutations: mutations,
    actions: actions,
    getters: getters
}
