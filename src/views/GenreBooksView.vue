<template>
  <div class="collection">
    <h2 style="color: #966AEC;">{{ name }} Books</h2>
    <div class="grid">
      <div v-for="book in filteredBooks" :key="book.id" class="card">
        <div class="image-wrap">
          <img :src="book.cover" :alt="book.title" />
          <div class="overlay"></div>
        </div>
        <div class="info">
          <h3>{{ book.title }}</h3>
          <p class="author">by {{ book.author }}</p>
          <p class="meta">{{ book.year }}</p>
          <p class="desc">{{ book.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { books } from "../books.js"

const route = useRoute()
const name = route.params.name

const filteredBooks = computed(() =>
  books.filter(b => b.genre === name)
)
</script>

<style scoped>
.collection {
  padding: 3rem 2rem;
  min-height: 100vh;
  border-radius: 16px;
}

h2 {
  text-align: center;
  font-size: 2.2rem;
  color: white;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  margin-bottom: 2.5rem;
  letter-spacing: 1px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 350px));
  gap: 2rem;
  justify-content: center;
}

.card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
}

.image-wrap {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.card:hover img {
  transform: scale(1.08);
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(150, 106, 236, 0.5), transparent 80%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .overlay {
  opacity: 1;
}

.info {
  padding: 1rem 1.2rem 1.5rem;
}

h3 {
  font-size: 1.3rem;
  color: #3d0b6e;
  margin: 0.4rem 0;
  font-weight: 600;
}

.author {
  font-size: 0.95rem;
  color: #6b21a8;
  margin-bottom: 0.2rem;
}

.meta {
  font-size: 0.85rem;
  color: #7e22ce;
  margin-bottom: 0.8rem;
}

.desc {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #4a044e;
  opacity: 0.9;
}
</style>
