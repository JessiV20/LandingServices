<template>
  <nav class="w-full z-30">
    <div class="backdrop-blur-xl bg-gradient-to-b from-[#1b1630]/80 to-[#0f0c1f]/80 border-b border-white/5">
      <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div class="flex items-center space-x-4">
            <img 
                :src="logo"
                alt="Logo Jixonix"
                class="w-15 h-15 rounded-full object-cover"
            >
            <span class="text-4xl font-bold text-white">Jixonix</span>
        </div>

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

      </div>
    </div>
  </nav>
</template>
<script setup>
import logo from '@/assets/images/logo.png'
</script>