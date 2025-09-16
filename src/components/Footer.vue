<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section brand-section">
        <div class="brand">
          <span class="heart">💕</span>
          <span class="name">RomanceReads</span>
        </div>
        <p class="tagline">Where every story finds its perfect match</p>
        <div class="social-links">
          <a href="#" class="social-link" aria-label="Facebook">📘</a>
          <a href="#" class="social-link" aria-label="Twitter">🐦</a>
          <a href="#" class="social-link" aria-label="Instagram">📷</a>
          <a href="#" class="social-link" aria-label="TikTok">🎵</a>
        </div>
      </div>

      <div class="footer-section">
        <h4>Explore</h4>
        <ul>
          <li><RouterLink to="/categories">Browse Genres</RouterLink></li>
          <li><RouterLink to="/collection">Book Collection</RouterLink></li>
          <li><RouterLink to="/plans">Subscription Plans</RouterLink></li>
          <li><a href="#" @click="openNewReleases">New Releases</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Support</h4>
        <ul>
          <li><a href="#" @click="openHelp">Help Center</a></li>
          <li><a href="#" @click="openContact">Contact Us</a></li>
          <li><a href="#" @click="openFAQ">FAQ</a></li>
          <li><a href="#" @click="openBugReport">Report a Bug</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Legal</h4>
        <ul>
          <li><a href="#" @click="openTerms">Terms & Conditions</a></li>
          <li><a href="#" @click="openPrivacy">Privacy Policy</a></li>
          <li><a href="#" @click="openCookies">Cookie Policy</a></li>
          <li><a href="#" @click="openRefund">Refund Policy</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Newsletter</h4>
        <p>Get the latest romance recommendations delivered to your inbox</p>
        <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
          <input 
            type="email" 
            placeholder="Enter your email"
            v-model="email"
            required
          />
          <button type="submit">💌 Subscribe</button>
        </form>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p>&copy; 2025 RomanceReads. All rights reserved.</p>
        <p class="disclaimer">
          This is a demo application. All books and content are for demonstration purposes only.
        </p>
      </div>
    </div>

    <!-- Terms & Conditions Modal -->
    <div v-if="showTermsModal" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <h3>Terms & Conditions</h3>
          <button class="close-btn" @click="closeModal">&times;</button>
        </div>
        <div class="modal-content">
          <h4>1. Acceptance of Terms</h4>
          <p>By using RomanceReads, you agree to be bound by these Terms and Conditions.</p>
          
          <h4>2. Subscription Services</h4>
          <p>Our subscription plans provide access to digital romance books. Subscription fees are billed monthly or annually as selected.</p>
          
          <h4>3. User Conduct</h4>
          <p>Users must not share account credentials, reproduce copyrighted content, or engage in harmful activities.</p>
          
          <h4>4. Intellectual Property</h4>
          <p>All content on RomanceReads is protected by copyright and other intellectual property laws.</p>
          
          <h4>5. Cancellation and Refunds</h4>
          <p>You may cancel your subscription at any time. Refunds are provided according to our Refund Policy.</p>
          
          <h4>6. Privacy</h4>
          <p>Your privacy is important to us. Please review our Privacy Policy for details on data collection and use.</p>
          
          <h4>7. Limitation of Liability</h4>
          <p>RomanceReads shall not be liable for any indirect, incidental, or consequential damages.</p>
          
          <h4>8. Changes to Terms</h4>
          <p>We reserve the right to modify these terms at any time. Continued use constitutes acceptance of new terms.</p>
          
          <p class="effective-date"><strong>Effective Date:</strong> September 16, 2025</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const email = ref('')
const showTermsModal = ref(false)

function subscribeNewsletter() {
  if (email.value) {
    alert(`Thank you for subscribing with ${email.value}! You'll receive the best romance recommendations. 💕`)
    email.value = ''
  }
}

function openTerms() {
  showTermsModal.value = true
}

function closeModal() {
  showTermsModal.value = false
}

function openPrivacy() {
  alert('Privacy Policy: We protect your personal information and reading preferences. This is a demo application.')
}

function openCookies() {
  alert('Cookie Policy: We use cookies to enhance your reading experience and provide personalized recommendations.')
}

function openRefund() {
  alert('Refund Policy: Full refunds available within 30 days of purchase. Pro-rated refunds for annual subscriptions.')
}

function openHelp() {
  alert('Help Center: Contact our support team at help@romancereads.com for assistance with your account.')
}

function openContact() {
  alert('Contact Us: Email us at hello@romancereads.com or call 1-800-ROMANCE for customer support.')
}

function openFAQ() {
  alert('FAQ: Find answers to common questions about subscriptions, reading, and account management.')
}

function openBugReport() {
  alert('Report a Bug: Help us improve! Send bug reports to bugs@romancereads.com')
}

function openNewReleases() {
  alert('New Releases: Check out the latest romance novels added to our collection! ✨')
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #be123c, #e11d48);
  color: white;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.brand-section {
  grid-column: span 1;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.heart {
  font-size: 1.2rem;
}

.tagline {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  text-align: center;
  line-height: 40px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.footer-section h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #fecdd3;
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #fecdd3;
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.newsletter-form input {
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
}

.newsletter-form button {
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  white-space: nowrap;
  transition: background 0.3s ease;
}

.newsletter-form button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem 2rem;
}

.footer-bottom-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
}

.disclaimer {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  font-style: italic;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
}

.modal {
  background: white;
  border-radius: 12px;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
  border-radius: 12px 12px 0 0;
}

.modal-header h3 {
  color: #be123c;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  color: #9f1239;
  cursor: pointer;
  line-height: 1;
}

.close-btn:hover {
  color: #be123c;
}

.modal-content {
  padding: 2rem;
  color: #374151;
  line-height: 1.6;
}

.modal-content h4 {
  color: #be123c;
  margin: 1.5rem 0 0.5rem 0;
}

.modal-content h4:first-child {
  margin-top: 0;
}

.modal-content p {
  margin-bottom: 1rem;
}

.effective-date {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .modal-overlay {
    padding: 1rem;
  }

  .modal-content {
    padding: 1.5rem;
  }
}
</style>