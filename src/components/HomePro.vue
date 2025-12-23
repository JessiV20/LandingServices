<script setup>
  defineProps({

    title: String,
    description: String,
    link: String,
  })
</script>

<template>
  <div class="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8
            hover:border-purple-500/50 transition text-start">
            <div class="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-purple-500/20 text-purple-400 text-2xl">
              <slot />
            </div>
            <h3 class="text-xl font-semibold mb-3">
              {{ title }}
            </h3>

            <p class="text-gray-400 mb-6">
              {{ description }}
            </p>

            <a href={{ link }} class="text-purple-400 font-medium group-hover:underline">
              Saber más →
            </a>
          </div>
</template>