<template>
	<div class="landing-wrapper">
		<!-- ***** Preloader Start ***** -->
		<div v-if="loading" id="js-preloader" class="js-preloader">
			<div class="preloader-inner">
				<span class="dot"></span>
				<div class="dots">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
		<!-- ***** Preloader End ***** -->

		<!-- ***** Main Banner ***** -->
		<div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="row">
							<div class="col-lg-6 align-self-center">
								<div class="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s"
									data-wow-delay="1s">
									<div class="row">
										<div class="col-lg-12">
											<h2>Discover Your Next Love Story</h2>
											<p>Amore Chapters brings you the finest collection of romance novels. From
												historical romances to contemporary love stories, find your perfect
												match in our curated library.</p>
										</div>
										<div class="col-lg-12">
											<div class="white-button first-button scroll-to-section">
												<router-link to="/categories">Browse Categories</router-link>
											</div>
											<div class="white-button scroll-to-section">
												<router-link to="/plans">View Plans</router-link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
									<img src="/assets/images/slider-dec.webp" alt="Romance Books">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- ***** Features Section ***** -->
		<div id="services" class="services section">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2">
						<div class="section-heading wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
							<h4>Amazing <em>Features</em> for Romance Lovers</h4>
							<img src="/assets/images/heading-line-dec.png" alt="">
							<p>Immerse yourself in the world of romance with our carefully curated collection and
								reader-focused features.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-lg-3">
						<div class="service-item first-service">
							<div style="width: 50px; margin-bottom: 30px;">
								<img src="/assets/images/collection.png" alt="collection">
							</div>
							<h4>Curated Collection</h4>
							<p>Hand-picked romance novels across all sub-genres, from sweet to steamy.</p>
							<div class="text-button">
								<router-link to="/collection">Explore Now</router-link>
							</div>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="service-item second-service">
							<div style="width: 50px; margin-bottom: 30px;">
								<img src="/assets/images/recommendation.png" alt="reccomendation">
							</div>
							<h4>Personalized Recommendations</h4>
							<p>Get book suggestions tailored to your reading preferences and favorite tropes.</p>
							<div class="text-button">
								<router-link to="/collection">Learn More</router-link>
							</div>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="service-item third-service">
							<div style="width: 50px; margin-bottom: 30px;">
								<img src="/assets/images/genres.avif" alt="">
							</div>
							<h4>Multiple Genres</h4>
							<p>From historical to paranormal, contemporary to fantasy - we have it all.</p>
							<div class="text-button">
								<router-link to="/categories">Browse Genres</router-link>
							</div>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="service-item fourth-service">
							<div style="width: 50px; margin-bottom: 30px;">
								<img src="/assets/images/24_7.png" alt="24_7">
							</div>
							<h4>24/7 Access</h4>
							<p>Read anytime, anywhere on any device. Your romance library is always with you.</p>
							<div class="text-button">
								<router-link to="/plans">Get Started</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- ***** About Section ***** -->
		<div id="about" class="about-us section">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 align-self-center">
						<div class="section-heading">
							<h4>About <em>Amore Chapters</em> & What We Offer</h4>
							<img src="/assets/images/heading-line-dec.png" alt="">
							<p>We're passionate about bringing romance readers together with the stories they'll love.
								Our platform makes discovering your next favorite book effortless.</p>
						</div>
						<div class="row">
							<div class="col-lg-6">
								<div class="box-item">
									<h4><a href="#">Unlimited Reading</a></h4>
									<p>Access thousands of titles</p>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="box-item">
									<h4><a href="#">New Releases</a></h4>
									<p>Fresh content weekly</p>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="box-item">
									<h4><a href="#">Reader Community</a></h4>
									<p>Connect with fellow fans</p>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="box-item">
									<h4><a href="#">Author Spotlights</a></h4>
									<p>Exclusive interviews</p>
								</div>
							</div>
							<div class="col-lg-12">
								<p>Join thousands of romance readers who've found their happily ever after with Amore
									Chapters.</p>
								<div class="gradient-button">
									<router-link to="/plans">Start Your Journey</router-link>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="right-image">
							<img src="/assets/images/about-right-dec.png" alt="About Amore Chapters">
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- ***** Pricing Section ***** -->
		<div id="pricing" class="pricing-tables">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2">
						<div class="section-heading">
							<h4>Choose Your Perfect Reading Plan</h4>
							<img src="/assets/images/heading-line-dec.png" alt="">
							<p>Flexible subscription options to match your reading habits. Cancel anytime.</p>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="pricing-item-regular">
							<span class="price">$1.99</span>
							<h4>Casual Reader</h4>
							<div class="icon">
								<img src="/assets/images/slider-dec.webp" alt="">
							</div>
							<ul>
								<li>5 Books per Month</li>
								<li>Basic Recommendations</li>
								<li class="non-function">Offline Reading</li>
								<li class="non-function">Priority Support</li>
								<li class="non-function">Early Access</li>
								<li class="non-function">Author Q&A</li>
							</ul>
							<div class="border-button">
								<router-link to="/plans">Choose This Plan</router-link>
							</div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="pricing-item-pro">
							<span class="price">$9.99</span>
							<h4>Love Enthusiast</h4>
							<div class="icon">
								<img src="/assets/images/slider-dec.webp" alt="">
							</div>
							<ul>
								<li>30 Books per Month</li>
								<li>AI Recommendations</li>
								<li class="non-function">Offline Reading</li>
								<li class="non-function">Priority Support</li>
								<li class="non-function">Early Access</li>
							</ul>
							<div class="border-button">
								<router-link to="/plans">Choose This Plan</router-link>
							</div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="pricing-item-regular">
							<span class="price">$19.99</span>
							<h4>Romance Addict</h4>
							<div class="icon">
								<img src="/assets/images/pricing-table-01.png" alt="">
							</div>
							<ul>
								<li>Unlimited Books</li>
								<li>AI Recommendations</li>
								<li>Offline Reading</li>
								<li>Priority Support</li>
								<li>Early Access</li>
								<li>Author Q&A</li>
							</ul>
							<div class="border-button">
								<router-link to="/plans">Choose This Plan</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- ***** Newsletter Section ***** -->
		<footer id="newsletter">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2">
						<div class="section-heading">
							<h4>Subscribe to receive romance recommendations & latest updates</h4>
						</div>
					</div>
					<div class="col-lg-6 offset-lg-3">
						<form id="search" @submit.prevent="subscribeNewsletter">
							<div class="row">
								<div class="col-lg-6 col-sm-6">
									<fieldset>
										<input type="email" v-model="newsletterEmail" class="email"
											placeholder="Email Address..." autocomplete="on" required>
									</fieldset>
								</div>
								<div class="col-lg-6 col-sm-6">
									<fieldset>
										<button type="submit" class="main-button">
											Subscribe Now <i class="fa fa-angle-right"></i>
										</button>
									</fieldset>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const loading = ref(true)
const newsletterEmail = ref('')

onMounted(() => {
	// Hide preloader after component mounts
	setTimeout(() => {
		loading.value = false
	}, 1000)
})

const subscribeNewsletter = () => {
	if (newsletterEmail.value) {
		alert(`Thank you for subscribing! You'll receive romance recommendations at ${newsletterEmail.value} 💕`)
		newsletterEmail.value = ''
	}
}
</script>

<style scoped>
/* Additional custom styles if needed */
.landing-wrapper {
	width: 100%;
}

/* Override template colors to match romance theme */
.main-button,
.gradient-button a,
.border-button a {
	background: #966AEC !important;
	color: white !important;
}

.section-heading h4 em {
	color: #e11d48;
}

.service-item .icon {
	background: linear-gradient(135deg, #be123c, #e11d48);
}

.pricing-item-pro {
	background: linear-gradient(135deg, white, white);
}
</style>