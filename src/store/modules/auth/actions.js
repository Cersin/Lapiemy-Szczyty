import {HTTP} from '@/http-common';
import router from '../../../router/index';

export default {
    async login(context, payload) {
        return context.dispatch('auth', {
            ...payload
        })
    },
    async autoLogin(context) {
        if (!localStorage.getItem("token")) {
            return
        }
        const response = await HTTP.post('admin/verify');
        if (!response.data.logged) {
            await localStorage.removeItem("token");
            context.commit('setLoggedIn', {
                isLogged: false
            });
            throw new Error(response.data.message || 'Błąd autentykacji, sprawdź dane logowania');
        }
        await context.commit('setLoggedIn', {
            isLogged: true
        })
    },
    async auth(context, payload) {
        const response = await HTTP.post('/admin/login', {
            name: payload.name,
            password: payload.password
        });
        if (response.data.token) {
            await localStorage.setItem("token", response.data.token);
        } else {
            await localStorage.removeItem("token");
        }
        if (response.data.status !== 'success') {
            context.commit('setLoggedIn', {
                isLogged: false
            });
            const error = new Error(response.data.message || 'Błąd autentykacji, sprawdź dane logowania');
            throw error;
        } else {
            await context.commit('setLoggedIn', {
                isLogged: true
            });
            await router.push({path: '/admin'});
        }
    }
}
