<template>
  <section id="process" class="bg-primary dark:bg-dark-base py-10 sm:py-16 md:py-24 transition-colors duration-300" ref="sectionRef">
    <div class="max-w-[1200px] mx-auto px-3 sm:px-5 md:px-8 text-center">
      <h3 class="text-[12px] font-medium text-light dark:text-dark-muted uppercase tracking-[0.08em] mb-4">
        Simple Process
      </h3>
      <h2 class="text-[32px] md:text-[36px] font-extrabold text-white dark:text-dark-text mb-16 md:mb-24">
        How Paylinc works
      </h2>

      <div class="relative max-w-[900px] mx-auto">
        <div class="absolute top-[60px] left-[16.66%] right-[16.66%] h-[2px] hidden md:block z-0">
          <div
            ref="lineRef"
            class="h-full border-t-[2px] border-dashed border-light/30 dark:border-dark-border"
            :style="{ width: '0%' }"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative z-10" ref="stepsRef">
          <div class="flex flex-col items-center">
            <div class="relative w-[120px] h-[120px] mb-6">
              <div class="w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-light/20 dark:border-dark-border">
                <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=500&auto=format&fit=crop" alt="Holding phone" class="w-full h-full object-cover">
              </div>
              <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-[16px] shadow-lg border-4 border-primary dark:border-dark-base z-10">1</div>
            </div>
            <h3 class="text-[18px] font-bold text-white dark:text-dark-text mb-3">Open Paylinc</h3>
            <p class="text-[16px] text-light/80 dark:text-dark-muted leading-[1.6] max-w-[260px]">
              No need to look for cash or ask for change.
            </p>
          </div>

          <div class="flex flex-col items-center">
            <div class="relative w-[120px] h-[120px] mb-6">
              <div class="w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-light/20 dark:border-dark-border">
                <img src="https://www.shutterstock.com/image-photo/lagos-nigeria-october-1-2025-260nw-2687723721.jpg">
              </div>
              <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-[16px] shadow-lg border-4 border-primary dark:border-dark-base z-10">2</div>
            </div>
            <h3 class="text-[18px] font-bold text-white dark:text-dark-text mb-3">Select your ride</h3>
            <p class="text-[16px] text-light/80 dark:text-dark-muted leading-[1.6] max-w-[260px]">
              Choose the driver or transport you’re paying for.
            </p>
          </div>

          <div class="flex flex-col items-center">
            <div class="relative w-[120px] h-[120px] mb-6">
              <div class="w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-light/20 dark:border-dark-border">
                <img src="https://images.unsplash.com/photo-1559897752-11f80cef5173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW92aW5nJTIweWVsbG93JTIwYnVzJTIwbmlnZXJpYXxlbnwwfHwwfHx8MA%3D%3D" alt="Moving transport" class="w-full h-full object-cover">
              </div>
              <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-[16px] shadow-lg border-4 border-primary dark:border-dark-base z-10">3</div>
            </div>
            <h3 class="text-[18px] font-bold text-white dark:text-dark-text mb-3">Pay and move</h3>
            <p class="text-[16px] text-light/80 dark:text-dark-muted leading-[1.6] max-w-[260px]">
              Complete payment quickly and continue your trip without delay.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const stepsRef = ref(null)
const lineRef = ref(null)

let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.fromTo(
      stepsRef.value?.children || [],
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 60%',
        }
      }
    )

    gsap.fromTo(
      lineRef.value,
      { width: '0%' },
      {
        width: '100%',
        duration: 1.5,
        ease: 'power2.inOut',
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
