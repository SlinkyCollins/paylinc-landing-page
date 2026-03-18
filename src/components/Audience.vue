<template>
    <section id="audience" class="bg-white py-10 sm:py-16 md:py-24" ref="sectionRef">
        <div class="max-w-[1200px] mx-auto px-3 sm:px-5 md:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                    <div class="flex items-center gap-2 mb-4">
                        <div class="w-3 h-3 bg-primary rounded-sm"></div>
                        <span class="text-[12px] font-medium text-primary uppercase tracking-[0.08em]">Target
                            Audience</span>
                    </div>
                    <h2 class="text-[28px] md:text-[32px] font-bold text-primary leading-[1.2]">
                        Built for modern commerce
                    </h2>
                </div>
                <p class="text-[16px] text-text-secondary mt-4 md:mt-0">
                    Solving payment friction for...
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" ref="cardsRef">
                <!-- Card 1 -->
                <div
                    class="bg-light-gray rounded-[20px] p-6 shadow-[0_2px_8px_rgba(26,60,56,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,60,56,0.08)] transition-all duration-300 min-h-[160px] flex flex-col">
                    <div class="w-10 h-10 rounded-lg bg-light flex items-center justify-center mb-4">
                        <Store :size="20" class="text-primary" />
                    </div>
                    <h3 class="text-[18px] font-semibold text-primary mb-2">Merchants</h3>
                    <p class="text-[14px] text-text-secondary leading-[1.5]">
                        Speed up checkout lines with instant scan-to-pay QRs.
                    </p>
                </div>

                <!-- Card 2 -->
                <div
                    class="bg-light-gray rounded-[20px] p-6 shadow-[0_2px_8px_rgba(26,60,56,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,60,56,0.08)] transition-all duration-300 min-h-[160px] flex flex-col">
                    <div class="w-10 h-10 rounded-lg bg-light flex items-center justify-center mb-4">
                        <Calculator :size="20" class="text-primary" />
                    </div>
                    <h3 class="text-[18px] font-semibold text-primary mb-2">POS Operators</h3>
                    <p class="text-[14px] text-text-secondary leading-[1.5]">
                        Reduce errors from manually punching in account numbers.
                    </p>
                </div>

                <!-- Card 3 -->
                <div
                    class="bg-light-gray rounded-[20px] p-6 shadow-[0_2px_8px_rgba(26,60,56,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,60,56,0.08)] transition-all duration-300 min-h-[160px] flex flex-col">
                    <div class="w-10 h-10 rounded-lg bg-light flex items-center justify-center mb-4">
                        <Briefcase :size="20" class="text-primary" />
                    </div>
                    <h3 class="text-[18px] font-semibold text-primary mb-2">Small Business</h3>
                    <p class="text-[14px] text-text-secondary leading-[1.5]">
                        Look more professional with a branded payment identity.
                    </p>
                </div>

                <!-- Card 4 -->
                <div
                    class="bg-light-gray rounded-[20px] p-6 shadow-[0_2px_8px_rgba(26,60,56,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,60,56,0.08)] transition-all duration-300 min-h-[160px] flex flex-col">
                    <div class="w-10 h-10 rounded-lg bg-light flex items-center justify-center mb-4">
                        <User :size="20" class="text-primary" />
                    </div>
                    <h3 class="text-[18px] font-semibold text-primary mb-2">Individuals</h3>
                    <p class="text-[14px] text-text-secondary leading-[1.5]">
                        Safely receive funds from strangers or clients.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Briefcase, Calculator, Store, User } from 'lucide-vue-next'
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