<script setup>
import { nextTick, onMounted, onUnmounted } from 'vue'
import Audience from './components/Audience.vue'
import BackToTop from './components/BackToTop.vue'
import FAQ from './components/FAQ.vue'
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'
import Navbar from './components/Navbar.vue'
import Problem from './components/Problem.vue'
import Process from './components/Process.vue'
import Signup from './components/Signup.vue'
import Solution from './components/Solution.vue'
import Trust from './components/Trust.vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let refreshTimeoutId

const refreshScrollTriggers = () => {
  requestAnimationFrame(() => {
    ScrollTrigger.refresh()
  })
}

onMounted(() => {
  nextTick(() => {
    refreshScrollTriggers()
  })

  window.addEventListener('load', refreshScrollTriggers)
  refreshTimeoutId = window.setTimeout(refreshScrollTriggers, 300)
})

onUnmounted(() => {
  window.removeEventListener('load', refreshScrollTriggers)

  if (refreshTimeoutId) {
    window.clearTimeout(refreshTimeoutId)
  }
})
</script>

<template>
  <SpeedInsights />
  <div class="min-h-screen overflow-x-hidden bg-white dark:bg-dark-base transition-colors duration-300">
    <Navbar />
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Process />
      <Trust />
      <Audience />
      <FAQ />
      <Signup />
    </main>
    <Footer />
    <BackToTop />
  </div>
</template>
