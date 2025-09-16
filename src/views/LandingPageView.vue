<template>
  <div class="landing-page">
    <section class="hero">
      <div class="hero-content">
        <h1>Escape Into Romance ❤️</h1>
        <p>
          Discover enchanting love stories, timeless classics, and modern tales of passion. 
          Your next favorite romance is waiting to sweep you off your feet.
        </p>
        <div class="actions">
          <RouterLink to="/plans" class="btn primary">Start Your Journey</RouterLink>
          <RouterLink to="/collection" class="btn secondary">Explore Collection</RouterLink>
        </div>
      </div>
      <div class="hero-image">
        <div class="floating-books">
          <div class="book book-1">💕</div>
          <div class="book book-2">📚</div>
          <div class="book book-3">💌</div>
          <div class="book book-4">🌹</div>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2>Why Choose Amore Chapters?</h2>
        <div class="features-grid">
          <div class="feature">
            <div class="feature-icon">📖</div>
            <h3>Vast Collection</h3>
            <p>Access thousands of romance novels from classic literature to modern bestsellers</p>
          </div>
          <div class="feature">
            <div class="feature-icon">🎯</div>
            <h3>Personalized Picks</h3>
            <p>Get AI-powered recommendations based on your reading preferences and mood</p>
          </div>
          <div class="feature">
            <div class="feature-icon">📱</div>
            <h3>Read Anywhere</h3>
            <p>Enjoy your favorite stories on any device with offline reading capabilities</p>
          </div>
          <div class="feature">
            <div class="feature-icon">👥</div>
            <h3>Book Community</h3>
            <p>Connect with fellow romance readers and share your favorite love stories</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <h2>Ready to Fall in Love with Reading Again?</h2>
        <p>Join thousands of readers who've found their perfect literary match</p>
        <RouterLink to="/plans" class="btn primary large">Start Free Trial</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.landing-page {
  background: linear-gradient(135deg, #ffe4e6, #fecdd3, #fda4af);
}

.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 4rem;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero h1 {
  font-size: 3.5rem;
  color: #be123c;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero p {
  font-size: 1.2rem;
  color: #9f1239;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn.primary {
  background: #e11d48;
  color: white;
}

.btn.primary:hover {
  background: #be123c;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(225, 29, 72, 0.4);
}

.btn.secondary {
  background: white;
  color: #e11d48;
  border: 2px solid #e11d48;
}

.btn.secondary:hover {
  background: #fff0f3;
  transform: translateY(-2px);
}

.btn.large {
  padding: 1.2rem 2.5rem;
  font-size: 1.1rem;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.floating-books {
  position: relative;
  width: 300px;
  height: 300px;
}

.book {
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: float 6s ease-in-out infinite;
}

.book-1 {
  top: 20px;
  left: 50px;
  animation-delay: 0s;
}

.book-2 {
  top: 80px;
  right: 30px;
  animation-delay: 1.5s;
}

.book-3 {
  bottom: 80px;
  left: 20px;
  animation-delay: 3s;
}

.book-4 {
  bottom: 20px;
  right: 60px;
  animation-delay: 4.5s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.features {
  padding: 4rem 0;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #be123c;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature {
  text-align: center;
  padding: 2rem;
  border-radius: 16px;
  background: #fff0f3;
  transition: transform 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature h3 {
  color: #be123c;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.feature p {
  color: #6b0210;
  line-height: 1.5;
}

.cta {
  padding: 4rem 0;
  background: linear-gradient(135deg, #be123c, #e11d48);
  color: white;
  text-align: center;
}

.cta h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    min-height: 60vh;
    gap: 2rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero p {
    font-size: 1.1rem;
  }

  .floating-books {
    width: 200px;
    height: 200px;
  }

  .book {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }

  .features h2 {
    font-size: 2rem;
  }

  .cta h2 {
    font-size: 2rem;
  }

  .actions {
    justify-content: center;
  }
}
</style>