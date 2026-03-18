<template>
    <section id="process" class="bg-primary py-10 sm:py-16 md:py-24" ref="sectionRef">
        <div class="max-w-[1200px] mx-auto px-3 sm:px-5 md:px-8 text-center">
            <h3 class="text-[12px] font-medium text-light uppercase tracking-[0.08em] mb-4">
                Simple Process
            </h3>
            <h2 class="text-[32px] md:text-[36px] font-extrabold text-white mb-16 md:mb-24">
                Your name is your account<br class="hidden md:block" /> number
            </h2>

            <div class="relative max-w-[900px] mx-auto">
                <!-- Dotted Line connecting steps -->
                <div class="absolute top-[22px] left-[16.66%] right-[16.66%] h-[2px] hidden md:block z-0">
                    <div ref="lineRef" class="h-full border-t-[2px] border-dashed border-light/30"
                        :style="{ width: '0%' }" />
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative z-10" ref="stepsRef">
                    <!-- Step 1 -->
                    <div class="flex flex-col items-center">
                        <div
                            class="w-[44px] h-[44px] rounded-full bg-light text-primary flex items-center justify-center font-bold text-[18px] mb-6 shadow-lg">
                            1
                        </div>
                        <h3 class="text-[18px] font-bold text-white mb-3">Create your identity</h3>
                        <p class="text-[16px] text-light/80 leading-[1.6] max-w-[260px]">
                            Sign up and claim your unique Paylinc username (e.g., @JaneStore).
                        </p>
                    </div>

                    <!-- Step 2 -->
                    <div class="flex flex-col items-center">
                        <div
                            class="w-[44px] h-[44px] rounded-full bg-light text-primary flex items-center justify-center font-bold text-[18px] mb-6 shadow-lg">
                            2
                        </div>
                        <h3 class="text-[18px] font-bold text-white mb-3">Get your code</h3>
                        <p class="text-[16px] text-light/80 leading-[1.6] max-w-[260px]">
                            Receive a permanent QR code and payment link tied to your bank account.
                        </p>
                    </div>

                    <!-- Step 3 -->
                    <div class="flex flex-col items-center">
                        <div
                            class="w-[44px] h-[44px] rounded-full bg-light text-primary flex items-center justify-center font-bold text-[18px] mb-6 shadow-lg">
                            3
                        </div>
                        <h3 class="text-[18px] font-bold text-white mb-3">Receive safely</h3>
                        <p class="text-[16px] text-light/80 leading-[1.6] max-w-[260px]">
                            Customers scan or click to pay. Money goes straight to your existing bank app.
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