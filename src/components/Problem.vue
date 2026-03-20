<template>
    <section id="problem" class="relative bg-light-gray py-10 sm:py-16 md:py-24 overflow-hidden" ref="sectionRef">
        <!-- Subtle radial gradient -->
        <div
            class="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,var(--color-light)_0%,transparent_70%)] opacity-30 pointer-events-none">
        </div>

        <div class="max-w-300 mx-auto px-3 sm:px-5 md:px-8 relative z-10">
            <div class="flex flex-col mb-12">
                <div>
                    <div class="flex items-center gap-2 mb-4">
                        <div class="w-3 h-3 bg-primary rounded-sm"></div>
                        <span class="text-[12px] font-medium text-primary uppercase tracking-[0.08em]">The
                            Problem</span>
                    </div>
                    <h2 class="text-[28px] md:text-[32px] font-bold leading-[1.2] mb-4">
                        <span class="text-primary">Bank transfers are broken.</span><br />
                        <span class="text-text-secondary">Receiving payments shouldn't feel this stressful.</span>
                    </h2>
                    <p class="text-[16px] text-[#42514D] leading-[1.6] max-w-150">
                        Customers mistype account numbers.
                        Merchants repeat details all day.
                        Every transfer comes with doubt.

                        Stop manually typing long numbers.
                        Stop asking customers to recite details over the phone.

                        Payments should be simple.
                        Instead, they feel like a high-stakes typing test—one mistake, and the money is gone.
                    </p>
                </div>
            </div>

            <TransitionGroup name="card-expand" tag="div" class="grid grid-cols-1 md:grid-cols-3 gap-6" ref="cardsRef">
                <ReusableCard v-for="card in visibleCards" :key="card.title" :title="card.title" :body="card.body"
                    :size="'default'" :icon-wrapper-class="card.iconWrapperClass"
                    :body-color-class="'text-text-secondary'" :class-name="'min-h-55'">
                    <template #icon>
                        <component :is="card.icon" :size="20" :class="card.iconClass" />
                    </template>
                </ReusableCard>
            </TransitionGroup>

            <div class="mt-8 flex justify-center">
                <button type="button" @click="toggleCards"
                    class="btn-secondary h-11 px-6 inline-flex items-center gap-2">
                    {{ isExpanded ? 'View less' : 'View more' }}
                    <ChevronUp v-if="isExpanded" :size="16" />
                    <ChevronDown v-else :size="16" />
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { ShieldAlert, Hash, Repeat, EyeOff, Clock3, GitCompareArrows, ChevronDown, ChevronUp } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ReusableCard from './ReusableCard.vue'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const cardsRef = ref(null)
const isExpanded = ref(false)

const cards = [
    {
        title: 'Costly Typos',
        body: 'One wrong digit sends money to the wrong person. Reversing it is slow, stressful, and sometimes impossible.',
        icon: Hash,
        iconClass: 'text-alert-red-icon',
        iconWrapperClass: 'w-10 h-10 rounded-lg bg-alert-red-bg flex items-center justify-center mb-6'
    },
    {
        title: 'Endless Repetition',
        body: 'You repeat your bank details all day. Customers still get them wrong.',
        icon: Repeat,
        iconClass: 'text-alert-yellow-icon',
        iconWrapperClass: 'w-10 h-10 rounded-lg bg-alert-yellow-bg flex items-center justify-center mb-6'
    },
    {
        title: 'Trust Issues',
        body: "Customers hesitate when they're not sure who they're paying.",
        icon: ShieldAlert,
        iconClass: 'text-success-green-icon',
        iconWrapperClass: 'w-10 h-10 rounded-lg bg-alert-yellow-bg flex items-center justify-center mb-6'
    },
    {
        title: 'Identity Exposure',
        body: 'Merchants share full bank details publicly all day. This exposes you to fraud and unnecessary scrutiny.',
        icon: EyeOff,
        iconClass: 'text-alert-yellow-icon',
        iconWrapperClass: 'w-10 h-10 rounded-lg bg-alert-yellow-bg flex items-center justify-center mb-6'
    },
    {
        title: 'Verification Delays',
        body: '"Send me the screenshot." Waiting for confirmation slows down your business and frustrates customers.',
        icon: Clock3,
        iconClass: 'text-info-blue-icon',
        iconWrapperClass: 'w-10 h-10 rounded-lg bg-info-blue-bg flex items-center justify-center mb-6'
    },
    {
        title: 'Payment confusion',
        body: 'Different apps, different formats, constant uncertainty. Payments become frustrating instead of seamless.',
        icon: GitCompareArrows,
        iconClass: 'text-alert-yellow-icon',
        iconWrapperClass: 'w-10 h-10 rounded-lg bg-alert-yellow-bg flex items-center justify-center mb-6'
    }
]

const visibleCards = computed(() => {
    return isExpanded.value ? cards : cards.slice(0, 3)
})

const toggleCards = () => {
    isExpanded.value = !isExpanded.value
}

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

<style scoped>
.card-expand-enter-active,
.card-expand-leave-active {
    transition: all 0.3s ease;
}

.card-expand-enter-from,
.card-expand-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>