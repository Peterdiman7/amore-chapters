<template>
    <div class="register-page">
        <div class="register-card">
            <h1>Register</h1>
            <form @submit.prevent="register">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" v-model="username" required />
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" v-model="email" required />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" v-model="password" required />
                </div>
                <button class="btn" type="submit">Register</button>
            </form>
            <p v-if="success" class="success">{{ success }}</p>
            <p v-if="error" class="error">{{ error }}</p>

            <!-- Login link -->
            <p class="login-link">
                Already have an account?
                <router-link to="/login">Login here</router-link>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useAuthStore } from "@/stores/auth"

const username = ref("")
const email = ref("")
const password = ref("")
const error = ref("")
const success = ref("")
const router = useRouter()
const authStore = useAuthStore()

const register = async () => {
    error.value = ""
    success.value = ""

    try {
        const response = await fetch("https://back.amore-chapters.com/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include", // important if backend sets cookies
            body: JSON.stringify({
                username: username.value,
                email: email.value,
                password: password.value
            })
        })

        const data = await response.json()

        if (!response.ok) {
            error.value = data.error || "Registration failed"
            return
        }

        success.value = data.message || "Registered successfully!"

        // If your backend automatically logs in after registration, update the auth store
        // Otherwise, just redirect to login

        // Option 1: If backend auto-logs in after registration
        // await authStore.checkLogin()
        // router.push("/")

        // Option 2: Redirect to login page (current behavior)
        setTimeout(() => {
            router.push("/login")
        }, 1500)
    } catch (err) {
        error.value = "Network error"
    }
}
</script>

<style scoped>
.register-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f9fafb;
}

.register-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: var(--shadow-lg);
    width: 100%;
    max-width: 400px;
    text-align: center;
}

.form-group {
    margin-bottom: 1.2rem;
    text-align: left;
}

input {
    width: 100%;
    padding: 0.8rem;
    margin-top: 0.4rem;
    border-radius: 8px;
    border: 1px solid #ccc;
}

.btn {
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 8px;
    background-color: #966AEC;
    color: white;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
}

.btn:hover {
    background-color: #9651EC;
}

.success {
    color: green;
    margin-top: 1rem;
}

.error {
    color: red;
    margin-top: 1rem;
}

.login-link {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #555;
    text-align: center;
}

.login-link a {
    color: #966AEC;
    font-weight: bold;
    text-decoration: none;
}

.login-link a:hover {
    text-decoration: underline;
}
</style>
