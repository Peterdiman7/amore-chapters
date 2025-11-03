<template>
	<header class="site-header">
		<nav class="nav">
			<!-- Logo -->
			<router-link to="/" class="logo" @click="closeMenu">
				<img src="@/assets/images/amore-chapters-logo.png" alt="Amore Chapters Logo" class="logo-icon" />
				<span class="logo-text">Amore Chapters</span>
			</router-link>


			<!-- Desktop / Mobile Nav -->
			<ul class="nav-links" :class="{ open: menuOpen }">
				<li>
					<router-link to="/" @click="closeMenu" class="nav-link">
						<span class="link-icon">Home</span>
					</router-link>
				</li>
				<li>
					<router-link to="/categories" @click="closeMenu" class="nav-link">
						<span class="link-icon">Browse Genres</span>
					</router-link>
				</li>
				<li>
					<router-link to="/collection" @click="closeMenu" class="nav-link">
						<span class="link-icon">Collection</span>
					</router-link>
				</li>
				<li>
					<router-link to="/plans" @click="closeMenu" class="nav-link">
						<span class="link-icon">Plans</span>
					</router-link>
				</li>

				<!-- Login / Logout -->
				<li v-if="!loggedIn">
					<router-link to="/login" @click="closeMenu" class="nav-link">
						<span class="link-icon">Login</span>
					</router-link>
				</li>
				<li v-else>
					<button class="nav-link logout-btn" @click="logout">
						Logout
					</button>
				</li>
			</ul>

			<!-- Hamburger Button -->
			<button class="menu-toggle" @click="toggleMenu" :aria-expanded="menuOpen.toString()"
				aria-label="Toggle menu">
				<span :class="{ open: menuOpen }"></span>
				<span :class="{ open: menuOpen }"></span>
				<span :class="{ open: menuOpen }"></span>
			</button>
		</nav>
	</header>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import { useAuthStore } from "@/stores/auth"
import { storeToRefs } from "pinia"

const router = useRouter()
const auth = useAuthStore()
const { loggedIn } = storeToRefs(auth)

const menuOpen = ref(false)

const toggleMenu = () => {
	menuOpen.value = !menuOpen.value
	document.body.style.overflow = menuOpen.value ? "hidden" : ""
}

const closeMenu = () => {
	menuOpen.value = false
	document.body.style.overflow = ""
}

const logout = async () => {
	await auth.logout()
	router.push("/login")
}

onMounted(() => {
	auth.checkLogin() // initial check from backend
})
</script>

<style scoped>
/* ===== Header Layout ===== */
.site-header {
	width: 100%;
	background: linear-gradient(135deg, #ffffff, #966AEC, #966AEC);
	position: sticky;
	top: 0;
	z-index: 200;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1200px;
	margin: 0 auto;
	width: 100%;
	padding: 1rem 2rem;
}

/* ===== Logo ===== */
.logo {
	display: flex;
	align-items: center;
	gap: 0.6rem;
	font-weight: 700;
	font-size: 1.5rem;
	color: white;
	text-decoration: none;
}

.logo-icon {
	height: 70px;
	width: auto;
	font-size: 2rem;
}

.logo-text {
	font-family: "Quicksand", sans-serif;
	font-weight: 700;
}

/* ===== Nav Links ===== */
.nav-links {
	list-style: none;
	display: flex;
	gap: 1rem;
}

.nav-link {
	display: flex;
	align-items: center;
	gap: 0.4rem;
	text-decoration: none;
	color: white;
	font-weight: 500;
	font-size: 1rem;
	padding: 0.6rem 1rem;
	border-radius: 8px;
	transition: all 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
	background: rgba(255, 255, 255, 0.2);
}

.logout-btn {
	cursor: pointer;
}

/* ===== Hamburger Button ===== */
.menu-toggle {
	display: none;
	flex-direction: column;
	justify-content: space-between;
	width: 28px;
	height: 22px;
	background: none;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 300;
}

.menu-toggle span {
	display: block;
	height: 3px;
	width: 100%;
	background: white;
	border-radius: 2px;
	transition: all 0.3s ease;
}

.menu-toggle span.open:nth-child(1) {
	transform: rotate(45deg) translate(5px, 6px);
}

.menu-toggle span.open:nth-child(2) {
	opacity: 0;
}

.menu-toggle span.open:nth-child(3) {
	transform: rotate(-45deg) translate(6px, -6px);
}

/* ===== Mobile Styles ===== */
@media (max-width: 1078px) {
	.menu-toggle {
		display: flex;
	}

	.nav-links {
		position: fixed;
		top: 0;
		right: 0;
		flex-direction: column;
		align-items: flex-start;
		background: linear-gradient(135deg, #ffffff, #966AEC, #966AEC);
		width: 80%;
		max-width: 320px;
		height: 100vh;
		padding: 5rem 1.5rem 2rem;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
		transform: translateX(100%);
		transition: transform 0.3s ease;
	}

	.nav-links.open {
		transform: translateX(0);
	}

	.nav-links li {
		width: 100%;
	}

	.nav-link {
		width: 100%;
		justify-content: flex-start;
		padding: 1rem 1.2rem;
		border-radius: 8px;
	}
}

/* Extra Small Devices */
@media (max-width: 480px) {
	.logo-text {
		display: none;
	}

	.nav-links {
		width: 100%;
		max-width: none;
	}
}
</style>
