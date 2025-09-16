import CategoriesView from "@/views/CategoriesView.vue"
import GenreBooksView from "@/views/GenreBooksView.vue"
import LandingPageView from "@/views/LandingPageView.vue"
import LoginView from "@/views/LoginView.vue"
import MyCollectionView from "@/views/MyCollectionView.vue"
import PaymentPlansView from "@/views/PaymentPlansView.vue"

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
            },
            {
                path: "/collection",
                name: "collection",
                component: MyCollectionView,
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
        ],
    })

    return router
}

export default createRouter