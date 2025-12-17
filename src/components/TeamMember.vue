<template>
  <div class="bg-gray-800 p-6 rounded-xl text-center hover:scale-105 transition-transform shadow-lg">
    <img :src="photo" alt="Team Member" class="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-cyan-400">
    <h3 class="text-xl font-bold">{{ name }}</h3>
    <p class="text-gray-300">{{ role }}</p>
    <div class="flex justify-center space-x-4 mt-2">
      <a v-for="link in links" :key="link.icon" :href="link.url" class="text-cyan-400 hover:text-white transition">
        <component :is="link.icon" class="w-5 h-5"/>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  role: String,
  photo: String,
  links: { type: Array, default: () => [] } // [{icon: IconComponent, url: '...'}]
});
</script>
