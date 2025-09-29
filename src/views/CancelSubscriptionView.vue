<template>
    <section class="cancel-page">
        <div class="container">
            <h1 class="page-title">Cancel Subscription</h1>
            <p class="page-intro">
                We’re sorry to see you go 💔 Please fill out the form below to confirm your cancellation.
            </p>

            <form class="cancel-form" @submit.prevent="submitCancellation">
                <!-- Reason -->
                <div class="form-group">
                    <label for="reason">Reason for cancellation</label>
                    <select id="reason" v-model="form.reason" required>
                        <option disabled value="">-- Select a reason --</option>
                        <option>Too expensive</option>
                        <option>Not enough content</option>
                        <option>Found a better alternative</option>
                        <option>Technical issues</option>
                        <option>Other</option>
                    </select>
                </div>

                <!-- Full Name -->
                <div class="form-group">
                    <label for="fullName">Full name</label>
                    <input type="text" id="fullName" v-model="form.fullName" placeholder="Enter your full name"
                        required />
                </div>

                <!-- Email -->
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" id="email" v-model="form.email" placeholder="Enter your email" required />
                </div>

                <!-- Comments -->
                <div class="form-group">
                    <label for="comments">Additional comments (optional)</label>
                    <textarea id="comments" v-model="form.comments" rows="4" placeholder="Tell us more..."></textarea>
                </div>

                <!-- Button -->
                <button type="submit" class="btn-submit">🚪 Submit & Cancel</button>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
    reason: '',
    fullName: '',
    email: '',
    comments: ''
})

function submitCancellation() {
    console.log('Cancellation submitted:', form.value)
    alert(`Your cancellation request has been submitted. Thank you, ${form.value.fullName}.`)
    form.value = { reason: '', fullName: '', email: '', comments: '' }
}
</script>

<style scoped>
.cancel-page {
    padding: 3rem 1.5rem;
    background: #fff0f3;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    background: #fff;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.page-title {
    font-size: 2rem;
    font-weight: 700;
    color: #be123c;
    margin-bottom: 1rem;
    text-align: center;
}

.page-intro {
    margin-bottom: 2rem;
    color: #6b0210;
    text-align: center;
    line-height: 1.5;
}

.cancel-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.cancel-form label {
    font-weight: 600;
    color: #9f1239;
}

.cancel-form input,
.cancel-form select,
.cancel-form textarea {
    padding: 0.75rem 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.75rem;
    font-size: 1rem;
    transition: border 0.2s ease, box-shadow 0.2s ease;
}

.cancel-form input:focus,
.cancel-form select:focus,
.cancel-form textarea:focus {
    border-color: #be123c;
    box-shadow: 0 0 0 3px rgba(190, 18, 60, 0.15);
    outline: none;
}

.btn-submit {
    background: #be123c;
    color: white;
    font-weight: 600;
    padding: 0.9rem 1.5rem;
    border: none;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.1s ease;
    font-size: 1rem;
}

.btn-submit:hover {
    background: #9f1239;
    transform: translateY(-1px);
}
</style>
