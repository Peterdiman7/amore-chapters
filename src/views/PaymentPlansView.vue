<template>
  <div class="plans-page">
    <section class="pricing-tables">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="section-heading">
              <h4 style="color: #966AEC !important;">Choose Your Perfect Reading Plan</h4>
              <img src="/assets/images/heading-line-dec.png" alt="divider" />
              <p>Find a plan that matches your passion for romance. Cancel anytime.</p>
            </div>
          </div>

          <!-- Pricing Cards -->
          <div v-for="plan in plans" :key="plan.id" class="col-lg-4">
            <div :class="['pricing-item', plan.featured ? 'pricing-item-pro' : 'pricing-item-regular']">
              <span class="price">${{ plan.price }}</span>
              <div class="icon">
                <img :src="plan.image" :alt="plan.name" />
                <h4>{{ plan.name }}</h4>
              </div>
              <ul>
                <li v-for="feature in plan.features" :key="feature">
                  {{ feature }}
                </li>
              </ul>
              <div class="border-button">
                <button @click="selectPlan(plan)">{{ plan.buttonText }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const plans = [
  {
    id: 1,
    name: "Casual Reader",
    price: 1.99,
    image: "/assets/images/slider-dec.webp",
    buttonText: "Choose This Plan",
    featured: false,
    features: [
      "5 Books per Month",
      "Basic Recommendations",
      "Standard Support",
      "Access on 1 Device"
    ]
  },
  {
    id: 2,
    name: "Love Enthusiast",
    price: 9.99,
    image: "/assets/images/slider-dec.webp",
    buttonText: "Choose This Plan",
    featured: true,
    features: [
      "30 Books per Month",
      "AI Recommendations",
      "Offline Reading",
      "Early Access to New Releases",
      "Priority Support"
    ]
  },
  {
    id: 3,
    name: "Romance Addict",
    price: 19.99,
    image: "/assets/images/pricing-table-01.png",
    buttonText: "Choose This Plan",
    featured: false,
    features: [
      "Unlimited Books",
      "AI Recommendations",
      "Offline Reading",
      "Premium Support",
      "Author Q&A Sessions",
      "Exclusive Early Access"
    ]
  },
  {
    id: 4,
    name: "Annual Lover",
    price: 199.99,
    image: "/assets/images/collection.png",
    buttonText: "Save with Annual Plan",
    featured: false,
    features: [
      "Everything in Romance Addict",
      "2 Months Free",
      "Exclusive Annual Perks",
      "Collector’s Covers",
      "Reader Awards Access"
    ]
  },
  {
    id: 5,
    name: "Lifetime Romantic",
    price: 499.99,
    image: "/assets/images/24_7.png",
    buttonText: "Go Lifetime",
    featured: false,
    features: [
      "Unlimited Lifetime Access",
      "All Future Features",
      "VIP Author Events",
      "Collector’s Signed Editions",
      "Lifetime Premium Support"
    ]
  }
]

function selectPlan(plan) {
  alert(`You're starting the ${plan.name} plan at $${plan.price}! 💖`)
}
</script>

<style scoped>
.pricing-tables {
  padding: 4rem 0;
}

.section-heading {
  text-align: center;
  margin-bottom: 3rem;
}

.section-heading h4 {
  font-size: 2rem;
  color: #be123c;
  margin-bottom: 0.5rem;
}

.section-heading p {
  color: #6b0210;
}

.section-heading img {
  margin: 1rem 0;
}

.pricing-item-regular,
.pricing-item-pro {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.pricing-item-regular:hover,
.pricing-item-pro:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.pricing-item-pro {
  border: 3px solid #966AEC;
}

.price {
  display: inline-block;
  font-size: 2rem;
  font-weight: bold;
  color: #be123c;
  margin-bottom: 0.5rem;
}

h4 {
  font-size: 1.4rem;
  color: #9f1239;
  margin-bottom: 1rem;
}

.icon img {
  width: 60px;
  margin-bottom: 1.5rem;
}

ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

ul li {
  color: #4b0a15;
  font-size: 0.95rem;
  margin-bottom: 0.4rem;
}

.border-button {
  margin-top: 1rem;
}

.border-button button {
  background: linear-gradient(135deg, #966AEC, #ffffff);
  color: #4b0a15;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.border-button button:hover {
  background: #966AEC;
  color: white;
}

/* Responsive */
@media (max-width: 768px) {

  .pricing-item-regular,
  .pricing-item-pro {
    margin-bottom: 1.5rem;
  }

  .section-heading h4 {
    font-size: 1.6rem;
  }
}
</style>
