import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CountryDetails from "../views/CountryDetails.vue";

const routes = [{
        path: '/rest-countries-api-with-color-theme-switcher-master',
        name: 'Home',
        component: Home
    },
    {
        path: '/rest-countries-api-with-color-theme-switcher-master/country/:id',
        name: 'CountryDetails',
        component: CountryDetails
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router