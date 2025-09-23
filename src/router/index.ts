import CategoriesView from "@/views/CategoriesView.vue"
import ContactsView from "@/views/ContactsView.vue"
import GenreBooksView from "@/views/GenreBooksView.vue"
import LandingPageView from "@/views/LandingPageView.vue"
import LoginView from "@/views/LoginView.vue"
import MyCollectionView from "@/views/MyCollectionView.vue"
import PaymentPlansView from "@/views/PaymentPlansView.vue"
import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue"
import TermsConditionsView from "@/views/TermsConditionsView.vue"

import { createRouter as createVueRouter, createWebHistory } from "vue-router"

import type { RouteLocationNamedRaw } from "vue-router"

export const rootRoute: RouteLocationNamedRaw = { name: "landing" }

const createRouter = () => {
    const router = createVueRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path: "/",
                name: "landing",
                component: LandingPageView,
            },
            {
                path: "/categories",
                name: "categories",
                component: CategoriesView,
            },
            {
                path: "/genre/:name",
                name: "genre-books",
                component: GenreBooksView,
                meta: { requiresAuth: true },
            },
            {
                path: "/collection",
                name: "collection",
                component: MyCollectionView,
                meta: { requiresAuth: true },
            },
            {
                path: "/plans",
                name: "plans",
                component: PaymentPlansView,
            },
            {
                path: "/login",
                name: "login",
                component: LoginView,
            },
            {
                path: "/contacts",
                name: "contacts",
                component: ContactsView,
            },
            {
                path: "/privacy-policy",
                name: "privacy-policy",
                component: PrivacyPolicyView,
            },
            {
                path: "/terms-conditions",
                name: "terms-conditions",
                component: TermsConditionsView,
            },
        ],
    })

    router.beforeEach((to, _from, next) => {
        const loggedIn = sessionStorage.getItem("loggedIn") === "true"
        // use matched.some to handle nested routes safely
        const requiresAuth = to.matched.some(record => (record.meta as any)?.requiresAuth === true)
        if (requiresAuth && !loggedIn) {
            next({ name: "login" })
        } else {
            next()
        }
    })

    return router
}

export default createRouter