<template>
  <div class="categories">
    <h2>Browse by Genre</h2>
    <div class="grid">
      <div v-for="genre in genres" :key="genre.name" class="card" :style="{ backgroundImage: `url(${genre.image})` }"
        @click="goToGenre(genre.name)">
        <div class="overlay">
          <h3>{{ genre.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const genres = [
  { name: "Historical Romance", image: "https://media.istockphoto.com/id/612248876/photo/portrait-of-couple-in-historical-costumes-on-dark-background.jpg?s=612x612&w=0&k=20&c=u39OAmE5hw0ZfCLO-DqpKd7D7nrvKLNQNJV8aebUOxQ=" },
  { name: "Tragic Romance", image: "https://industrialscripts.com/wp-content/uploads/2020/10/Tragic-Romance-The-Notebook.jpg" },
  { name: "Contemporary Romance", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80" },
  { name: "Historical Fantasy Romance", image: "https://bookbub-res.cloudinary.com/image/upload/v1570653679/blog/best-historical-romance-novels.jpg" },
  { name: "Drama Romance", image: "https://imageio.forbes.com/specials-images/imageserve/62434404ecd1254ec1c7b3b0/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" },
  { name: "Paranormal Romance", image: "https://dhjhkxawhe8q4.cloudfront.net/supadu-hc-epic-reads/wp-content/uploads/2023/09/25112534/765x530-4.png" },
  { name: "Regency Romance", image: "https://cdn.hercampus.com/SH6M70M3/as/5phnq8gsxbz46fkbrwmw797/regency_romance_novels_like_bridgerton?width=719&height=464&fit=crop&auto=webp&dpr=4" },
  { name: "Gothic Romance", image: "https://i.ytimg.com/vi/AuINobrA0gM/sddefault.jpg" },
  { name: "Classic Romance", image: "https://orion-uploads.openroadmedia.com/md_ac01bb4c03cb-classic-romance-books.jpg" },
  { name: "Romantic Suspense", image: "https://images.ctfassets.net/qpn1gztbusu2/63XubgwY2yrQbbfWih8oky/82a96e5eebb37a39ca281364acbf161b/romance-suspense-social.jpg?fm=jpg&w=3840&q=70" },
  { name: "Sci-Fi Romance", image: "https://images-platform.99static.com/fE5FiPUnDA5jQvRDf2o9MWdUTfI=/0x179:1000x1179/500x500/top/smart/99designs-contests-attachments/110/110563/attachment_110563443" },
  { name: "Coming-of-Age Romance", image: "https://dhjhkxawhe8q4.cloudfront.net/supadu-hc-epic-reads/wp-content/uploads/2022/04/13121252/765x530-4-2.png" },
  { name: "Young Adult Romance", image: "https://hips.hearstapps.com/hmg-prod/images/french-1677087926.jpg?crop=0.9995002498750624xw:1xh;center,top" },
  { name: "New Adult Romance", image: "https://img.buzzfeed.com/buzzfeed-static/static/2022-09/2/18/asset/d14d37dc16ae/sub-buzz-4777-1662142674-7.png?downsize=700%3A%2A&output-quality=auto&output-format=auto" },
  { name: "Magical Realism Romance", image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1067296954.jpg?crop=1xw:0.9166666666666666xh;center,top&resize=1200:*" },
  { name: "Erotic Romance", image: "https://images.nymag.com/arts/books/features/smut120419_opener_560.jpg" },
  { name: "LGBTQ+ Romance", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuC1RWkcqXwIcPV5GrDQfZ6FTFuoFbvYqvNg&s" },
  { name: "Romantic Comedy", image: "https://images.ft.com/v3/image/raw/ftcms%3Ab80f7e42-be53-4fab-b410-5df3ee20606f?source=next-article&fit=scale-down&quality=highest&width=1440&dpr=1" },
]

function goToGenre(genre) {
  router.push({ name: "genre-books", params: { name: genre } })
}
</script>

<style scoped>
.categories {
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #966AEC, #ffffff);
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
  background-size: cover;
  background-position: center;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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

.card:hover::before {
  background: rgba(150, 106, 236, 0.6);
}
</style>
