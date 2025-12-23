<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import ServicePro from '../components/ServicePro.vue'
</script>


<template>
  <MainLayout>
    <section
      class="relative min-h-screen py-32 px-6
             text-white overflow-hidden"  >
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_60%)]"></div>

      <div class="relative max-w-4xl mx-auto text-center mb-24">
        <span
          class="inline-flex items-center px-4 py-2 mb-6 rounded-full
                 bg-white/5 border border-white/10 text-sm text-gray-300"
        >
          ⚡ Servicios
        </span>

        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          Soluciones diseñadas para
          <span class="text-purple-400">escalar tu negocio</span>
        </h1>

        <p class="text-gray-400 text-lg">
          Tecnología moderna, performance extremo y diseño que comunica valor.
        </p>
      </div>

      <div
        class="relative max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <ServicePro
          icon="🌐"
          title="Desarrollo Web"
          description="Aplicaciones web rápidas, seguras y escalables con tecnologías modernas."
        />

        <ServicePro
          icon="📱"
          title="Aplicaciones Móviles"
          description="Apps nativas y multiplataforma con experiencia de usuario impecable."
        />

        <ServicePro
          icon="🤖"
          title="Inteligencia Artificial"
          description="Automatización, análisis predictivo y soluciones basadas en datos."
        />

        <ServicePro
          icon="☁️"
          title="Cloud & DevOps"
          description="Infraestructura en la nube, CI/CD y despliegues sin fricción."
        />

        <ServicePro
          icon="🛡️"
          title="Ciberseguridad"
          description="Protección avanzada, auditorías y hardening de sistemas."
        />
      </div>
    </section>
  </MainLayout>
</template>

