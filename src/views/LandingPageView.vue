<template>
  <div class="landing-page">
    <section class="hero">
      <h1>Escape Into Romance ❤️</h1>
      <p>
        Discover enchanting love stories, timeless classics, and modern tales of passion. 
        Your next favorite romance is waiting.
      </p>
      <div class="actions">
        <RouterLink to="/login" class="btn primary">Sign In</RouterLink>
        <RouterLink to="/collection" class="btn secondary">Explore Collection</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.landing-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffe4e6, #fecdd3, #fda4af);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.hero {
  text-align: center;
  max-width: 700px;
}

.hero h1 {
  font-size: 2.5rem;
  color: #be123c;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.1rem;
  color: #9f1239;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s, transform 0.2s;
}

.btn.primary {
  background: #e11d48;
  color: white;
}

.btn.primary:hover {
  background: #be123c;
  transform: scale(1.05);
}

.btn.secondary {
  background: white;
  color: #e11d48;
  border: 2px solid #e11d48;
}

.btn.secondary:hover {
  background: #fff0f3;
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 600px) {
  .hero h1 {
    font-size: 2rem;
  }
  .hero p {
    font-size: 1rem;
  }
}
</style>
