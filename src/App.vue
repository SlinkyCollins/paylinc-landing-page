<script setup>
import Audience from './components/Audience.vue'
import BackToTop from './components/BackToTop.vue'
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'
import Navbar from './components/Navbar.vue'
import Problem from './components/Problem.vue'
import Process from './components/Process.vue'
import Signup from './components/Signup.vue'
import Solution from './components/Solution.vue'
import Trust from './components/Trust.vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>

<template>
  <SpeedInsights />
  <div class="min-h-screen bg-white dark:bg-dark-base transition-colors duration-300">
    <Navbar />
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Process />
      <Trust />
      <Audience />
      <Signup />
    </main>
    <Footer />
    <BackToTop />
  </div>
</template>