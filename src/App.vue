<script setup>
import Audience from './components/Audience.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import PaymentApps from './components/PaymentApps.vue';
import Problem from './components/Problem.vue';
import Process from './components/Process.vue';
import Signup from './components/Signup.vue';
import Trust from './components/Trust.vue';
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    <main>
      <Hero />
      <PaymentApps />
      <Problem />
      <Process />
      <Audience />
      <Trust />
      <Signup />
    </main>
    <Footer />
  </div>
</template>