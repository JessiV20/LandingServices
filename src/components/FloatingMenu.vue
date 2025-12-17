<template>
  <div class="relative z-40 ">
    <div
      class="fixed top-0 pt-4 flex justify-center w-full mt-4"
    >
      <ul
        class="hidden md:flex items-center space-x-8 px-6 py-2 rounded-full
               bg-white/5 backdrop-blur-xl
               border border-white/10
               text-sm text-gray-300"
      >
        <li><router-link to="/" class="hover:text-purple-400 transition">Home</router-link></li>
        <li><router-link to="/services" class="hover:text-purple-400 transition">Services</router-link></li>
        <li><router-link to="/portfolio" class="hover:text-purple-400 transition">Portfolio</router-link></li>
        <li><router-link to="/team" class="hover:text-purple-400 transition">Team</router-link></li>
        <li><router-link to="/contact" class="hover:text-purple-400 transition">Contact</router-link></li>
      </ul>
    </div>
  </div>
</template>
