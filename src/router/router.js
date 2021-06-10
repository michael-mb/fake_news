import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home";
import Contact from "../views/Contact";

const routes = [
    {
        name: "home",
        path: "/",
        component: Home,
        props: true
    },
    {
        name: "contact",
        path: "/contact",
        component: Contact,
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;