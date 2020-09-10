import api from '../../api/imgur';
import qs from 'qs';
//example imgur login response
//http://localhost:8080/oauth2/callback#access_token=e355fe58e2acf5e86758e17e08a29e0a076e43ec&expires_in=315360000&token_type=bearer&refresh_token=c1d68b5256447d5f32f90ca17272a4f562fbced6&account_username=Yoduh88&account_id=33329788

const state = {
    token: window.localStorage.getItem('imgur_token')
};

const getters = {
    isLoggedIn: state => !!state.token
};

const actions = {
    login: () => {
        api.login();
    },

    finalizeLogin: ({ commit }, hash) => {
        const query = qs.parse(hash.replace('#', ''));
        commit('setToken', query.access_token);
        window.localStorage.setItem('imgur_token', query.access_token);
    },

    logout: ({ commit }) => { 
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token');
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};