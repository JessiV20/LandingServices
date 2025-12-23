<template>
  <footer class="relative text-gray-400 pt-24 w-full">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.15),transparent_60%)] pointer-events-none"></div>
    <div class="relative w-full px-6 gap-12 flex flex-row justify-between flex-wrap max-w-7xl mx-auto">
      <div>
        <h4 class="text-white font-semibold mb-4 text-2xl">Product</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-purple-400">Overview</a></li>
          <li><a href="#" class="hover:text-purple-400">Integrations</a></li>
          <li><a href="#" class="hover:text-purple-400">Solutions</a></li>
          <li><a href="#" class="hover:text-purple-400">Tutorials</a></li>
          <li><a href="#" class="hover:text-purple-400">Pricing</a></li>
          <li><a href="#" class="hover:text-purple-400">Releases</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-semibold mb-4 text-2xl">Company</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-purple-400">About</a></li>
          <li><a href="#" class="hover:text-purple-400">Careers</a></li>
          <li><a href="#" class="hover:text-purple-400">Press</a></li>
          <li><a href="#" class="hover:text-purple-400">News</a></li>
          <li><a href="#" class="hover:text-purple-400">Media kit</a></li>
          <li><a href="#" class="hover:text-purple-400">Contact</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-semibold mb-4 text-2xl">Integrations</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-purple-400">Slack</a></li>
          <li><a href="#" class="hover:text-purple-400">Trello</a></li>
          <li class="flex items-center gap-2">
            <a href="#" class="hover:text-purple-400">Quickbooks</a>
            <span class="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400">New</span>
          </li>
          <li><a href="#" class="hover:text-purple-400">Dropbox</a></li>
          <li><a href="#" class="hover:text-purple-400">Gmail</a></li>
          <li><a href="#" class="hover:text-purple-400">Salesforce</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-semibold mb-4 text-2xl">Resources</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-purple-400">Blog</a></li>
          <li><a href="#" class="hover:text-purple-400">Newsletter</a></li>
          <li><a href="#" class="hover:text-purple-400">Events</a></li>
          <li><a href="#" class="hover:text-purple-400">Help center</a></li>
          <li><a href="#" class="hover:text-purple-400">Tutorials</a></li>
          <li><a href="#" class="hover:text-purple-400">Support</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-semibold mb-4 text-2xl">Legal</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-purple-400">Terms</a></li>
          <li><a href="#" class="hover:text-purple-400">Privacy</a></li>
          <li><a href="#" class="hover:text-purple-400">Cookies</a></li>
          <li><a href="#" class="hover:text-purple-400">Licenses</a></li>
          <li><a href="#" class="hover:text-purple-400">Security</a></li>
          <li><a href="#" class="hover:text-purple-400">Settings</a></li>
        </ul>
      </div>
    </div>

    <div
      class="relative max-w-7xl mx-auto mt-20 px-6 py-6 rounded-2xl
             bg-white/5 border border-white/10 flex flex-col md:flex-row
             items-center justify-between gap-6"
    >

      <div class="flex items-center gap-3 text-white font-semibold">
        <div class="w-8 h-8 ">
            <img
                :src="logo"
                alt="Logo Jixonix"
                class="w-8 h-8 rounded-full object-cover"
            />
        </div>
        Jixonix
      </div>


      <div class="flex flex-wrap items-center gap-6 text-sm">
        <a href="#" class="hover:text-purple-400">See what’s new</a>
        <a href="#" class="hover:text-purple-400">How it works</a>
        <a href="#" class="hover:text-purple-400">Watch tutorials</a>
        <a href="#" class="hover:text-purple-400">Talk to us</a>
        <a href="#" class="hover:text-purple-400">Life at Jixonix</a>
      </div>
    </div>

    <p class="text-center text-sm text-gray-500 mt-10 pb-8">
      © 2025 Jixonix. All rights reserved.
    </p>
  </footer>
</template>
<script setup>
import logo from '@/assets/images/logo.png'
</script>