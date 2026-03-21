<template>
    <section id="audience" class="bg-white dark:bg-dark-base py-10 sm:py-16 md:py-24 transition-colors duration-300" ref="sectionRef">
        <div class="max-w-300 mx-auto px-3 sm:px-5 md:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                    <div class="flex items-center gap-2 mb-4">
                        <div class="w-3 h-3 bg-primary dark:bg-dark-muted rounded-sm"></div>
                        <span class="text-[12px] font-medium text-primary dark:text-dark-muted uppercase tracking-[0.08em]">Target
                            Audience</span>
                    </div>
                    <h2 class="text-[28px] md:text-[32px] font-bold text-primary dark:text-dark-text leading-[1.2]">
                        Built for anyone who receives payments
                    </h2>
                </div>
                <p class="text-[16px] text-text-secondary dark:text-dark-muted mt-4 md:mt-0">
                    Solving payment friction for...
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" ref="cardsRef">
                <!-- Card 1 -->
                <ReusableCard title="Merchants" body="Speed up checkout with instant scan-to-pay QRs."
                    :variant="'gray'" :size="'audience'"
                    :icon-wrapper-class="'w-10 h-10 rounded-lg bg-light dark:bg-dark-elevated flex items-center justify-center mb-4'"
                    :title-class-name="'text-[18px] font-semibold text-primary dark:text-dark-text mb-2'"
                    :body-class-name="'text-[14px] text-text-secondary dark:text-dark-muted leading-[1.5]'"
                    :body-color-class="'text-text-secondary dark:text-dark-muted'"
                    :class-name="'bg-light-gray dark:bg-dark-surface rounded-[20px] p-6 shadow-[0_2px_8px_rgba(26,60,56,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,60,56,0.08)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 min-h-[160px] flex flex-col border border-transparent dark:border-dark-border'">
                    <template #icon>
                        <Store :size="20" class="text-primary dark:text-dark-text" />
                    </template>
                </ReusableCard>

                <!-- Card 2 -->
                <ReusableCard title="POS Operators" body="Reduce errors from manually entering account numbers."
                    :variant="'gray'" :size="'audience'"
                    :icon-wrapper-class="'w-10 h-10 rounded-lg bg-light dark:bg-dark-elevated flex items-center justify-center mb-4'"
                    :title-class-name="'text-[18px] font-semibold text-primary dark:text-dark-text mb-2'"
                    :body-class-name="'text-[14px] text-text-secondary dark:text-dark-muted leading-[1.5]'"
                    :body-color-class="'text-text-secondary dark:text-dark-muted'"
                    :class-name="'bg-light-gray dark:bg-dark-surface rounded-[20px] p-6 shadow-[0_2px_8px_rgba(26,60,56,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,60,56,0.08)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 min-h-[160px] flex flex-col border border-transparent dark:border-dark-border'">
                    <template #icon>
                        <Calculator :size="20" class="text-primary dark:text-dark-text" />
                    </template>
                </ReusableCard>

                <!-- Card 3 -->
                <ReusableCard title="Small Businesses" body="Look more professional with a branded payment identity."
                    :variant="'gray'" :size="'audience'"
                    :icon-wrapper-class="'w-10 h-10 rounded-lg bg-light dark:bg-dark-elevated flex items-center justify-center mb-4'"
                    :title-class-name="'text-[18px] font-semibold text-primary dark:text-dark-text mb-2'"
                    :body-class-name="'text-[14px] text-text-secondary dark:text-dark-muted leading-[1.5]'"
                    :body-color-class="'text-text-secondary dark:text-dark-muted'"
                    :class-name="'bg-light-gray dark:bg-dark-surface rounded-[20px] p-6 shadow-[0_2px_8px_rgba(26,60,56,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,60,56,0.08)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 min-h-[160px] flex flex-col border border-transparent dark:border-dark-border'">
                    <template #icon>
                        <Briefcase :size="20" class="text-primary dark:text-dark-text" />
                    </template>
                </ReusableCard>

                <!-- Card 4 -->
                <ReusableCard title="Students & Individuals" body="Receive money safely from classmates, customers, or clients without sharing bank details."
                    :variant="'gray'" :size="'audience'"
                    :icon-wrapper-class="'w-10 h-10 rounded-lg bg-light dark:bg-dark-elevated flex items-center justify-center mb-4'"
                    :title-class-name="'text-[18px] font-semibold text-primary dark:text-dark-text mb-2'"
                    :body-class-name="'text-[14px] text-text-secondary dark:text-dark-muted leading-[1.5]'"
                    :body-color-class="'text-text-secondary dark:text-dark-muted'"
                    :class-name="'bg-light-gray dark:bg-dark-surface rounded-[20px] p-6 shadow-[0_2px_8px_rgba(26,60,56,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,60,56,0.08)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 min-h-[160px] flex flex-col border border-transparent dark:border-dark-border'">
                    <template #icon>
                        <User :size="20" class="text-primary dark:text-dark-text" />
                    </template>
                </ReusableCard>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Briefcase, Calculator, Store, User } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ReusableCard from './ReusableCard.vue'

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
