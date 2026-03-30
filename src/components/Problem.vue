<template>
  <section id="problem"
    class="relative bg-light-gray dark:bg-dark-surface py-10 sm:py-16 md:py-24 overflow-hidden transition-colors duration-300 border-t border-gray-200/60 dark:border-dark-border/40"
    ref="sectionRef">
    <div
      class="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,var(--color-light)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_top_right,var(--color-dark-elevated)_0%,transparent_70%)] opacity-30 pointer-events-none transition-colors duration-300">
    </div>

    <div class="max-w-300 mx-auto px-3 sm:px-5 md:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row gap-12 items-center">
        <div class="lg:w-1/2">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-3 h-3 bg-primary dark:bg-dark-muted rounded-sm"></div>
            <span class="text-[12px] font-medium text-primary dark:text-dark-muted uppercase tracking-[0.08em]">The
              Problem</span>
          </div>
          <h2 class="text-[28px] md:text-[32px] font-bold leading-[1.2] mb-4">
            <span class="text-primary dark:text-dark-text">Transport is already stressful.<br>Paying for it shouldn't
              be.</span>
          </h2>
          <div class="text-[16px] text-[#42514D] dark:text-dark-muted leading-[1.6] max-w-120 space-y-4">
            <p>Every day, commuters deal with delays, arguments, and the stress of handling cash.</p>
            <p>Drivers repeat prices, passengers look for change, and movement slows down before the trip even starts.
            </p>
            <p class="font-bold text-primary dark:text-dark-text">
              Transport should move people forward — not slow them down.
            </p>
          </div>
        </div>

        <div class="lg:w-1/2 w-full">
          <div
            class="relative rounded-3xl overflow-hidden aspect-4/3 shadow-lg border border-gray-border/50 dark:border-dark-border">
            <img :src="trafficImage" alt="Traffic and transport stress"
              class="w-full h-full object-cover dark:opacity-80 transition-opacity duration-300" loading="lazy"
              referrerpolicy="no-referrer">
            <div class="absolute inset-0 bg-primary/10 dark:bg-dark-base/40 mix-blend-multiply"></div>
          </div>
        </div>
      </div>

      <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" ref="cardsRef">
        <div
          class="bg-white dark:bg-dark-elevated rounded-[20px] p-6 shadow-[0_2px_8px_rgba(26,60,56,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,60,56,0.08)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 min-h-55 flex flex-col border border-transparent dark:border-dark-border">
          <div class="w-10 h-10 rounded-lg bg-alert-red-bg dark:bg-red-900/30 flex items-center justify-center mb-6">
            <TriangleAlert :size="20" class="text-alert-red-icon dark:text-red-400" />
          </div>
          <h3 class="text-[18px] font-semibold text-primary dark:text-dark-text mb-3">No Change Wahala</h3>
          <p class="text-[14px] text-text-secondary dark:text-dark-muted leading-[1.6]">
            Passengers don't have exact cash. Drivers don't have change. Trips start with stress and arguments.
          </p>
        </div>

        <div
          class="bg-white dark:bg-dark-elevated rounded-[20px] p-6 shadow-[0_2px_8px_rgba(26,60,56,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,60,56,0.08)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 min-h-55 flex flex-col border border-transparent dark:border-dark-border">
          <div
            class="w-10 h-10 rounded-lg bg-alert-yellow-bg dark:bg-yellow-900/30 flex items-center justify-center mb-6">
            <ShieldAlert :size="20" class="text-alert-yellow-icon dark:text-yellow-400" />
          </div>
          <h3 class="text-[18px] font-semibold text-primary dark:text-dark-text mb-3">Boarding Delays</h3>
          <p class="text-[14px] text-text-secondary dark:text-dark-muted leading-[1.6]">
            People pay one after another. Queues build up. Movement slows down.
          </p>
        </div>

        <div
          class="bg-white dark:bg-dark-elevated rounded-[20px] p-6 shadow-[0_2px_8px_rgba(26,60,56,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,60,56,0.08)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 min-h-55 flex flex-col border border-transparent dark:border-dark-border">
          <div class="w-10 h-10 rounded-lg bg-info-blue-bg dark:bg-blue-900/30 flex items-center justify-center mb-6">
            <Clock :size="20" class="text-info-blue-icon dark:text-blue-400" />
          </div>
          <h3 class="text-[18px] font-semibold text-primary dark:text-dark-text mb-3">Cash Leakages</h3>
          <p class="text-[14px] text-text-secondary dark:text-dark-muted leading-[1.6]">
            Drivers and operators lose money through missing cash and poor tracking.
          </p>
        </div>

        <div
          class="bg-white dark:bg-dark-elevated rounded-[20px] p-6 shadow-[0_2px_8px_rgba(26,60,56,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,60,56,0.08)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 min-h-55 flex flex-col border border-transparent dark:border-dark-border">
          <div class="w-10 h-10 rounded-lg bg-light dark:bg-dark-surface flex items-center justify-center mb-6">
            <TriangleAlert :size="20" class="text-primary dark:text-dark-text" />
          </div>
          <h3 class="text-[18px] font-semibold text-primary dark:text-dark-text mb-3">Daily Friction</h3>
          <p class="text-[14px] text-text-secondary dark:text-dark-muted leading-[1.6]">
            The same questions come up every ride “How much?” “Do you have change?” creating avoidable stress.
          </p>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { TriangleAlert, ShieldAlert, Clock } from 'lucide-vue-next'
import trafficImage from '@/assets/images/traffic.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const cardsRef = ref(null)

let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.fromTo(
      cardsRef.value?.children || [],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 70%',
        }
      }
    )
  }, sectionRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>
