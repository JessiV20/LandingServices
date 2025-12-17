<template>
  <a
    :href="link"
    class="group relative rounded-2xl overflow-hidden
           bg-white/5 border border-white/10
           backdrop-blur-xl
           transition-all duration-500
           hover:-translate-y-3
           hover:shadow-[0_30px_80px_-20px_rgba(168,85,247,0.45)]"
  >

    <div class="relative h-72 overflow-hidden">
      <img
        :src="image"
        alt="Project image"
        class="w-full h-full object-cover
               transition-transform duration-700
               group-hover:scale-110"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t
               from-[#0b0916]/90 via-[#0b0916]/40 to-transparent
               opacity-80"
      ></div>
    </div>

    <div
      class="absolute inset-0 flex flex-col justify-end p-6
             opacity-0 group-hover:opacity-100
             transition-opacity duration-500"
    >
      <h3 class="text-xl font-semibold mb-2">
        {{ title }}
      </h3>

      <p class="text-gray-300 text-sm mb-4">
        {{ description }}
      </p>

      <div
        class="inline-flex items-center text-sm font-medium text-purple-400"
      >
        Ver proyecto
        <span class="ml-2 transform transition-transform group-hover:translate-x-2">
          →
        </span>
      </div>
    </div>
  </a>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  link: String,
})
</script>
