<template>
  <div
    class="group relative p-8 rounded-2xl
           bg-white/5 backdrop-blur-xl
           border border-white/10
           transition-all duration-500
           hover:-translate-y-3
           hover:shadow-[0_30px_80px_-20px_rgba(168,85,247,0.45)]"
  >

    <div
      class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
             bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.15),transparent_60%)]
             transition-opacity duration-500"
    ></div>

    <div class="relative z-10 text-center">

      <div class="relative w-32 h-32 mx-auto mb-6">
        <img
          :src="photo"
          alt="Team member"
          class="w-full h-full object-cover rounded-full border-4 border-purple-500/40"
        />

        <div
          class="absolute inset-0 rounded-full border border-purple-400/30
                 group-hover:scale-110 transition-transform duration-500"
        ></div>
      </div>

      <h3 class="text-xl font-semibold mb-1">
        {{ name }}
      </h3>

      <p class="text-gray-400 mb-6">
        {{ role }}
      </p>

      <div class="flex justify-center gap-4">
        <a
          v-for="link in links"
          :key="link.url"
          :href="link.url"
          class="w-10 h-10 flex items-center justify-center rounded-full
                 bg-white/5 border border-white/10
                 hover:bg-purple-500/20 hover:border-purple-400
                 transition"
        >
          <component :is="link.icon" class="w-5 h-5 text-purple-400" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  role: String,
  photo: String,
  links: {
    type: Array,
    default: () => [],
  },
})
</script>
