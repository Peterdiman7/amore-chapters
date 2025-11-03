<template>
  <div class="categories">
    <h2>Browse by Genre</h2>
    <div class="grid">
      <div v-for="genre in genres" :key="genre.id" class="card" @click="goToGenre(genre.name)">
        <img :src="genre.image" :alt="genre.name" class="card-image" />
        <div class="overlay">
          <h3>{{ genre.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const genres = ref([])

async function fetchGenres() {
  try {
    const res = await fetch("http://localhost:9100/categories")
    if (!res.ok) throw new Error("Failed to fetch")
    genres.value = await res.json()
  } catch (err) {
    console.error("Error loading genres:", err)
  }
}

function goToGenre(genre) {
  router.push({ name: "genre-books", params: { name: genre } })
}

onMounted(() => {
  fetchGenres()
})
</script>

<style scoped>
.categories {
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #966aec, #ffffff);
  min-height: 100vh;
}

h2 {
  text-align: center;
  font-size: 2.2rem;
  color: white;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
}

.card {
  position: relative;
  height: 200px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
}

h3 {
  color: #fff;
  font-size: 1.1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  z-index: 2;
}

.card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25);
}
</style>
