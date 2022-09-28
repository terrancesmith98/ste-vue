require('./bootstrap');

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'
import axios from "axios";

import Index from './Index.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import SupportStatements from './components/SupportStatements.vue'

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

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
          teamMembers: [],
          supportStatements: []
      }
    },
    mutations: {
        loadTeamMembers(state, payload) {
            state.teamMembers = payload;
        },
        loadSupportStatements(state, payload) {
            state.supportStatements = payload;
        }
    },
    actions: {
        loadTeamMembers({ commit }) {
            axios.get(`/api/team-members`).then(response => {
                commit('loadTeamMembers', (response.data));
            });

        },
        loadSupportStatements({ commit }) {
            axios.get(`/api/support-statements`).then(response => {
                commit('loadSupportStatements', (response.data));
            });
        }
    }
})

// ----------------------------


const router = createRouter({
    //Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

const app = createApp({
    created() {
        this.$store.dispatch("loadTeamMembers");
        this.$store.dispatch("loadSupportStatements");
    },

});

app.component('index', Index)
app.component('home', Home)
app.component('carousel', Carousel)
app.component('slide', Slide)
app.component('support-statements', SupportStatements)
app.component('navigation', Navigation)
app.component('pagination', Pagination)
app.use(router)
app.use(store)

app.mount('#app');

