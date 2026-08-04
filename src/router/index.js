import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactsView from "../views/ContactsView.vue";
import UserProfile from "../views/UserProfile.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
    { path: "/", name: "home", component: HomeView },
    { path: "/about", name: "about", component: AboutView },
    { path: "/contacts", name: "contacts", component: ContactsView },
    { path: "/users/:id", name: "user", component: UserProfile },
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
