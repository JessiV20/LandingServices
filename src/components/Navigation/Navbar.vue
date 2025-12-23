<script setup>
  import { ref } from 'vue'
  import logo from '@/assets/images/logo.png'
  import MenuIcon from '../icons/Navigation/MenuIcon.vue'
  import CloseIcon from '../icons/Navigation/CloseIcon.vue'
  import HomeIcon from '../icons/Navigation/HomeIcon.vue'
  import ServicesIcon from '../icons/Navigation/ServicesIcon.vue'
  import PortfolioIcon from '../icons/Navigation/PortfolioIcon.vue'
  import TeamIcon from '../icons/Navigation/TeamIcon.vue'
  import ContactIcon from '../icons/Navigation/ContactIcon.vue'

  const isOpen = ref(false)
</script>

<template>
  <header class="w-full fixed top-0 z-50 ">
    <div class="w-full h-16 flex items-center justify-between px-6 md:px-10">
      <div class="flex items-center space-x-4">
        <img :src="logo" alt="Logo Jixonix" class="w-10 h-10 rounded-full object-cover" />
        <span class="text-2xl md:text-3xl font-bold text-white">Jixonix</span>
      </div>
      <nav class="hidden md:flex">
        <ul class="flex gap-10 text-gray-300">
          <li><router-link to="/" class="hover:text-purple-400">Home</router-link></li>
          <li><router-link to="/services" class="hover:text-purple-400">Services</router-link></li>
          <li><router-link to="/portfolio" class="hover:text-purple-400">Portfolio</router-link></li>
          <li><router-link to="/team" class="hover:text-purple-400">Team</router-link></li>
          <li><router-link to="/contact" class="hover:text-purple-400">Contact</router-link></li>
        </ul>
      </nav>
      <button
        class="md:hidden text-gray-300 z-50 bg-transparent border-none p-0 focus:outline-none"
        @click="isOpen = !isOpen"
      >
        <MenuIcon v-if="!isOpen" class="w-7 h-7" />
        <CloseIcon v-else class="w-7 h-7" />
      </button>
    </div>
    <transition name="fade">
      <nav v-if="isOpen" class="fixed inset-0 bg-[#1b1630]/50 backdrop-blur-xl md:hidden flex flex-col">
        <div class="h-16 flex items-center justify-between px-6">
          <div class="flex items-center space-x-4">
            <img
              :src="logo"
              alt="Logo Jixonix"
              class="w-10 h-10 rounded-full object-cover"
            />
            <span class="text-2xl font-bold text-white">Jixonix</span>
          </div>
          <button 
            @click="isOpen = false" 
            class="text-gray-300 bg-transparent border-none p-0 focus:outline-none"
          >
            <CloseIcon class="w-7 h-7" />
          </button>
        </div>
        <ul class="px-6 pt-10 flex flex-col gap-10 text-2xl font-semibold text-white text-start">
          <li>
            <router-link @click="isOpen = false" to="/" exact-active-class="bg-white/10 text-purple-400"
              class="flex items-center gap-3 px-4 py-3 rounded-xl transition">
              <HomeIcon class="inline w-8 h-8 mr-2" />
              Home
            </router-link>
          </li>
          <li>
            <router-link @click="isOpen = false" to="/services" exact-active-class="bg-white/10 text-purple-400"
              class="flex items-center gap-3 px-4 py-3 rounded-xl transition">
              <ServicesIcon class="inline w-8 h-8 mr-2" />
              Services
            </router-link>
          </li>
          <li>
            <router-link @click="isOpen = false" to="/portfolio" exact-active-class="bg-white/10 text-purple-400"
              class="flex items-center gap-3 px-4 py-3 rounded-xl transition">
              <PortfolioIcon class="inline w-8 h-8 mr-2" />
              Portfolio
            </router-link>
          </li>
          <li>
            <router-link @click="isOpen = false" to="/team" exact-active-class="bg-white/10 text-purple-400"
              class="flex items-center gap-3 px-4 py-3 rounded-xl transition">
              <TeamIcon class="inline w-8 h-8 mr-2" />
              Team
            </router-link>
          </li>
          <li>
            <router-link @click="isOpen = false" to="/contact" exact-active-class="bg-white/10 text-purple-400"
              class="flex items-center gap-3 px-4 py-3 rounded-xl transition">
              <ContactIcon class="inline w-8 h-8 mr-2" />
              Contact
            </router-link>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.25s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>