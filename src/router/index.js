import { createRouter, createWebHistory } from "vue-router";
import CartView from "../views/CartView.vue";
import Home from "../views/Home.vue"

const routes = [
    {
        path: "/cart",
        name: "Cart",
        component: CartView
    },
    {
        path: "/",
        name: "Home",
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;