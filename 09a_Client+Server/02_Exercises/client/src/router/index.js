/*
  Demo-00: Setting Up Vue Router for Vue to Use
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

//Defining the Routes (Slide-2)
export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/products',
        name: 'products',
        component: () =>
            import('../views/Products.vue')
    }, {
        path: '/cart',
        name: 'cart',
        component: () =>
            import('../components/Cart.vue')
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: () =>
            import('../views/Checkout.vue')
    },

    {
        path: '/newsletter',
        name: 'newsletter',
        component: () =>
            import('../views/Newsletter.vue'),
        /* Passing the Content */
        props: true
    }
]

//Setting up the Router Instance
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
