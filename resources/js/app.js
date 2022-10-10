require('./bootstrap');

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'
import axios from "axios";

import Index from './Index.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import About from './components/About.vue'
import SupportStatements from './components/SupportStatements.vue'
import OurTeam from './components/OurTeam.vue'
import HeroSpotlights from './components/HeroSpotlights.vue'
import Faqs from './components/Faqs.vue'
import Donate from './components/Donate.vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import vScroll from './directives/vScroll'

// ROUTES ----------------------
// -----------------------------
const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/about',
        component: About,
        name: 'about'
    },
    {
        path: '/contact',
        component: Contact,
        name: 'contact'
    },
];

// -----------------------------

// Create a new store instance.
const store = createStore({
    state () {
      return {
          teamMembers: [],
          supportStatements: [],
          macMembers: [],
          heroSpotlights: [],
          faqs: []
      }
    },
    mutations: {
        loadTeamMembers(state, payload) {
            state.teamMembers = payload;
        },
        loadSupportStatements(state, payload) {
            state.supportStatements = payload;
        },
        loadMacMembers(state, payload) {
            state.macMembers = payload;
        },
        loadHeroSpotlights(state, payload) {
            state.heroSpotlights = payload;
        },
        loadFaqs(state, payload) {
            state.faqs = payload;
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
        },
        loadMacMembers({ commit }) {
            axios.get(`/api/mac-members`).then(response => {
                commit('loadMacMembers', (response.data));
            });
        },
        loadHeroSpotlights({ commit }) {
            axios.get(`/api/hero-spotlights`).then(response => {
                commit('loadHeroSpotlights', (response.data));
            });
        },
        loadFaqs({ commit }) {
            axios.get(`/api/faqs`).then(response => {
                commit('loadFaqs', (response.data));
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
        this.$store.dispatch("loadMacMembers");
        this.$store.dispatch("loadHeroSpotlights");
        this.$store.dispatch("loadFaqs");
    },

});

app.component('index', Index)
app.component('home', Home)
app.component('carousel', Carousel)
app.component('slide', Slide)
app.component('support-statements', SupportStatements)
app.component('navigation', Navigation)
app.component('pagination', Pagination)
app.component('team-members', OurTeam)
app.component('hero-spotlights', HeroSpotlights)
app.component('faqs', Faqs)
app.component('donate', Donate)
app.directive('scroll', vScroll)
app.use(router)
app.use(store)

app.mount('#app');

