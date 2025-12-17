<template>
  <nav class="fixed top-0 w-full z-50">
    <div class="backdrop-blur-xl bg-gradient-to-b from-[#1b1630]/80 to-[#0f0c1f]/80 border-b border-white/5">
      <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 rounded-full bg-purple-500"></div>
          <span class="text-xl font-semibold text-white">TechBrand</span>
        </div>

        <ul
          class="hidden md:flex items-center space-x-8 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
        >
          <li><router-link to="/" class="hover:text-purple-400 transition">Home</router-link></li>
          <li><router-link to="/services" class="hover:text-purple-400 transition">Services</router-link></li>
          <li><router-link to="/portfolio" class="hover:text-purple-400 transition">Portfolio</router-link></li>
          <li><router-link to="/team" class="hover:text-purple-400 transition">Team</router-link></li>
          <li><router-link to="/contact" class="hover:text-purple-400 transition">Contact</router-link></li>
        </ul>

        <div class="hidden md:flex items-center space-x-4">
          <router-link to="/login" class="text-gray-300 hover:text-white transition">
            Sign in
          </router-link>
          <router-link
            to="/register"
            class="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition text-white text-sm font-medium"
          >
            Sign up
          </router-link>
        </div>

        <button class="md:hidden text-white" @click="open = !open">
          ☰
        </button>
      </div>

      <div v-if="open" class="md:hidden px-6 pb-6">
        <ul class="space-y-4 text-gray-300">
          <li><router-link to="/" @click="open=false">Home</router-link></li>
          <li><router-link to="/services" @click="open=false">Services</router-link></li>
          <li><router-link to="/portfolio" @click="open=false">Portfolio</router-link></li>
          <li><router-link to="/team" @click="open=false">Team</router-link></li>
          <li><router-link to="/contact" @click="open=false">Contact</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>
