<template>
    <section id="audience" class="bg-white py-10 sm:py-16 md:py-24" ref="sectionRef">
        <div class="max-w-300 mx-auto px-3 sm:px-5 md:px-8">
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
                <ReusableCard title="Merchants" body="Speed up checkout lines with instant scan-to-pay QRs."
                    :variant="'gray'" :size="'audience'"
                    :icon-wrapper-class="'w-10 h-10 rounded-lg bg-light flex items-center justify-center mb-4'"
                    :title-class-name="'text-[18px] font-semibold text-primary mb-2'"
                    :body-class-name="'text-[14px] text-text-secondary leading-[1.5]'"
                    :body-color-class="'text-text-secondary'">
                    <template #icon>
                        <Store :size="20" class="text-primary" />
                    </template>
                </ReusableCard>

                <!-- Card 2 -->
                <ReusableCard title="POS Operators" body="Reduce errors from manually punching in account numbers."
                    :variant="'gray'" :size="'audience'"
                    :icon-wrapper-class="'w-10 h-10 rounded-lg bg-light flex items-center justify-center mb-4'"
                    :title-class-name="'text-[18px] font-semibold text-primary mb-2'"
                    :body-class-name="'text-[14px] text-text-secondary leading-[1.5]'"
                    :body-color-class="'text-text-secondary'">
                    <template #icon>
                        <Calculator :size="20" class="text-primary" />
                    </template>
                </ReusableCard>

                <!-- Card 3 -->
                <ReusableCard title="Small Business" body="Look more professional with a branded payment identity."
                    :variant="'gray'" :size="'audience'"
                    :icon-wrapper-class="'w-10 h-10 rounded-lg bg-light flex items-center justify-center mb-4'"
                    :title-class-name="'text-[18px] font-semibold text-primary mb-2'"
                    :body-class-name="'text-[14px] text-text-secondary leading-[1.5]'"
                    :body-color-class="'text-text-secondary'">
                    <template #icon>
                        <Briefcase :size="20" class="text-primary" />
                    </template>
                </ReusableCard>

                <!-- Card 4 -->
                <ReusableCard title="Individuals" body="Safely receive funds from strangers or clients."
                    :variant="'gray'" :size="'audience'"
                    :icon-wrapper-class="'w-10 h-10 rounded-lg bg-light flex items-center justify-center mb-4'"
                    :title-class-name="'text-[18px] font-semibold text-primary mb-2'"
                    :body-class-name="'text-[14px] text-text-secondary leading-[1.5]'"
                    :body-color-class="'text-text-secondary'">
                    <template #icon>
                        <User :size="20" class="text-primary" />
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