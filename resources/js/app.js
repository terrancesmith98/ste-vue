require('./bootstrap');

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import Index from './Index.vue'
import Home from './components/Home.vue'


const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    }
];

const router = createRouter({
    //Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = createApp({});

app.component('index', Index)
app.component('home', Home)
app.use(router)

app.mount('#app');

