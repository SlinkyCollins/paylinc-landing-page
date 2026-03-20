<template>
  <footer class="border-t border-gray-border py-10 px-4 sm:px-6">
    <div
      class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
    >
      <!-- Logo / Name -->
      <a href="#" class="flex items-center gap-2.5">
        <img :src="logo" alt="Paylinc Logo" class="w-7 h-7 object-contain" />
        <span class="text-sm font-bold text-primary tracking-tight">Paylinc</span>
      </a>

      <!-- Copyright -->
      <p class="text-xs text-text-secondary">
        © {{ new Date().getFullYear() }} Paylinc. All rights reserved.
        <a
            href="https://collynx.vercel.app/"
            target="_blank"
            rel="noopener"
            class="ml-1 opacity-70 hover:opacity-100 transition"
        >
          · Built by Collynx
        </a>
      </p>

      <!-- Links -->
      <div class="flex flex-wrap justify-center sm:justify-end gap-6 text-xs text-text-secondary">
        <a href="#" class="hover:text-primary transition-colors">Privacy</a>
        <a href="#" class="hover:text-primary transition-colors">Terms</a>
        <a href="#" class="hover:text-primary transition-colors">Contact</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import logo from '@/assets/images/logo.png'
</script>