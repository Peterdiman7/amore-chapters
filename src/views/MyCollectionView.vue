<template>
  <div class="collection">
    <h2 style="color: #966AEC;">My Romance Collection</h2>
    <div class="grid">
      <div v-for="book in books" :key="book.id" class="card">
        <div class="image-wrap">
          <img :src="book.cover" :alt="book.title" />
          <div class="overlay"></div>
        </div>
        <div class="info">
          <h3>{{ book.title }}</h3>
          <p class="author">by {{ book.author }}</p>
          <p class="meta">
            <span>{{ book.year }}</span> • <span>{{ book.genre }}</span>
          </p>
          <p class="desc">{{ book.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { books } from "../books.js"
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
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  margin-bottom: 2.5rem;
  font-weight: 600;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 340px));
  gap: 2rem;
  justify-content: center;
}

.card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
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
  height: 250px;
  overflow: hidden;
}

.image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  border-radius: 0;
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
  padding: 1.2rem 1.4rem 1.6rem;
}

h3 {
  font-size: 1.3rem;
  color: #3d0b6e;
  margin: 0.4rem 0;
  font-weight: 600;
}

.author {
  font-size: 1rem;
  color: #6b21a8;
  margin-bottom: 0.3rem;
  font-weight: 500;
}

.meta {
  font-size: 0.9rem;
  color: #7e22ce;
  margin-bottom: 0.8rem;
}

.desc {
  font-size: 0.9rem;
  color: #4a044e;
  opacity: 0.9;
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 600px) {
  h2 {
    font-size: 1.7rem;
  }

  .image-wrap {
    height: 200px;
  }
}
</style>
