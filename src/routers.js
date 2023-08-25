import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/Login.vue"
import MasterPage from "./components/MasterPage.vue"
import SignUp from "./components/SignUp.vue";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";
const routes = [
    {
        name: "SignUp",
        component: SignUp,
        path: "/",
    },
    {
        name: "LoginForm",
        component: Login,
        path: "/login",
    },
    {
        name: "MasterPage",
        component: MasterPage,
        path: "/admin",
    },
    {
        name: "AddData",
        component: Add,
        path: "/add",
    },
    {
        name: "UpdateData",
        component: Update,
        path: "/update/:id",
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;