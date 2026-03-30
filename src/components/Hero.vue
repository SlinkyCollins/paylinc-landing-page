<template>
  <section id="top" class="pt-8 pb-12 md:pt-12 md:pb-24 px-3 sm:px-5 md:px-8 max-w-300 mx-auto" ref="containerRef">
    <div
      class="flex flex-col md:flex-row rounded-4xl overflow-hidden shadow-[0_8px_32px_rgba(26,60,56,0.08)] min-h-140">
      <div
        class="w-full md:w-[60%] bg-primary dark:bg-linear-to-br dark:from-primary dark:to-[#0F2623] p-8 md:p-16 flex flex-col justify-center relative z-10 transition-colors duration-300">
        <div ref="textRef">
          <div
            class="inline-flex items-center h-5 px-4 bg-light text-primary text-[12px] font-medium rounded-full mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span>
            Mordern Transport Payments
          </div>

          <h1 class="text-[40px] md:text-[48px] font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            Cash shouldn't<br><span class="text-alert-yellow-icon">stop</span> your<br>ride
          </h1>

          <p class="text-[16px] md:text-[18px] text-light/90 leading-[1.6] mb-10 max-w-120">
            Make transport payments easier with a simpler way to pay for buses, keke, and taxis without cash stress.
          </p>
        </div>

        <div ref="buttonsRef" class="flex flex-wrap items-center gap-4">
          <a href="#signup"
            class="bg-white text-primary font-bold text-[16px] h-11 px-7 rounded-full shadow-sm hover:bg-light transition-all duration-200 ease-out hover:scale-[1.04] flex items-center gap-2 cursor-pointer">
            Join Early Access
            <ArrowUpRight :size="18" />
          </a>
          <a href="#process"
            class="bg-transparent text-white border border-white/30 font-bold text-[16px] h-11 px-7 rounded-full hover:bg-white/10 transition-all duration-200 ease-out hover:scale-[1.04] cursor-pointer content-center">
            How it works
          </a>
        </div>
      </div>

      <div
        class="w-full md:w-[40%] relative min-h-100 bg-gray-border dark:bg-dark-surface flex items-center justify-center p-6 sm:p-8 md:p-10 overflow-hidden transition-colors duration-300">
        <img :src="BusTransport" alt="Public transport scene"
          class="absolute inset-0 w-full h-full object-cover dark:opacity-80 transition-opacity duration-300"
          loading="lazy" referrerpolicy="no-referrer">

        <div ref="cardRef"
          class="relative z-10 w-full max-w-[320px] bg-white dark:bg-dark-elevated rounded-3xl shadow-[0_12px_40px_rgba(26,60,56,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] p-5 sm:p-6 mx-auto flex flex-col transition-colors duration-300 border border-transparent dark:border-dark-border">
          <div class="flex items-center justify-between mb-6 sm:mb-8">
            <div class="flex items-center gap-3">
              <img :src="avatar" alt="Driver profile"
                class="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-light dark:border-dark-border"
                referrerpolicy="no-referrer">
              <div>
                <h3 class="font-bold text-[14px] sm:text-[16px] text-primary dark:text-dark-text leading-tight">Campus
                  Shuttle</h3>
                <p class="text-[12px] sm:text-[14px] text-text-secondary dark:text-dark-muted">Main Gate - Campus</p>
              </div>
            </div>
            <div
              class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-info-blue-icon text-white flex items-center justify-center shrink-0">
              <CheckCircle2 :size="12" class="sm:w-3.5 sm:h-3.5" :stroke-width="3" />
            </div>
          </div>

          <div
            class="relative group bg-light-gray dark:bg-dark-surface rounded-2xl p-4 sm:p-6 flex justify-center mb-5 sm:mb-6 border border-gray-border/50 dark:border-dark-border cursor-pointer hover:bg-light dark:hover:bg-dark-surface/80 transition-colors duration-300">
            <div
              class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/30 dark:group-hover:border-accent/50 transition-colors duration-300">
            </div>
            <div class="relative z-10 animate-[pulse_3s_ease-in-out_infinite] group-hover:animate-none">
              <QrCode
                class="w-16 h-16 sm:w-20 sm:h-20 text-primary dark:text-dark-text group-hover:scale-105 transition-transform duration-300"
                :stroke-width="1.5" />
            </div>

            <div
              class="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary dark:bg-white text-white dark:text-primary text-[12px] font-medium py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-md z-20">
              Scan to view payment details
              <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary dark:bg-white rotate-45">
              </div>
            </div>
          </div>

          <div
            class="flex items-center justify-center gap-2 bg-light dark:bg-dark-surface text-primary dark:text-dark-text text-[10px] sm:text-[12px] font-medium py-2 px-3 sm:px-4 rounded-full w-max mx-auto transition-colors duration-300 border border-transparent dark:border-dark-border">
            <CheckCircle2 :size="12" class="sm:w-3.5 sm:h-3.5 text-accent dark:text-dark-muted shrink-0" />
            Payment details ready
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import BusTransport from '@/assets/images/busTransport.jpg'
import avatar from '@/assets/images/avatar.jpg'
import { CheckCircle2, QrCode, ArrowUpRight } from 'lucide-vue-next'
import gsap from 'gsap'

const containerRef = ref(null)
const textRef = ref(null)
const buttonsRef = ref(null)
const cardRef = ref(null)

let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.fromTo(
      textRef.value?.children || [],
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
    )

    gsap.fromTo(
      buttonsRef.value?.children || [],
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, delay: 0.6, stagger: 0.1, ease: 'back.out(1.5)' }
    )

    gsap.fromTo(
      cardRef.value,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' }
    )

    gsap.to(cardRef.value, {
      y: -8,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1.1
    })
  }, containerRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>
