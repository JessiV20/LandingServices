<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <Navbar />
    <main >
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>
