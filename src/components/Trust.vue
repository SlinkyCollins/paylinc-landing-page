<template>
  <section
    class="bg-white dark:bg-dark-base py-10 sm:py-16 md:py-24 transition-colors duration-300 border-t border-gray-200/60 dark:border-dark-border/40"
    ref="sectionRef">
    <div class="max-w-300 mx-auto px-3 sm:px-5 md:px-8">
      <div class="flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <div class="w-full md:w-1/2 relative" ref="imageRef">
          <div
            class="relative rounded-4xl overflow-hidden shadow-[0_12px_40px_rgba(26,60,56,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] aspect-4/3 md:aspect-3/2 w-full max-w-125 mx-auto md:ml-0 transition-shadow duration-300">
            <img
              :src="kekeRiders"
              alt="Local transport"
              class="w-full h-full object-cover dark:opacity-80 transition-opacity duration-300"
              loading="lazy"
              referrerpolicy="no-referrer"
            >
            <div
              class="absolute inset-0 bg-primary/10 dark:bg-dark-base/40 mix-blend-multiply transition-colors duration-300">
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2" ref="textRef">
          <div
            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-light dark:bg-dark-surface border border-gray-border/50 dark:border-dark-border mb-6">
            <span class="w-2 h-2 rounded-full bg-accent dark:bg-dark-muted"></span>
            <span
              class="text-[12px] font-semibold text-primary dark:text-dark-text uppercase tracking-wider">
              Reliability
            </span>
          </div>

          <h2 class="text-[28px] md:text-[36px] font-bold text-primary dark:text-dark-text leading-[1.2] mb-8">
            Built for everyday transport
          </h2>

          <p class="text-[16px] text-text-secondary dark:text-dark-muted leading-[1.6] mb-8">
            Paylinc is designed to work with the realities of daily transport — no matter how busy, crowded, or chaotic it gets.
          </p>

          <ul class="space-y-6">
            <li class="flex items-start gap-3">
              <CheckCircle2 :size="20" class="text-accent dark:text-dark-muted shrink-0 mt-1" />
              <span class="text-[16px] text-text-secondary dark:text-dark-muted leading-normal">
                <strong class="text-primary dark:text-dark-text font-semibold">Exact fares, no change required.</strong>
                Passengers pay the exact amount without the usual change stress.
              </span>
            </li>

            <li class="flex items-start gap-3">
              <CheckCircle2 :size="20" class="text-accent dark:text-dark-muted shrink-0 mt-1" />
              <span class="text-[16px] text-text-secondary dark:text-dark-muted leading-normal">
                <strong class="text-primary dark:text-dark-text font-semibold">Faster confirmation.</strong>
                Drivers can check payment status more easily, helping movement stay smooth.
              </span>
            </li>

            <li class="flex items-start gap-3">
              <CheckCircle2 :size="20" class="text-accent dark:text-dark-muted shrink-0 mt-1" />
              <span class="text-[16px] text-text-secondary dark:text-dark-muted leading-normal">
                <strong class="text-primary dark:text-dark-text font-semibold">Clearer records.</strong>
                Payment details are easier to track, reducing confusion and back-and-forth.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { CheckCircle2, TrendingUp } from 'lucide-vue-next'
import kekeRiders from '@/assets/images/keke-riders.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const imageRef = ref(null)
const textRef = ref(null)

let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.fromTo(
      imageRef.value,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 60%',
        }
      }
    )

    gsap.fromTo(
      textRef.value?.children || [],
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 60%',
        }
      }
    )
  }, sectionRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>
