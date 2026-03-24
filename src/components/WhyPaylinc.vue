<template>
    <section id="why-paylinc" class="bg-light-gray dark:bg-dark-surface py-16 md:py-24 transition-colors duration-300"
        ref="sectionRef">
        <div class="max-w-300 mx-auto px-4 sm:px-6 md:px-8">
            <div class="text-center max-w-200 mx-auto mb-16">
                <div class="flex items-center justify-center gap-2 mb-4">
                    <div class="w-3 h-3 bg-primary dark:bg-dark-muted rounded-sm"></div>
                    <span
                        class="text-[12px] font-medium text-primary dark:text-dark-muted uppercase tracking-[0.08em]">The
                        Alternative</span>
                </div>
                <h2 class="text-[32px] md:text-[40px] font-bold text-primary dark:text-dark-text leading-[1.2] mb-6">
                    Why not just use cash or bank transfers?
                </h2>
                <p class="text-[16px] md:text-[18px] text-text-secondary dark:text-dark-muted leading-[1.6]">
                    Because transport requires speed. Cash is clunky, and regular bank transfers are too slow for boarding a bus.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" ref="cardsRef">
                <div v-for="(reason, index) in reasons" :key="index"
                    class="bg-white dark:bg-dark-elevated p-8 rounded-3xl border border-gray-border/50 dark:border-dark-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                    <div
                        class="w-12 h-12 rounded-full bg-light dark:bg-dark-base flex items-center justify-center mb-6 text-primary dark:text-dark-text">
                        <component :is="reason.icon" :size="24" :stroke-width="1.5" />
                    </div>
                    <h3 class="text-[18px] font-bold text-primary dark:text-dark-text mb-3">
                        {{ reason.title }}
                    </h3>
                    <p class="text-[15px] text-text-secondary dark:text-dark-muted leading-[1.6]">
                        {{ reason.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { AlertCircle, Search, Copy, ShieldCheck } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reasons = [
    {
        icon: AlertCircle,
        title: 'Cash means delays',
        description: 'Looking for exact change slows down the whole bus. Drivers get impatient, and passengers get stressed.'
    },
    {
        icon: Search,
        title: 'Transfers are too slow',
        description: 'Waiting for a bank transfer to drop while standing at the door holds everyone up.'
    },
    {
        icon: Copy,
        title: 'The network excuse',
        description: 'Bad network means failed transfers and arguments with the driver. You need something that just works.'
    },
    {
        icon: ShieldCheck,
        title: 'Built for speed',
        description: 'Paylinc is designed specifically for transport. Scan, pay, and take your seat in seconds.'
    }
]

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
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.value,
                    start: 'top 75%'
                }
            }
        )
    }, sectionRef.value)
})

onUnmounted(() => {
    ctx?.revert()
})
</script>
