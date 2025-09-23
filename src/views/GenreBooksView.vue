<template>
  <div class="collection">
    <h2>{{ name }} Books</h2>
    <div class="grid">
      <div v-for="book in filteredBooks" :key="book.id" class="card">
        <img :src="book.cover" :alt="book.title" />
        <h3>{{ book.title }}</h3>
        <p class="author">by {{ book.author }}</p>
        <p class="meta">{{ book.year }}</p>
        <p class="desc">{{ book.description }}</p>
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
  padding: 2rem;
}

h2 {
  text-align: center;
  font-size: 1.8rem;
  color: #be123c;
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 400px));
  gap: 1.5rem;
  justify-content: center;
}

.card {
  background: #fff0f3;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
}

.card h3 {
  margin-top: 0.6rem;
  font-size: 1.2rem;
  color: #9f1239;
}

.card .author {
  font-size: 0.95rem;
  color: #6b0210;
}

.card .meta {
  font-size: 0.85rem;
  color: #9f1239;
}

.card .desc {
  font-size: 0.9rem;
  color: #4b0a15;
  margin-top: 0.5rem;
}
</style>
