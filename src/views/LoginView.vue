<template>
  <div class="login-page">
    <div class="login-card">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label>Username</label>
          <input type="text" v-model="username" required />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="password" required />
        </div>
        <button style="background-color: #966AEC;" class="btn" type="submit">Login</button>
      </form>

      <!-- Error and success messages -->
      <p v-if="error" class="error">{{ error }}</p>
      <p v-if="success" class="success">{{ success }}</p>

      <!-- Registration link -->
      <p class="register-link">
        No account?
        <router-link to="/register">Register here</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useAuthStore } from "@/stores/auth"

const username = ref("")
const password = ref("")
const error = ref("")
const success = ref("")
const router = useRouter()
const authStore = useAuthStore()

const login = async () => {
  error.value = ""
  success.value = ""

  try {
    const response = await fetch("https://back.amore-chapters.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // important to send/receive cookies
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    })

    const data = await response.json()

    if (!response.ok) {
      error.value = data.error || "Login failed"
      return
    }

    success.value = data.message || "Login successful"

    await authStore.checkLogin()

    setTimeout(() => {
      router.push("/")
    }, 1000)
  } catch (err) {
    error.value = "Network error"
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f9fafb;
}

.login-card {
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
  background-color: #14b8a6;
  color: white;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
}

.btn:hover {
  background-color: #0f766e;
}

.error {
  color: red;
  margin-top: 1rem;
}

.success {
  color: green;
  margin-top: 1rem;
}

.register-link {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #555;
  text-align: center;
}

.register-link a {
  color: #966AEC;
  font-weight: bold;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
