<template>
  <div
    class="group relative p-8 rounded-2xl
           bg-white/5 backdrop-blur-xl
           border border-white/10
           transition-all duration-500
           hover:-translate-y-3 hover:shadow-[0_30px_80px_-20px_rgba(168,85,247,0.45)]"
  >

    <div
      class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
             bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.15),transparent_60%)]
             transition-opacity duration-500"
    ></div>

    <div class="relative z-10">
      <div
        class="text-4xl mb-6 w-14 h-14 flex items-center justify-center
               rounded-xl bg-purple-500/20 text-purple-400
               group-hover:scale-110 transition-transform duration-300"
      >
        {{ icon }}
      </div>

      <h3 class="text-xl font-semibold mb-3">
        {{ title }}
      </h3>

      <p class="text-gray-400 mb-6">
        {{ description }}
      </p>

      <div class="flex items-center text-sm text-purple-400 font-medium">
        <span>Explorar servicio</span>
        <span class="ml-2 transform transition-transform group-hover:translate-x-2">→</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
})
</script>
