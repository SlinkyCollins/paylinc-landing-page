<template>
  <section
    id="process"
    class="bg-primary dark:bg-dark-base py-10 sm:py-16 md:py-24 transition-colors duration-300"
    ref="sectionRef"
  >
    <div class="max-w-300 mx-auto px-3 sm:px-5 md:px-8 text-center">
      <div class="mb-10 sm:mb-12 md:mb-16">
        <p class="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-text-secondary dark:text-dark-text-secondary">
          Simple Process
        </p>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white dark:text-light">
          How Paylinc works
        </h2>
      </div>

      <div class="relative">
        <div
          class="absolute top-5.5 left-[16.66%] right-[16.66%] h-0.5 hidden md:block z-0"
          aria-hidden="true"
        >
          <div
            ref="lineRef"
            class="h-full border-t-2 border-dashed border-light/30 dark:border-dark-border"
            :style="{ width: '0%' }"
          />
        </div>

        <div ref="stepsRef" class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative z-10">
          <article class="flex flex-col items-center px-4">
            <div
              class="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-light border-2 border-light/30 text-base font-bold text-text-primary shadow-sm dark:border-dark-border dark:bg-dark-base dark:text-light"
            >
              1
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white dark:text-light">
              Get Started
            </h3>
            <p class="max-w-sm text-sm leading-6 text-white dark:text-dark-text-secondary">
              Download Paylinc and create your unique ID.
            </p>
          </article>

          <article class="flex flex-col items-center px-4">
            <div
              class="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-light border-2 border-light/30 text-base font-bold text-text-primary shadow-sm dark:border-dark-border dark:bg-dark-base dark:text-light"
            >
              2
            </div>
            <h3 class="mb-3 text-xl text-white font-semibold dark:text-light">
              Linc Your Bank
            </h3>
            <p class="max-w-sm text-sm leading-6 text-white dark:text-dark-text-secondary">
              Linc your bank account or card securely.
            </p>
          </article>

          <article class="flex flex-col items-center px-4">
            <div
              class="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-light border-2 border-light/30 text-base font-bold text-text-primary shadow-sm dark:border-dark-border dark:bg-dark-base dark:text-light"
            >
              3
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white dark:text-light">
              Scan &amp; Pay
            </h3>
            <p class="max-w-sm text-sm leading-6 text-white dark:text-dark-text-secondary">
              Scan the driver's QR or enter their Paylinc ID, confirm, and you're done.
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const stepsRef = ref(null)
const lineRef = ref(null)

let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    const stepItems = stepsRef.value?.children || []

    gsap.fromTo(
      stepItems,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 60%',
        },
      }
    )

    gsap.fromTo(
      lineRef.value,
      {
        width: '0%',
      },
      {
        width: '100%',
        duration: 1.5,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 60%',
        },
      }
    )
  }, sectionRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>
