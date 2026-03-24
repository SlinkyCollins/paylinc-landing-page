<template>
  <nav
    class="sticky top-0 z-50 bg-white/95 dark:bg-dark-base/95 backdrop-blur-md h-18 border-b border-gray-border/50 dark:border-dark-border transition-colors duration-300">
    <div class="max-w-300 mx-auto h-full px-3 sm:px-5 md:px-8 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <a href="#" class="flex items-center gap-2">
          <img :src="logo" alt="Paylinc Logo" class="w-8 h-8" />
          <span class="font-heading font-bold text-[20px] text-primary dark:text-dark-text">Paylinc</span>
        </a>
      </div>

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

      <div class="flex items-center gap-3 md:gap-4">
        <ThemeToggle />
        <button class="hidden md:flex btn-primary h-10 px-6" @click="scrollToSignup">
          Join Early Access
        </button>
        <button
          class="md:hidden w-10 h-10 flex items-center justify-center text-primary dark:text-dark-text rounded-full hover:bg-gray-100 dark:hover:bg-dark-elevated transition-colors"
          @click="toggleMobileMenu" aria-label="Toggle menu">
          <X v-if="isMobileMenuOpen" :size="24" />
          <Menu v-else :size="24" />
        </button>
      </div>
    </div>
  </nav>

  <div
    :class="`md:hidden fixed inset-0 z-40 bg-black/20 dark:bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`"
    :style="{ top: '72px' }" @click="closeMobileMenu" />

  <div
    :class="`md:hidden fixed left-4 right-4 z-50 bg-white dark:bg-dark-surface rounded-3xl shadow-[0_24px_48px_rgba(0,0,0,0.1)] dark:shadow-[0_24px_48px_rgba(0,0,0,0.4)] border border-gray-100 dark:border-dark-border overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMobileMenuOpen ? 'opacity-100 translate-y-0 scale-100 visible' : 'opacity-0 -translate-y-4 scale-[0.98] invisible pointer-events-none'}`"
    :style="{ top: '88px' }">
    <div class="flex flex-col p-2">
      <div class="flex flex-col">
        <a href="#problem" @click="closeMobileMenu"
          class="flex items-center px-6 py-4 text-[18px] font-semibold text-primary dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-xl transition-colors">
          The Problem
        </a>
        <a href="#process" @click="closeMobileMenu"
          class="flex items-center px-6 py-4 text-[18px] font-semibold text-primary dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-xl transition-colors">
          How it Works
        </a>
        <a href="#audience" @click="closeMobileMenu"
          class="flex items-center px-6 py-4 text-[18px] font-semibold text-primary dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-elevated rounded-xl transition-colors">
          Who it's For
        </a>
      </div>
      <div class="p-4 mt-2 border-t border-gray-100 dark:border-dark-border">
        <button @click="handleMobileSignupClick"
          class="w-full btn-primary h-14 text-[16px] font-bold shadow-lg shadow-primary/25 rounded-xl">
          Join Early Access
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from '@/assets/images/logo.png'
import { onUnmounted, ref, watch } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import ThemeToggle from './ThemeToggle.vue'

const isMobileMenuOpen = ref(false)

const scrollToSignup = () => {
  document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleMobileSignupClick = () => {
  closeMobileMenu()
  scrollToSignup()
}

watch(
  isMobileMenuOpen,
  (value) => {
    if (value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  },
  { immediate: true }
)

onUnmounted(() => {
  document.body.style.overflow = 'unset'
})
</script>
