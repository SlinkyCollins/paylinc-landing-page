<template>
  <footer class="bg-white dark:bg-dark-base border-t border-gray-border dark:border-dark-border pt-16 pb-8 transition-colors duration-300">
    <div
      class="max-w-300 mx-auto px-3 sm:px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
    >
      <!-- Logo / Name -->
      <a class="flex items-center gap-2.5">
        <img :src="logo" alt="Paylinc Logo" class="w-7 h-7 object-contain" />
        <span class="font-heading font-bold text-[18px] text-primary dark:text-dark-text tracking-tight">Paylinc</span>
      </a>

      <!-- Copyright -->
      <p class="text-[12px] text-text-secondary dark:text-dark-muted">
        © {{ new Date().getFullYear() }} Paylinc. All rights reserved.
        <!-- <a
            href="https://collynx.vercel.app/"
            target="_blank"
            rel="noopener"
            class="ml-1 opacity-70 hover:opacity-100 transition dark:text-dark-muted dark:hover:text-dark-text"
        >
          · Built by Collynx
        </a> -->
      </p>

      <!-- Links -->
      <!-- <div class="flex flex-wrap justify-center sm:justify-end gap-6 text-[14px] text-text-secondary dark:text-dark-muted">
        <a href="#" class="hover:text-primary dark:hover:text-dark-text transition-colors">Privacy</a>
        <a href="#" class="hover:text-primary dark:hover:text-dark-text transition-colors">Terms</a>
        <a href="#" class="hover:text-primary dark:hover:text-dark-text transition-colors">Contact</a>
      </div> -->
    </div>
  </footer>
</template>

<script setup>
import logo from '@/assets/images/logo.png'
</script>
