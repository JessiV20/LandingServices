<template>
  <MainLayout>
    <FloatingMenu />
    <section
      class="relative min-h-screen py-32 px-6
             bg-gradient-to-b from-[#1b1630] via-[#120f24] to-[#0b0916]
             text-white overflow-hidden"
    >
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(168,85,247,0.18),transparent_60%)]"></div>

      <div
        class="relative max-w-7xl mx-auto grid gap-20
               md:grid-cols-2 items-start" >
        <div>
          <span
            class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full
                   bg-white/5 border border-white/10
                   text-sm text-gray-300"
          >
            📬 Contáctanos
          </span>

          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            Pongámonos en
            <span class="text-purple-400">contacto</span>
          </h1>

          <p class="text-gray-400 text-lg mb-10 max-w-xl">
            Escríbenos para resolver dudas, solicitar una demo o empezar a construir
            una solución digital a la medida de tu negocio.
          </p>

          <ul class="space-y-4 text-gray-300">
            <li class="flex items-center gap-3">
              <span class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400">✓</span>
              Agenda una llamada con nuestro equipo
            </li>
            <li class="flex items-center gap-3">
              <span class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400">✓</span>
              Descubre el plan ideal para tu proyecto
            </li>
            <li class="flex items-center gap-3">
              <span class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400">✓</span>
              Solicita una demo o asesoría técnica
            </li>
          </ul>
        </div>

        <form
          class="relative bg-white/5 backdrop-blur-xl
                 border border-white/10
                 rounded-2xl p-10 space-y-6"
        >
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="text-sm text-gray-300 mb-2 block">Nombre</label>
              <input
                type="text"
                placeholder="Juan"
                class="w-full p-4 rounded-xl bg-white/5 text-white
                       border border-white/10
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label class="text-sm text-gray-300 mb-2 block">Apellido</label>
              <input
                type="text"
                placeholder="Pérez"
                class="w-full p-4 rounded-xl bg-white/5 text-white
                       border border-white/10
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="text-sm text-gray-300 mb-2 block">Tema</label>
              <select
                class="w-full p-4 rounded-xl bg-white/5 text-white
                       border border-white/10
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option class="bg-[#120f24]">General</option>
                <option class="bg-[#120f24]">Desarrollo Web</option>
                <option class="bg-[#120f24]">Apps Móviles</option>
                <option class="bg-[#120f24]">IA & Automatización</option>
                <option class="bg-[#120f24]">Soporte</option>
              </select>
            </div>

            <div>
              <label class="text-sm text-gray-300 mb-2 block">Correo</label>
              <input
                type="email"
                placeholder="tu@email.com"
                class="w-full p-4 rounded-xl bg-white/5 text-white
                       border border-white/10
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="text-sm text-gray-300 mb-2 block">Empresa</label>
              <input
                type="text"
                placeholder="Tech Solutions"
                class="w-full p-4 rounded-xl bg-white/5 text-white
                       border border-white/10
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label class="text-sm text-gray-300 mb-2 block">Tamaño del equipo</label>
              <select
                class="w-full p-4 rounded-xl bg-white/5 text-white
                       border border-white/10
                       focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option class="bg-[#120f24]">1–10</option>
                <option class="bg-[#120f24]">11–50</option>
                <option class="bg-[#120f24]">51–200</option>
                <option class="bg-[#120f24]">200+</option>
              </select>
            </div>
          </div>

          <div>
            <label class="text-sm text-gray-300 mb-2 block">¿Cómo podemos ayudarte?</label>
            <textarea
              rows="5"
              placeholder="Cuéntanos sobre tu proyecto..."
              class="w-full p-4 rounded-xl bg-white/5 text-white
                     border border-white/10
                     focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <div class="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
            <p class="text-sm text-gray-400">
              O escríbenos a
              <a href="mailto:contacto@Jixonix.com" class="text-purple-400 hover:underline">
                contacto@Jixonix.com
              </a>
            </p>

            <button
              type="submit"
              class="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-500
                     transition font-medium"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import FloatingMenu from '../components/FloatingMenu.vue'
</script>
