<template>
    <section id="problem" class="relative bg-light-gray py-10 sm:py-16 md:py-24 overflow-hidden" ref="sectionRef">
        <!-- Subtle radial gradient -->
        <div
            class="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,var(--color-light)_0%,transparent_70%)] opacity-30 pointer-events-none">
        </div>

        <div class="max-w-[1200px] mx-auto px-3 sm:px-5 md:px-8 relative z-10">
            <div class="flex flex-col mb-12">
                <div>
                    <div class="flex items-center gap-2 mb-4">
                        <div class="w-3 h-3 bg-primary rounded-sm"></div>
                        <span class="text-[12px] font-medium text-primary uppercase tracking-[0.08em]">The
                            Problem</span>
                    </div>
                    <h2 class="text-[28px] md:text-[32px] font-bold leading-[1.2] mb-4">
                        <span class="text-primary">Bank transfers are broken.</span><br />
                        <span class="text-text-secondary">Sharing details is risky.</span>
                    </h2>
                    <p class="text-[16px] text-[#42514D] leading-[1.6] max-w-[600px]">
                        Stop manually typing 10-digit numbers. Stop asking customers to recite details over the phone.
                        Eliminate
                        the friction that costs you sales and peace of mind.
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6" ref="cardsRef">
                <!-- Card 1 -->
                <div
                    class="bg-white rounded-[20px] p-6 shadow-[0_2px_8px_rgba(26,60,56,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,60,56,0.08)] transition-all duration-300 min-h-[220px] flex flex-col">
                    <div class="w-10 h-10 rounded-lg bg-alert-red-bg flex items-center justify-center mb-6">
                        <TriangleAlert :size="20" class="text-alert-red-icon" />
                    </div>
                    <h3 class="text-[18px] font-semibold text-primary mb-3">Costly Typos</h3>
                    <p class="text-[14px] text-text-secondary leading-[1.6]">
                        One wrong digit sends money to the wrong person. Reversing a transfer is a nightmare you
                        shouldn't have
                        to face.
                    </p>
                </div>

                <!-- Card 2 -->
                <div
                    class="bg-white rounded-[20px] p-6 shadow-[0_2px_8px_rgba(26,60,56,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,60,56,0.08)] transition-all duration-300 min-h-[220px] flex flex-col">
                    <div class="w-10 h-10 rounded-lg bg-alert-yellow-bg flex items-center justify-center mb-6">
                        <ShieldAlert :size="20" class="text-alert-yellow-icon" />
                    </div>
                    <h3 class="text-[18px] font-semibold text-primary mb-3">Identity Exposure</h3>
                    <p class="text-[14px] text-text-secondary leading-[1.6]">
                        Merchants share full bank details publicly all day. This exposes you to fraud and unnecessary
                        scrutiny.
                    </p>
                </div>

                <!-- Card 3 -->
                <div
                    class="bg-white rounded-[20px] p-6 shadow-[0_2px_8px_rgba(26,60,56,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,60,56,0.08)] transition-all duration-300 min-h-[220px] flex flex-col">
                    <div class="w-10 h-10 rounded-lg bg-info-blue-bg flex items-center justify-center mb-6">
                        <Clock :size="20" class="text-info-blue-icon" />
                    </div>
                    <h3 class="text-[18px] font-semibold text-primary mb-3">Verification Delays</h3>
                    <p class="text-[14px] text-text-secondary leading-[1.6]">
                        "Send me the screenshot." Waiting for confirmation slows down your business and frustrates
                        customers.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Clock, ShieldAlert, TriangleAlert } from 'lucide-vue-next'
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
                    start: 'top 70%'
                }
            }
        )
    }, sectionRef.value)
})

onUnmounted(() => {
    ctx?.revert()
})
</script>