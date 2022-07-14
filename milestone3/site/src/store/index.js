
import { createStore } from 'vuex'


export const store = createStore({
    state: { 
        user_authenticated: false,
        is_admin: false
    },
    mutations: { 
        logout(state) {
            state.is_admin = false;
            state.user_authenticated = false;
            localStorage.removeItem('user_id');
        },

        login(state, obj) {
            state.is_admin = obj.is_admin;
            state.user_authenticated = true;
            localStorage.setItem('user_id', obj.id);
        }
    },
    actions: { 
    },
    getters: {
       
    },
    modules: {

    }
})