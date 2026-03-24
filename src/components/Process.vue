<template>
    <section id="process" class="bg-primary dark:bg-dark-base py-10 sm:py-16 md:py-24 transition-colors duration-300" ref="sectionRef">
        <div class="max-w-300 mx-auto px-3 sm:px-5 md:px-8 text-center">
            <h3 class="text-[12px] font-medium text-light dark:text-dark-muted uppercase tracking-[0.08em] mb-4">
                Simple Process
            </h3>
            <h2 class="text-[32px] md:text-[36px] font-extrabold text-white dark:text-dark-text mb-16 md:mb-24 leading-snug">
                How Paylinc works
            </h2>

            <div class="relative max-w-225 mx-auto">
                <!-- Dotted Line connecting steps -->
                <div class="absolute top-5.5 left-[16.66%] right-[16.66%] h-0.5 hidden md:block z-0">
                    <div ref="lineRef" class="h-full border-t-2 border-dashed border-light/30 dark:border-dark-border"
                        :style="{ width: '0%' }" />
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative z-10" ref="stepsRef">
                    <!-- Step 1 -->
                    <div class="flex flex-col items-center">
                        <div
                            class="w-11 h-11 rounded-full bg-light dark:bg-dark-elevated text-primary dark:text-dark-text flex items-center justify-center font-bold text-[18px] mb-6 shadow-lg dark:shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-colors duration-300 border border-transparent dark:border-dark-border">
                            1
                        </div>
                        <h3 class="text-[18px] font-bold text-white dark:text-dark-text mb-3">Open Paylinc</h3>
                        <p class="text-[16px] text-light/80 dark:text-dark-muted leading-[1.6] max-w-65">
                            Open the app when you board. No need to count cash or ask for change.
                        </p>
                    </div>

                    <!-- Step 2 -->
                    <div class="flex flex-col items-center">
                        <div
                            class="w-11 h-11 rounded-full bg-light dark:bg-dark-elevated text-primary dark:text-dark-text flex items-center justify-center font-bold text-[18px] mb-6 shadow-lg dark:shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-colors duration-300 border border-transparent dark:border-dark-border">
                            2
                        </div>
                        <h3 class="text-[18px] font-bold text-white dark:text-dark-text mb-3">Select transport</h3>
                        <p class="text-[16px] text-light/80 dark:text-dark-muted leading-[1.6] max-w-65">
                            Scan the QR code on the bus or enter the driver's short ID.
                        </p>
                    </div>

                    <!-- Step 3 -->
                    <div class="flex flex-col items-center">
                        <div
                            class="w-11 h-11 rounded-full bg-light dark:bg-dark-elevated text-primary dark:text-dark-text flex items-center justify-center font-bold text-[18px] mb-6 shadow-lg dark:shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-colors duration-300 border border-transparent dark:border-dark-border">
                            3
                        </div>
                        <h3 class="text-[18px] font-bold text-white dark:text-dark-text mb-3">Pay & Move</h3>
                        <p class="text-[16px] text-light/80 dark:text-dark-muted leading-[1.6] max-w-65">
                            Pay instantly. The driver gets notified immediately, and you enjoy your ride.
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
        // Animate steps
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
                    start: 'top 60%'
                }
            }
        )

        // Animate dotted line
        gsap.fromTo(
            lineRef.value,
            { width: '0%' },
            {
                width: '100%',
                duration: 1.5,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: sectionRef.value,
                    start: 'top 60%'
                }
            }
        )
    }, sectionRef.value)
})

onUnmounted(() => {
    ctx?.revert()
})
</script>
