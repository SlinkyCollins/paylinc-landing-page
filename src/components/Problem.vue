<template>
    <section id="problem"
        class="relative bg-light-gray dark:bg-dark-surface py-10 sm:py-16 md:py-24 overflow-hidden transition-colors duration-300"
        ref="sectionRef">
        <!-- Subtle radial gradient -->
        <div
            class="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,var(--color-light)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_top_right,var(--color-dark-elevated)_0%,transparent_70%)] opacity-30 pointer-events-none transition-colors duration-300">
        </div>

        <div class="max-w-300 mx-auto px-3 sm:px-5 md:px-8 relative z-10">
            <div class="flex flex-col mb-12">
                <div>
                    <div class="flex items-center gap-2 mb-4">
                        <div class="w-3 h-3 bg-primary dark:bg-dark-muted rounded-sm"></div>
                        <span
                            class="text-[12px] font-medium text-primary dark:text-dark-muted uppercase tracking-[0.08em]">The
                            Problem</span>
                    </div>
                    <h2 class="text-[28px] md:text-[32px] font-bold leading-[1.2] mb-4">
                        <span class="text-primary dark:text-dark-text">Transport payments shouldn’t feel this stressful</span>
                    </h2>
                    <p class="text-[16px] text-[#42514D] dark:text-dark-muted leading-[1.6] max-w-150">
                        Today’s transport experience is full of friction. Passengers wait for change, drivers lose
                        time, and every transfer comes with delays. Moving around should be simple. Instead, it feels
                        like a daily struggle.
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" ref="cardsRef">
                <ReusableCard v-for="card in cards" :key="card.title" :title="card.title" :body="card.body"
                    :size="'default'"
                    :title-class-name="'text-[18px] font-semibold text-primary dark:text-dark-text mb-3'"
                    :icon-wrapper-class="card.iconWrapperClass"
                    :body-color-class="'text-text-secondary dark:text-dark-muted'"
                    :class-name="'bg-white dark:bg-dark-elevated rounded-[20px] p-6 shadow-[0_2px_8px_rgba(26,60,56,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,60,56,0.08)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 min-h-[220px] flex flex-col border border-transparent dark:border-dark-border'">
                    <template #icon>
                        <component :is="card.icon" :size="20" :class="card.iconClass" />
                    </template>
                </ReusableCard>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Clock, ShieldAlert, TriangleAlert } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ReusableCard from './ReusableCard.vue'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const cardsRef = ref(null)

const cards = [
    {
        title: 'No change delays',
        body: 'Waiting for the driver or conductor to find exact change wastes time and causes unnecessary arguments.',
        icon: TriangleAlert,
        iconClass: 'text-alert-red-icon dark:text-red-400',
        iconWrapperClass: 'w-10 h-10 rounded-lg bg-alert-red-bg dark:bg-red-900/30 flex items-center justify-center mb-6'
    },
    {
        title: 'Slow boarding',
        body: 'Fumbling for cash or waiting for bank transfers to confirm slows down everyone. The bus can\'t move until everyone pays.',
        iconClass: 'text-alert-yellow-icon dark:text-yellow-400',
        icon: ShieldAlert,
        iconWrapperClass: 'w-10 h-10 rounded-lg bg-alert-yellow-bg dark:bg-yellow-900/30 flex items-center justify-center mb-6'
    },
    {
        title: 'Payment confusion',
        body: '"Did the transfer drop?" Repeated back-and-forth during transfers creates tension between drivers and passengers.',
        icon: Clock,
        iconClass: 'text-info-blue-icon dark:text-blue-400',
        iconWrapperClass: 'w-10 h-10 rounded-lg bg-info-blue-bg dark:bg-blue-900/30 flex items-center justify-center mb-6'
    },
    {
        title: 'Cash dependency',
        body: 'Relying on physical cash means you can\'t travel if ATMs are down or you don\'t have the exact fare.',
        icon: TriangleAlert,
        iconClass: 'text-primary dark:text-dark-text',
        iconWrapperClass: 'w-10 h-10 rounded-lg bg-light dark:bg-dark-surface flex items-center justify-center mb-6'
    }
]

const getCardsContainer = () => cardsRef.value?.$el || cardsRef.value

let ctx

onMounted(() => {
    ctx = gsap.context(() => {
        const getCardElements = () => {
            const container = getCardsContainer()
            return container?.children ? Array.from(container.children) : []
        }

        const animateCards = (targets) => {
            if (!targets.length) {
                return
            }

            gsap.fromTo(
                targets,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.42,
                    stagger: 0.12,
                    ease: 'power2.out',
                    overwrite: 'auto',
                    onComplete: () => {
                        targets.forEach((cardEl) => {
                            cardEl.dataset.animated = 'true'
                        })
                    }
                }
            )
        }

        ScrollTrigger.create({
            trigger: sectionRef.value,
            start: 'top 70%',
            once: true,
            onEnter: () => {
                const initialCards = getCardElements().filter((cardEl) => cardEl.dataset.animated !== 'true')
                animateCards(initialCards)
            }
        })
    }, sectionRef.value)
})

onUnmounted(() => {
    ctx?.revert()
})
</script>
