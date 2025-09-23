<template>
  <div class="login-page">
    <div class="login-card">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="password" required />
        </div>
        <button class="btn" type="submit">Login</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const error = ref("")
const router = useRouter()

const login = () => {
  if (email.value === "lebowski@gmail.com" && password.value === "123") {
    sessionStorage.setItem("loggedIn", "true")

    // 👇 notify other components (like Header) immediately
    window.dispatchEvent(new Event("storage"))

    router.push("/")
  } else {
    error.value = "Invalid credentials"
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
</style>
