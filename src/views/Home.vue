<template>
  <MainLayout>
    <FloatingMenu />
    <section
      class="relative min-h-screen flex items-center justify-center text-center px-6
             bg-gradient-to-b from-[#1b1630] via-[#120f24] to-[#0b0916]
             text-white overflow-hidden" >
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.15),transparent_60%)]"></div>

      <div class="relative z-10 max-w-4xl">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full
                 bg-white/5 border border-white/10 text-sm text-gray-300"
        >
          ✨ Nueva versión disponible
        </div>

        <h1 class="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Innovación para la
          <span class="text-purple-400">colaboración digital</span>
        </h1>

        <p class="text-gray-400 text-lg mb-10">
          Creamos soluciones tecnológicas modernas, escalables y visualmente impactantes.
        </p>


        <div class="flex justify-center gap-4">
          <router-link
            to="/services"
            class="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 transition font-medium"
          >
            Empezar ahora
          </router-link>

          <button
            class="px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition"
          >
            ▶ Ver video
          </button>
        </div>
      </div>
    </section>

    <section
      class="relative py-32 px-6
             bg-gradient-to-b from-[#0b0916] to-[#090812]
             text-white overflow-hidden" >

      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_60%)]"></div>

      <div class="relative max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <span
            class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full
                   bg-white/5 border border-white/10
                   text-sm text-gray-300"
          >
            🧩 Servicios
          </span>

          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Soluciones que
            <span class="text-purple-400">impulsan tu negocio</span>
          </h2>

          <p class="text-gray-400 max-w-2xl mx-auto text-lg">
            Diseñamos, desarrollamos y escalamos productos digitales con tecnología de alto nivel.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-10">
          <div
            class="group relative bg-white/5 backdrop-blur-xl
                   border border-white/10
                   rounded-2xl p-8
                   hover:border-purple-500/50
                   transition"
          >
            <div
              class="w-12 h-12 mb-6 flex items-center justify-center
                     rounded-xl bg-purple-500/20 text-purple-400 text-2xl"
            >
              🌐
            </div>

            <h3 class="text-xl font-semibold mb-3">
              Desarrollo Web
            </h3>

            <p class="text-gray-400 mb-6">
              Plataformas modernas, rápidas y escalables enfocadas en conversión y experiencia de usuario.
            </p>

            <span
              class="text-purple-400 font-medium group-hover:underline"
            >
              Saber más →
            </span>
          </div>

          <div
            class="group relative bg-white/5 backdrop-blur-xl
                   border border-white/10
                   rounded-2xl p-8
                   hover:border-purple-500/50
                   transition"
          >
            <div
              class="w-12 h-12 mb-6 flex items-center justify-center
                     rounded-xl bg-purple-500/20 text-purple-400 text-2xl"
            >
              📱
            </div>

            <h3 class="text-xl font-semibold mb-3">
              Apps Móviles
            </h3>

            <p class="text-gray-400 mb-6">
              Aplicaciones iOS y Android con alto rendimiento, seguridad y UX impecable.
            </p>

            <span
              class="text-purple-400 font-medium group-hover:underline"
            >
              Saber más →
            </span>
          </div>

          <div
            class="group relative bg-white/5 backdrop-blur-xl
                   border border-white/10
                   rounded-2xl p-8
                   hover:border-purple-500/50
                   transition"
          >
            <div
              class="w-12 h-12 mb-6 flex items-center justify-center
                     rounded-xl bg-purple-500/20 text-purple-400 text-2xl"
            >
              🤖
            </div>

            <h3 class="text-xl font-semibold mb-3">
              IA & Automatización
            </h3>

            <p class="text-gray-400 mb-6">
              Optimizamos procesos con inteligencia artificial, analítica avanzada y automatización.
            </p>

            <span
              class="text-purple-400 font-medium group-hover:underline"
            >
              Saber más →
            </span>
          </div>
        </div>
      </div>
    </section>

  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import FloatingMenu from '../components/FloatingMenu.vue'
</script>
