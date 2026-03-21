<template>
  <nav
    class="sticky top-0 z-50 bg-white dark:bg-dark-base h-18 border-b border-gray-border/50 dark:border-dark-border transition-colors duration-300">
    <div class="max-w-300 mx-auto h-full px-3 sm:px-5 md:px-8 flex items-center justify-between">
      <a href="#" class="flex items-center gap-2">
        <img :src="logo" alt="Paylinc Logo" class="w-8 h-8" />
        <span class="font-heading font-bold text-[20px] text-primary dark:text-dark-text">Paylinc</span>
      </a>

      <div class="hidden md:flex items-center gap-8">
        <a href="#problem"
          class="font-medium text-[16px] text-[#42514D] dark:text-dark-muted hover:text-primary dark:hover:text-dark-text hover:underline underline-offset-4 transition-colors">The
          Problem</a>
        <a href="#process"
          class="font-medium text-[16px] text-[#42514D] dark:text-dark-muted hover:text-primary dark:hover:text-dark-text hover:underline underline-offset-4 transition-colors">How
          it Works</a>
        <a href="#audience"
          class="font-medium text-[16px] text-[#42514D] dark:text-dark-muted hover:text-primary dark:hover:text-dark-text hover:underline underline-offset-4 transition-colors">Who
          it's For</a>
      </div>

      <div class="flex items-center gap-4">
        <ThemeToggle />
        <a href="#signup">
          <button class="btn-primary h-10 px-6">
            Join Early Access
          </button>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logo from '@/assets/images/logo.png'
import ThemeToggle from './ThemeToggle.vue';
</script>