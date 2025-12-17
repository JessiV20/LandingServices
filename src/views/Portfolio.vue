<template>
  <MainLayout>
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
          🧩 Portafolio
        </span>

        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          Proyectos que
          <span class="text-purple-400">hablan por nosotros</span>
        </h1>

        <p class="text-gray-400 text-lg">
          Productos digitales diseñados con foco en performance, UX y escalabilidad.
        </p>
      </div>

      <div
        class="relative max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <ProjectPro
          title="Proyecto A"
          description="Web corporativa futurista"
          image="/assets/project1.jpg"
          link="#"
        />
        <ProjectPro
          title="Proyecto B"
          description="Aplicación móvil innovadora"
          image="/assets/project2.jpg"
          link="#"
        />
        <ProjectPro
          title="Proyecto C"
          description="Sistema de IA avanzado"
          image="/assets/project3.jpg"
          link="#"
        />
        <ProjectPro
          title="Proyecto D"
          description="Plataforma SaaS para empresas"
          image="/assets/project4.jpg"
          link="#"
        />
        <ProjectPro
          title="Proyecto E"
          description="Landing page de alta conversión"
          image="/assets/project5.jpg"
          link="#"
        />
        <ProjectPro
          title="Proyecto F"
          description="Automatización de procesos"
          image="/assets/project6.jpg"
          link="#"
        />
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import ProjectPro from '../components/ProjectPro.vue'
</script>
