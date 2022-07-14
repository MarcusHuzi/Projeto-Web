
import { createStore } from 'vuex'


const store = createStore({
    state: { 
        user_authenticated: false,
        isAdm: false
    },
    mutations: { 
        logout(state) {
            state.isAdm = false;
            state.user_authenticated = false;
        },

        login(state, obj) {
            state.isAdmin = obj.isAdm;
            state.user_authenticated = true;
        }
    },
    actions: { 
    },
    getters: {
       
    },
    modules: {

    }
})

export default store