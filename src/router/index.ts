import CancelSubscriptionView from "@/views/CancelSubscriptionView.vue"
import CategoriesView from "@/views/CategoriesView.vue"
import ContactsView from "@/views/ContactsView.vue"
import GenreBooksView from "@/views/GenreBooksView.vue"
import LandingPageView from "@/views/LandingPageView.vue"
import LoginView from "@/views/LoginView.vue"
import MyCollectionView from "@/views/MyCollectionView.vue"
import PaymentPlansView from "@/views/PaymentPlansView.vue"
import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue"
import RegisterView from "@/views/RegisterView.vue"
import TermsConditionsView from "@/views/TermsConditionsView.vue"

import { createRouter as createVueRouter, createWebHistory } from "vue-router"

import type { RouteLocationNamedRaw } from "vue-router"

export const rootRoute: RouteLocationNamedRaw = { name: "home" }

const createRouter = () => {
    const router = createVueRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path: "/",
                name: "home",
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
                meta: { requiresGuest: true },
            },
            {
                path: "/register",
                name: "register",
                component: RegisterView,
                meta: { requiresGuest: true },
            },
            {
                path: "/contacts",
                name: "contacts",
                component: ContactsView,
            },
            {
                path: "/cancel-subscription",
                name: "cancel-subscription",
                component: CancelSubscriptionView,
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

    // Global route guard
    router.beforeEach(async (to, _from, next) => {
        const requiresAuth = to.matched.some(record => (record.meta as any)?.requiresAuth === true)
        const requiresGuest = to.matched.some(record => (record.meta as any)?.requiresGuest === true)

        let loggedIn = false

        try {
            const res = await fetch("https://back.amore-chapters.com/auth/me", {
                credentials: "include"
            })
            loggedIn = res.ok
        } catch (err) {
            loggedIn = false
        }

        if (requiresAuth && !loggedIn) {
            // Not logged in → redirect to login
            next({ name: "login" })
        } else if (requiresGuest && loggedIn) {
            // Logged in → redirect to home
            next({ name: "home" })
        } else {
            next()
        }
    })

    return router
}

export default createRouter
