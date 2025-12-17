<template>
  <MainLayout>
    <FloatingMenu />
    <section
      class="relative min-h-screen py-32 px-6
             bg-gradient-to-b from-[#1b1630] via-[#120f24] to-[#0b0916]
             text-white overflow-hidden" >

      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_60%)]"></div>

      <div class="relative max-w-4xl mx-auto text-center mb-24">
        <span
          class="inline-flex items-center px-4 py-2 mb-6 rounded-full
                 bg-white/5 border border-white/10 text-sm text-gray-300"
        >
          👥 Equipo
        </span>

        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          Personas detrás de
          <span class="text-purple-400">la innovación</span>
        </h1>

        <p class="text-gray-400 text-lg">
          Un equipo multidisciplinario enfocado en crear productos digitales de alto impacto.
        </p>
      </div>

      <div
        class="relative max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        <TeamPro
          name="Ana Pérez"
          role="CEO & Founder"
          photo="/assets/team1.jpg"
          :links="[
            { icon: 'Linkedin', url: '#' },
            { icon: 'Twitter', url: '#' }
          ]"
        />

        <TeamPro
          name="Luis Gómez"
          role="CTO"
          photo="/assets/team2.jpg"
          :links="[
            { icon: 'Github', url: '#' },
            { icon: 'Linkedin', url: '#' }
          ]"
        />

        <TeamPro
          name="María Torres"
          role="Lead Designer"
          photo="/assets/team3.jpg"
          :links="[
            { icon: 'Dribbble', url: '#' },
            { icon: 'Linkedin', url: '#' }
          ]"
        />
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import TeamPro from '../components/TeamPro.vue'
import FloatingMenu from '../components/FloatingMenu.vue'
</script>
