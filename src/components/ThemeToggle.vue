<script setup>
import { Moon, Sun } from 'lucide-vue-next'
import { useTheme } from '../composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button
    @click="toggleTheme"
    title="Toggle Light/Dark mode"
    class="relative flex h-10 w-10 min-h-10 min-w-10 shrink-0 items-center justify-center rounded-full text-[#42514D] transition-colors overflow-hidden cursor-pointer touch-manipulation hover:text-primary hover:bg-light dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/10"
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
