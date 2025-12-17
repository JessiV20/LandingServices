<template>
  <MainLayout>
    <section class="container mx-auto py-32">
      <h1 class="text-5xl font-bold text-cyan-400 text-center mb-12">Nuestro Blog</h1>
      <p class="text-gray-300 text-center max-w-2xl mx-auto mb-20">
        Encuentra artículos, tutoriales y noticias sobre tecnología, desarrollo web y soluciones innovadoras.
      </p>

  
      <div class="grid md:grid-cols-3 gap-12">
        <div v-for="post in posts" :key="post.id" class="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
          <img :src="post.image" alt="Post Image" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-2">{{ post.title }}</h3>
            <p class="text-gray-300 mb-4">{{ post.excerpt }}</p>
            <router-link :to="`/blog/${post.id}`" class="text-cyan-400 hover:underline font-semibold">Leer más</router-link>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'

const posts = [
  {
    id: 1,
    title: "5 Tendencias de Desarrollo Web 2025",
    excerpt: "Descubre las tecnologías que dominarán el desarrollo web este año.",
    image: "/assets/blog1.jpg",
  },
  {
    id: 2,
    title: "Inteligencia Artificial en Negocios",
    excerpt: "Cómo la IA está transformando la manera de operar las empresas.",
    image: "/assets/blog2.jpg",
  },
  {
    id: 3,
    title: "Optimización de Apps Móviles",
    excerpt: "Consejos para mejorar el rendimiento y la experiencia de usuario.",
    image: "/assets/blog3.jpg",
  },
]
</script>
