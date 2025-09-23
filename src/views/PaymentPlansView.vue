<template>
  <div class="plans-page">
    <div class="hero-section">
      <h1>Choose Your Romance Plan</h1>
      <p>Unlock unlimited access to your favorite love stories</p>
    </div>

    <div class="plans-container">
      <div class="plans-grid">
        <div v-for="(plan, index) in plans" :key="plan.id" class="plan-card" :class="{ featured: plan.featured }">
          <div class="plan-header">
            <h3>{{ plan.name }}</h3>
            <div class="price">
              <span class="currency">$</span>
              <span class="amount">{{ plan.price }}</span>
              <span class="period">/{{ plan.period }}</span>
            </div>
            <p class="description">{{ plan.description }}</p>
          </div>

          <ul class="features">
            <li v-for="feature in plan.features" :key="feature" class="feature">
              <span class="checkmark">✓</span>
              {{ feature }}
            </li>
          </ul>

          <button class="plan-btn" :class="{ featured: plan.featured }" @click="selectPlan(plan)">
            {{ plan.buttonText }}
          </button>

          <div v-if="plan.featured" class="featured-badge">
            Most Popular
          </div>
        </div>
      </div>
    </div>

    <div class="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-grid">
        <div class="faq-item">
          <h4>Can I cancel anytime?</h4>
          <p>Yes! You can cancel your subscription at any time with no cancellation fees.</p>
        </div>
        <div class="faq-item">
          <h4>What payment methods do you accept?</h4>
          <p>We accept all major credit cards, PayPal, and digital wallets.</p>
        </div>
        <div class="faq-item">
          <h4>Is there a free trial?</h4>
          <p>Yes! All plans come with a 7-day free trial to explore our collection.</p>
        </div>
        <div class="faq-item">
          <h4>Can I switch plans later?</h4>
          <p>Absolutely! You can upgrade or downgrade your plan at any time.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const plans = [
  {
    id: 1,
    name: "Casual Reader",
    price: 1.99,
    period: "month",
    description: "Perfect for occasional readers",
    buttonText: "Start Reading",
    featured: false,
    features: [
      "Access to 5 books per month",
      "Basic recommendations",
      "Standard support"
    ]
  },
  {
    id: 2,
    name: "Romantic Explorer",
    price: 4.99,
    period: "month",
    description: "Great for regular romance readers",
    buttonText: "Start Free Trial",
    featured: false,
    features: [
      "Access to 15 books per month",
      "Personalized recommendations",
      "Offline reading",
      "Priority support"
    ]
  },
  {
    id: 3,
    name: "Love Enthusiast",
    price: 9.99,
    period: "month",
    description: "Ideal for romance lovers wanting more",
    buttonText: "Start Free Trial",
    featured: false,
    features: [
      "Access to 30 books per month",
      "AI-powered recommendations",
      "Offline reading",
      "Premium support",
      "Early access to new releases"
    ]
  },
  {
    id: 4,
    name: "Romance Addict",
    price: 19.99,
    period: "month",
    description: "The ultimate plan for true romance enthusiasts",
    buttonText: "Start Free Trial",
    featured: true,
    features: [
      "Unlimited book access",
      "AI-powered recommendations",
      "Offline reading",
      "Premium support",
      "Early access to new releases",
      "Exclusive author content",
      "Monthly book club access"
    ]
  },
  {
    id: 5,
    name: "Annual Lover",
    price: 199.99,
    period: "year",
    description: "Save big with our annual plan - 2 months free!",
    buttonText: "Save with Annual",
    featured: false,
    features: [
      "Everything in Romance Addict",
      "2 months free (save $40)",
      "Exclusive annual perks",
      "Priority customer support",
      "Special edition book covers",
      "Annual reader awards"
    ]
  }
]

function selectPlan(plan) {
  if (plan.price < 1) {
    alert(`Welcome to ${plan.name}! You're all set to start reading! ✨`)
  } else {
    alert(`Starting your subscription for ${plan.name} at $${plan.price}/${plan.period}! 💕`)
  }
}
</script>


<style scoped>
.plans-page {
  min-height: 100vh;
  padding: 2rem 0;
}

.hero-section {
  text-align: center;
  margin-bottom: 4rem;
  padding: 0 2rem;
}

.hero-section h1 {
  font-size: 3rem;
  color: #be123c;
  margin-bottom: 1rem;
}

.hero-section p {
  font-size: 1.2rem;
  color: #9f1239;
}

.plans-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}


.plan-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* push the button to bottom */
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  border: 2px solid transparent;
}

.plan-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.plan-card.featured {
  border-color: #e11d48;
  transform: scale(1.05);
}

.plan-card.featured:hover {
  transform: scale(1.05) translateY(-5px);
}

.featured-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #e11d48;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
}

.plan-header {
  text-align: center;
  margin-bottom: 2rem;
}

.plan-header h3 {
  font-size: 1.5rem;
  color: #be123c;
  margin-bottom: 1rem;
}

.price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 1rem;
}

.currency {
  font-size: 1.2rem;
  color: #9f1239;
}

.amount {
  font-size: 2.5rem;
  font-weight: bold;
  color: #be123c;
}

.period {
  font-size: 1rem;
  color: #9f1239;
}

.description {
  color: #6b0210;
  font-size: 0.95rem;
}

.features {
  list-style: none;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  color: #4b0a15;
}

.checkmark {
  color: #16a34a;
  font-weight: bold;
  font-size: 1.1rem;
}

.plan-btn {
  margin-top: auto;
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #f3f4f6;
  color: #6b7280;
}

.plan-btn:hover {
  background: #e5e7eb;
  transform: translateY(-1px);
}

.plan-btn.featured {
  background: #e11d48;
  color: white;
}

.plan-btn.featured:hover {
  background: #be123c;
}

.faq-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.faq-section h2 {
  font-size: 2rem;
  color: #be123c;
  margin-bottom: 2rem;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.faq-item {
  background: #fff0f3;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: left;
}

.faq-item h4 {
  color: #be123c;
  margin-bottom: 0.5rem;
}

.faq-item p {
  color: #6b0210;
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }

  .plans-grid {
    grid-template-columns: 1fr;
  }

  .plan-card.featured {
    transform: none;
  }

  .plan-card.featured:hover {
    transform: translateY(-5px);
  }

  .faq-grid {
    grid-template-columns: 1fr;
  }
}
</style>