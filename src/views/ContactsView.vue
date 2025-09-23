<template>
  <section class="page contact-page">
    <div class="container">
      <h1 class="page-title">Contact Us</h1>
      <p class="page-intro">
        Have questions, suggestions, or feedback? We’d love to hear from you!
      </p>

      <!-- Contact Info -->
      <div class="contact-info">
        <h2>Our Address</h2>
        <p><strong>Nexera Media Group LTD</strong></p>
        <p>28739 Kenroy Ave<br />Canyon Country, CA 91387</p>
        <p><strong>Mailing Address:</strong><br />1317 N San Fernando Blvd 167<br />Burbank, CA 91504, United States</p>
        
        <p><strong>Email:</strong> <a href="mailto:info@nexera-media.com">info@nexera-media.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+17472500014">+1-747-250-0014</a></p>
      </div>

      <!-- Contact Form -->
      <div class="form-wrapper">
        <h2>Send Us a Message</h2>
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input id="name" v-model="form.name" type="text" required />
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input id="email" v-model="form.email" type="email" required />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" rows="5" required></textarea>
          </div>

          <button type="submit" class="btn">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  console.log("Form submitted:", form);
  alert("Thank you for contacting us! We'll get back to you soon.");
  form.name = "";
  form.email = "";
  form.message = "";
};
</script>

<style scoped>
.page {
  padding: 3rem 1.5rem;
}
.container {
  max-width: 800px;
  margin: 0 auto;
}
.page-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: #222;
}
.page-intro {
  color: #555;
  margin-bottom: 2rem;
}

/* Contact Info */
.contact-info {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border: 1px solid #eee;
}
.contact-info h2 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
}
.contact-info p {
  margin: 0.25rem 0;
  color: #444;
}
.contact-info a {
  color: #ff6347;
  text-decoration: none;
}
.contact-info a:hover {
  text-decoration: underline;
}

/* Form */
.form-wrapper h2 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.form-group {
  display: flex;
  flex-direction: column;
}
label {
  font-weight: 600;
  margin-bottom: 0.5rem;
}
input,
textarea {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}
input:focus,
textarea:focus {
  outline: none;
  border-color: #ff6347;
  box-shadow: 0 0 0 3px rgba(255, 99, 71, 0.2);
}
.btn {
  background: #ff6347;
  color: white;
  padding: 0.875rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn:hover {
  background: #e5533d;
}
</style>
