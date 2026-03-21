<script setup>
import { Moon, Sun } from 'lucide-vue-next'
import { useTheme } from '../composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button
    @click="toggleTheme"
    class="relative w-10 h-10 rounded-full flex items-center justify-center text-[#42514D] hover:text-primary hover:bg-light dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/10 transition-colors overflow-hidden cursor-pointer"
    aria-label="Toggle theme"
  >
    <div
      :class="[
        'absolute transition-all duration-500 ease-in-out',
        theme === 'light'
          ? 'opacity-100 rotate-0 scale-100'
          : 'opacity-0 -rotate-90 scale-50'
      ]"
    >
      <Moon :size="20" />
    </div>

    <div
      :class="[
        'absolute transition-all duration-500 ease-in-out',
        theme === 'dark'
          ? 'opacity-100 rotate-0 scale-100'
          : 'opacity-0 rotate-90 scale-50'
      ]"
    >
      <Sun :size="20" />
    </div>
  </button>
</template>