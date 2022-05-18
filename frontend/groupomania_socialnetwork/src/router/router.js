import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/HomeView";
import Login from "../views/LoginView";
import Register from "../views/RegisterView";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');


    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router;