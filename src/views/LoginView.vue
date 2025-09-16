<template>
  <div class="login-page">
    <form class="login-box" @submit.prevent="fakeLogin">
      <h2>Sign In</h2>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
      <p class="note">This is a demo — no real login.</p>
    </form>
  </div>
</template>

<script setup>
function fakeLogin() {
  alert("Pretend you’re logged in ✨");
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ffe4e6, #fecdd3, #fda4af);
  padding: 1rem;
}

.login-box {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 350px;
  text-align: center;
}

h2 {
  margin-bottom: 1.5rem;
  color: #be123c;
}

input {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #fbcfe8;
  border-radius: 8px;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 0.8rem;
  background: #e11d48;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #be123c;
}

.note {
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #6b0210;
}

/* Responsive */
@media (max-width: 500px) {
  .login-box {
    padding: 1.5rem;
  }
}
</style>
