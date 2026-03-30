<template>
  <section id="audience" class="bg-white dark:bg-dark-base py-10 sm:py-16 md:py-24 transition-colors duration-300 border-t border-gray-200/60 dark:border-dark-border/40" ref="sectionRef">
    <div class="max-w-300 mx-auto px-3 sm:px-5 md:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-3 h-3 bg-primary dark:bg-dark-muted rounded-sm"></div>
            <span class="text-[12px] font-medium text-primary dark:text-dark-muted uppercase tracking-[0.08em]">Target Audience</span>
          </div>
          <h2 class="text-[28px] md:text-[32px] font-bold text-primary dark:text-dark-text leading-[1.2]">
            Made for the people who move
          </h2>
        </div>
        <p class="text-[16px] text-text-secondary dark:text-dark-muted mt-4 md:mt-0">
          Making movement easier for...
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-200 mx-auto" ref="cardsRef">
        <div class="bg-light-gray dark:bg-dark-surface rounded-[20px] overflow-hidden shadow-[0_2px_8px_rgba(26,60,56,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,60,56,0.08)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col border border-transparent dark:border-dark-border">
          <div class="h-50 w-full relative">
            <img :src="passengerImage" alt="Passengers" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute bottom-4 left-6 flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <User :size="20" class="text-white" />
              </div>
              <h3 class="text-[20px] font-bold text-white">Passengers</h3>
            </div>
          </div>
          <div class="p-6">
            <p class="text-[15px] text-text-secondary dark:text-dark-muted leading-[1.6]">
              Students and daily commuters who want to board faster, pay without cash stress, and avoid arguments over change.
            </p>
          </div>
        </div>

        <div class="bg-light-gray dark:bg-dark-surface rounded-[20px] overflow-hidden shadow-[0_2px_8px_rgba(26,60,56,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,60,56,0.08)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col border border-transparent dark:border-dark-border">
          <div class="h-50 w-full relative">
            <img :src="driverImage" alt="Drivers and Conductors" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute bottom-4 left-6 flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <Bus :size="20" class="text-white" />
              </div>
              <h3 class="text-[20px] font-bold text-white">Drivers & Conductors</h3>
            </div>
          </div>
          <div class="p-6">
            <p class="text-[15px] text-text-secondary dark:text-dark-muted leading-[1.6]">
              Bus, keke, and taxi operators who want to collect fares more easily, reduce delays, and keep transport moving.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import passengerImage from '@/assets/images/passengers.jpg'
import driverImage from '@/assets/images/driver.jpg'
import { Store, Calculator, Briefcase, User, Bus } from 'lucide-vue-next'
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
        stagger: 0.15,
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

void Store
void Calculator
void Briefcase
</script>
