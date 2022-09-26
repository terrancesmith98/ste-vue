require('./bootstrap');

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createStore } from 'vuex'
import axios from "axios";

import Index from './Index.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'

// ROUTES ----------------------
// -----------------------------
const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/contact',
        component: Contact,
        name: 'contact'
    }
];

// -----------------------------

// Create a new store instance.
const store = createStore({
    state () {
      return {
        teamMembers: []
      }
    },
    mutations: {
        loadTeamMembers(state, payload) {
            state.teamMembers = payload;
        },
    },
    actions: {
        loadTeamMembers({ commit}) {
            axios.get(`/api/team-members`).then(response => {
                commit('loadTeamMembers', (response.data));
            });

        }
    }
})

// ----------------------------


const router = createRouter({
    //Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = createApp({});

app.component('index', Index)
app.component('home', Home)
app.use(router)
app.use(store)

app.mount('#app');

