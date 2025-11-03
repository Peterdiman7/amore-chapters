<template>
    <div class="checkout-page">
        <div class="checkout-container">
            <router-link to="/" class="brand-logo">
                <img src="@/assets/images/amore-chapters-logo.png" alt="amore-chapters-logo" />
            </router-link>
            <h1 class="page-title">Complete Your Purchase</h1>

            <div class="checkout-grid">
                <!-- Left Side - Payment Form -->
                <div class="payment-section">
                    <h2>Payment Information</h2>

                    <form @submit.prevent="processPayment" class="payment-form">
                        <!-- Card Information -->
                        <div class="form-section">
                            <h3>Card Details</h3>

                            <div class="form-group">
                                <label for="cardName">Cardholder Name</label>
                                <input type="text" id="cardName" v-model="form.cardName" placeholder="John Doe"
                                    required />
                            </div>

                            <div class="form-group">
                                <label for="cardNumber">Card Number</label>
                                <input type="text" id="cardNumber" v-model="form.cardNumber"
                                    placeholder="1234 5678 9012 3456" maxlength="19" @input="formatCardNumber"
                                    required />
                            </div>

                            <div class="form-row">
                                <div class="form-group">
                                    <label for="expiry">Expiration Date</label>
                                    <input type="text" id="expiry" v-model="form.expiry" placeholder="MM/YY"
                                        maxlength="5" @input="formatExpiry" required />
                                </div>

                                <div class="form-group">
                                    <label for="cvv">CVV</label>
                                    <input type="text" id="cvv" v-model="form.cvv" placeholder="123" maxlength="4"
                                        required />
                                </div>
                            </div>
                        </div>

                        <!-- Billing Address -->
                        <div class="form-section">
                            <h3>Billing Address</h3>

                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" v-model="form.email" placeholder="your.email@example.com"
                                    required />
                            </div>

                            <div class="form-group">
                                <label for="address">Street Address</label>
                                <input type="text" id="address" v-model="form.address" placeholder="123 Main Street"
                                    required />
                            </div>

                            <div class="form-row">
                                <div class="form-group">
                                    <label for="city">City</label>
                                    <input type="text" id="city" v-model="form.city" placeholder="New York" required />
                                </div>

                                <div class="form-group">
                                    <label for="state">State/Province</label>
                                    <input type="text" id="state" v-model="form.state" placeholder="NY" required />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group">
                                    <label for="zipCode">ZIP/Postal Code</label>
                                    <input type="text" id="zipCode" v-model="form.zipCode" placeholder="10001"
                                        required />
                                </div>

                                <div class="form-group">
                                    <label for="country">Country</label>
                                    <select id="country" v-model="form.country" required>
                                        <option value="">Select Country</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="AU">Australia</option>
                                        <option value="DE">Germany</option>
                                        <option value="FR">France</option>
                                        <option value="ES">Spain</option>
                                        <option value="IT">Italy</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <!-- Terms and Submit -->
                        <div class="form-section">
                            <div class="checkbox-group">
                                <input type="checkbox" id="terms" v-model="form.acceptTerms" required />
                                <label for="terms">
                                    I agree to the <router-link to="/terms-conditions">Terms & Conditions</router-link>
                                    and <router-link to="/privacy-policy">Privacy Policy</router-link>
                                </label>
                            </div>

                            <button type="submit" class="submit-button" :disabled="!form.acceptTerms">
                                Complete Purchase
                            </button>

                            <p class="secure-note">
                                Your payment information is secure and encrypted
                            </p>
                        </div>
                    </form>
                </div>

                <!-- Right Side - Order Summary -->
                <div class="summary-section">
                    <div class="summary-card">
                        <h2>Order Summary</h2>

                        <div class="plan-details">
                            <div class="plan-header">
                                <h3>{{ selectedPlan.name }}</h3>
                                <span class="plan-badge" v-if="selectedPlan.featured">Most Popular</span>
                            </div>

                            <div class="plan-price">
                                <span class="price">${{ selectedPlan.price }}</span>
                                <span class="period">{{ getPeriod(selectedPlan.name) }}</span>
                            </div>

                            <div class="plan-features">
                                <h4>What's Included:</h4>
                                <ul>
                                    <li v-for="feature in selectedPlan.features" :key="feature">
                                        ✓ {{ feature }}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="pricing-breakdown">
                            <div class="breakdown-row">
                                <span>Subtotal</span>
                                <span>${{ selectedPlan.price }}</span>
                            </div>
                            <div class="breakdown-row">
                                <span>Tax (estimated)</span>
                                <span>${{ calculateTax() }}</span>
                            </div>
                            <div class="breakdown-row total">
                                <span>Total</span>
                                <span>${{ calculateTotal() }}</span>
                            </div>
                        </div>

                        <div class="guarantee">
                            <p>30-Day Money-Back Guarantee</p>
                            <p>Cancel anytime, no questions asked</p>
                        </div>
                    </div>

                    <div class="support-card">
                        <h3>Need Help?</h3>
                        <p>Our support team is here for you</p>
                        <router-link to="/contacts" class="support-link">Contact Support</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Get plan from route params or default to first plan
const planId = computed(() => Number(route.query.plan) || 1)

const plans = [
    {
        id: 1,
        name: "Casual Reader",
        price: 1.99,
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
        featured: false,
        features: [
            "Everything in Romance Addict",
            "2 Months Free",
            "Exclusive Annual Perks",
            "Collector's Covers",
            "Reader Awards Access"
        ]
    },
    {
        id: 5,
        name: "Lifetime Romantic",
        price: 499.99,
        featured: false,
        features: [
            "Unlimited Lifetime Access",
            "All Future Features",
            "VIP Author Events",
            "Collector's Signed Editions",
            "Lifetime Premium Support"
        ]
    }
]

const selectedPlan = computed(() => plans.find(p => p.id === planId.value) || plans[0])

const form = ref({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    acceptTerms: false
})

function formatCardNumber(event: Event) {
    const input = event.target as HTMLInputElement
    let value = input.value.replace(/\s/g, '')
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value
    form.value.cardNumber = formattedValue
}

function formatExpiry(event: Event) {
    const input = event.target as HTMLInputElement
    let value = input.value.replace(/\D/g, '')
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4)
    }
    form.value.expiry = value
}

function calculateTax() {
    return (selectedPlan.value.price * 0.08).toFixed(2)
}

function calculateTotal() {
    return (selectedPlan.value.price + parseFloat(calculateTax())).toFixed(2)
}

function getPeriod(planName: string) {
    if (planName.includes('Annual') || planName.includes('Lover')) return '/year'
    if (planName.includes('Lifetime')) return 'one-time'
    return '/month'
}

function processPayment() {
    // In a real application, you would send this to your payment processor
    console.log('Processing payment:', form.value)
    alert(`Thank you for subscribing to ${selectedPlan.value.name}! 💖\n\nYour payment of $${calculateTotal()} has been processed.`)
    router.push('/collection')
}
</script>

<style scoped>
.checkout-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #fce7f3 0%, #fff1f2 100%);
    padding: 2rem 1rem;
}

.checkout-container {
    max-width: 1200px;
    margin: 0 auto;
}

.brand-logo {
    display: block;
    text-align: center;
    margin-bottom: 1.5rem;
}

.brand-logo img {
    width: 170px;
    transition: transform 0.3s ease;
}

.brand-logo img:hover {
    transform: scale(1.05);
}

.page-title {
    text-align: center;
    font-size: 2.5rem;
    color: #966AEC;
    margin-bottom: 3rem;
    font-weight: 700;
}

.checkout-grid {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 2rem;
}

/* Payment Section */
.payment-section {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.payment-section h2 {
    font-size: 1.8rem;
    color: #9f1239;
    margin-bottom: 1.5rem;
}

.form-section {
    margin-bottom: 2rem;
}

.form-section h3 {
    font-size: 1.3rem;
    color: #be123c;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #fce7f3;
}

.form-group {
    margin-bottom: 1.2rem;
}

.form-group label {
    display: block;
    font-weight: 600;
    color: #6b0210;
    margin-bottom: 0.5rem;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 0.875rem;
    border: 2px solid #fecdd3;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus {
    outline: none;
    border-color: #966AEC;
    box-shadow: 0 0 0 3px rgba(150, 106, 236, 0.1);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.checkbox-group {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
}

.checkbox-group input[type="checkbox"] {
    margin-top: 0.25rem;
    width: 18px;
    height: 18px;
    cursor: pointer;
}

.checkbox-group label {
    font-size: 0.9rem;
    color: #6b0210;
    line-height: 1.4;
}

.checkbox-group label a {
    color: #966AEC;
    text-decoration: none;
    font-weight: 600;
}

.checkbox-group label a:hover {
    text-decoration: underline;
}

.submit-button {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, #966AEC, #be123c);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 1rem;
}

.submit-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(150, 106, 236, 0.3);
}

.submit-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.secure-note {
    text-align: center;
    font-size: 0.9rem;
    color: #9f1239;
    font-weight: 500;
}

/* Summary Section */
.summary-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.summary-card,
.support-card {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.summary-card h2 {
    font-size: 1.5rem;
    color: #9f1239;
    margin-bottom: 1.5rem;
}

.plan-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.plan-header h3 {
    font-size: 1.3rem;
    color: #be123c;
}

.plan-badge {
    background: linear-gradient(135deg, #966AEC, #be123c);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
}

.plan-price {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.price {
    font-size: 2.5rem;
    font-weight: 700;
    color: #966AEC;
}

.period {
    font-size: 1rem;
    color: #9f1239;
}

.plan-features h4 {
    color: #6b0210;
    margin-bottom: 0.75rem;
    font-size: 1rem;
}

.plan-features ul {
    list-style: none;
    padding: 0;
}

.plan-features li {
    padding: 0.5rem 0;
    color: #4b0a15;
    border-bottom: 1px solid #fce7f3;
}

.plan-features li:last-child {
    border-bottom: none;
}

.pricing-breakdown {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 2px solid #fce7f3;
}

.breakdown-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
    color: #6b0210;
}

.breakdown-row.total {
    font-size: 1.3rem;
    font-weight: 700;
    color: #966AEC;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 2px solid #fce7f3;
}

.guarantee {
    background: #fef2f2;
    border-radius: 8px;
    padding: 1rem;
    margin-top: 1.5rem;
    text-align: center;
}

.guarantee p {
    margin: 0.25rem 0;
    color: #6b0210;
    font-size: 0.9rem;
}

.guarantee p:first-child {
    font-weight: 600;
    font-size: 1rem;
}

/* Support Card */
.support-card h3 {
    color: #be123c;
    margin-bottom: 0.5rem;
}

.support-card p {
    color: #6b0210;
    margin-bottom: 1rem;
}

.support-link {
    display: block;
    text-align: center;
    padding: 0.75rem;
    background: #fce7f3;
    color: #966AEC;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.support-link:hover {
    background: #966AEC;
    color: white;
}

/* Responsive */
@media (max-width: 1024px) {
    .checkout-grid {
        grid-template-columns: 1fr;
    }

    .summary-section {
        order: -1;
    }
}

@media (max-width: 640px) {
    .page-title {
        font-size: 1.8rem;
    }

    .form-row {
        grid-template-columns: 1fr;
    }

    .payment-section,
    .summary-card,
    .support-card {
        padding: 1.5rem;
    }
}
</style>
