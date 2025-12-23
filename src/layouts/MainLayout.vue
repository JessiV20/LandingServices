<script setup>
import Navbar from '../components/Navigation/Navbar.vue'
import Footer from '../components/Navigation/Footer.vue'
</script>

<template>
  <div class="text-white min-h-screen">
    <div class="min-h-[100dvh] w-full fixed inset-0 -z-10 bg-gradient-to-b from-[#1b1630] via-[#120f24] to-[#0b0916]"></div>
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

