// src/stores/auth.ts
import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useAuthStore = defineStore("auth", () => {
    const _loggedIn = ref(false)
    const loggedIn = computed(() => _loggedIn.value)

    const checkLogin = async () => {
        try {
            const res = await fetch("https://back.amore-chapters.com/auth/me", {
                credentials: "include",
            })
            _loggedIn.value = res.ok
        } catch {
            _loggedIn.value = false
        }
    }

    const logout = async () => {
        await fetch("https://back.amore-chapters.com/auth/logout", {
            method: "POST",
            credentials: "include",
        })
        _loggedIn.value = false
    }

    return { loggedIn, checkLogin, logout }
})
