<template>
  <div class="categories">
    <h2>Browse by Genre</h2>
    <div class="grid">
      <div 
        v-for="genre in genres" 
        :key="genre" 
        class="card"
        @click="goToGenre(genre)"
      >
        <h3>{{ genre }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

// Extracted unique genres from books
const genres = [
  "Historical Romance",
  "Tragic Romance",
  "Contemporary Romance",
  "Historical Fantasy Romance",
  "Drama Romance",
  "Paranormal Romance",
  "Regency Romance",
  "Gothic Romance",
  "Classic Romance",
  "Romantic Suspense",
  "Sci-Fi Romance",
  "Coming-of-Age Romance",
  "Young Adult Romance",
  "New Adult Romance",
  "Magical Realism Romance",
  "Erotic Romance",
  "LGBTQ+ Romance",
  "Romantic Comedy",
]

function goToGenre(genre) {
  router.push({ name: "genre-books", params: { name: genre } })
}
</script>

<style scoped>
.categories {
  padding: 2rem;
}

h2 {
  text-align: center;
  font-size: 2rem;
  color: #be123c;
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
}

.card {
  background: #fff0f3;
  border-radius: 10px;
  text-align: center;
  padding: 1.2rem;
  font-weight: bold;
  color: #9f1239;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s, background 0.3s;
}

.card:hover {
  background: #ffe4e6;
  transform: scale(1.05);
}
</style>
