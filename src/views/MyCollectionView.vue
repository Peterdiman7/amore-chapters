<template>
  <div class="collection">
    <h2>My Romance Collection</h2>
    <div class="grid">
      <div v-for="book in books" :key="book.id" class="card">
        <img :src="book.cover" :alt="book.title" />
        <h3>{{ book.title }}</h3>
        <p class="author">by {{ book.author }}</p>
        <p class="meta">
          <span>{{ book.year }}</span> • <span>{{ book.genre }}</span>
        </p>
        <p class="desc">{{ book.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { books } from "../books.js"
</script>

<style scoped>
.collection {
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
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.card {
  background: #fff0f3;
  border-radius: 12px;
  overflow: hidden;
  text-align: left;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}

.card h3 {
  font-size: 1.3rem;
  margin-top: 0.8rem;
  color: #9f1239;
}

.card .author {
  font-size: 1rem;
  font-weight: 500;
  color: #6b0210;
  margin-bottom: 0.2rem;
}

.card .meta {
  font-size: 0.9rem;
  color: #9f1239;
  margin-bottom: 0.8rem;
}

.card .desc {
  font-size: 0.9rem;
  color: #4b0a15;
  line-height: 1.4;
  flex-grow: 1;
}

/* Responsive */
@media (max-width: 600px) {
  h2 {
    font-size: 1.5rem;
  }

  .card img {
    height: 200px;
  }
}
</style>
