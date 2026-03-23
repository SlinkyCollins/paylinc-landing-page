<template>
    <section class="bg-white dark:bg-dark-base py-10 sm:py-16 md:py-24 transition-colors duration-300 overflow-x-clip" ref="sectionRef">
        <div class="max-w-300 mx-auto px-3 sm:px-5 md:px-8">
            <div class="flex flex-col md:flex-row md:items-stretch items-center gap-12 md:gap-16 lg:gap-24">
                <!-- Left: Image -->
                <div class="w-full md:w-1/2 relative flex" ref="imageRef">
                    <div
                        class="relative w-full max-w-lg md:max-w-none mx-auto md:mx-0 rounded-4xl overflow-hidden shadow-[0_12px_40px_rgba(26,60,56,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] aspect-4/3 md:aspect-auto md:min-h-112 lg:aspect-3/2 lg:min-h-0 transition-shadow duration-300">
                        <img :src="handshakeImg" alt="Business handshake" class="w-full h-full object-cover dark:opacity-80 transition-opacity duration-300"
                            loading="lazy" />
                        <div class="absolute inset-0 bg-primary/10 dark:bg-dark-base/40 mix-blend-multiply transition-colors duration-300"></div>

                        <!-- Overlay Badge -->
                        <div
                            class="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 bg-white dark:bg-dark-elevated rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)] flex flex-col gap-1 min-w-34 sm:min-w-35 transition-colors duration-300 border border-transparent dark:border-dark-border">
                            <span class="text-[12px] text-text-secondary dark:text-dark-muted font-medium">Transfer Accuracy</span>
                            <div class="flex items-center gap-2">
                                <span class="text-[20px] sm:text-[24px] font-bold text-primary dark:text-dark-text">100%</span>
                                <div
                                    class="flex items-center gap-1 text-accent dark:text-dark-muted text-[11px] sm:text-[12px] font-medium bg-light dark:bg-dark-surface px-2 py-1 rounded-full transition-colors duration-300">
                                    <TrendingUp :size="12" />
                                    Fewer typos
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right: Text -->
                <div class="w-full md:w-1/2" ref="textRef">
                    <div class="flex items-center gap-2 mb-6">
                        <div class="w-3 h-3 bg-primary dark:bg-dark-muted rounded-sm"></div>
                        <span class="text-[12px] font-medium text-primary dark:text-dark-muted uppercase tracking-[0.08em]">Trust &amp;
                            Security</span>
                    </div>

                    <h2 class="text-[28px] md:text-[36px] font-bold text-primary dark:text-dark-text leading-[1.2] mb-6">
                        Not a wallet.<br />
                        Just a safer way to get paid.
                    </h2>

                    <p class="text-[16px] text-[#42514D] dark:text-dark-muted leading-[1.6] mb-8 max-w-120">
                        Paylinc doesn't hold your money. It acts as a secure identity layer on top of your existing
                        bank. You keep using the apps you trust—just with safer, verified payments.
                    </p>

                    <ul class="space-y-4">
                        <li class="flex items-start gap-3">
                            <CheckCircle2 :size="20" class="text-accent dark:text-dark-muted shrink-0 mt-1" />
                            <span class="text-[16px] text-text-secondary dark:text-dark-muted leading-[1.6]"><strong
                                    class="text-primary dark:text-dark-text font-bold">Money goes straight to your bank: </strong> No intermediaries. No holding funds. </span>
                        </li>
                        <li class="flex items-start gap-3">
                            <CheckCircle2 :size="20" class="text-accent dark:text-dark-muted shrink-0 mt-1" />
                            <span class="text-[16px] text-text-secondary dark:text-dark-muted leading-[1.6]"><strong
                                    class="text-primary dark:text-dark-text font-bold">Verified payment identity:</strong> Customers know exactly who they're paying—no confusion. </span>
                        </li>
                        <li class="flex items-start gap-3">
                            <CheckCircle2 :size="20" class="text-accent dark:text-dark-muted shrink-0 mt-1" />
                            <span class="text-[16px] text-text-secondary dark:text-dark-muted leading-[1.6]"><strong
                                    class="text-primary dark:text-dark-text font-bold">Fewer typing errors:</strong> QR codes and usernames reduce the risk of wrong account numbers.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <CheckCircle2 :size="20" class="text-accent dark:text-dark-muted shrink-0 mt-1" />
                            <span class="text-[16px] text-text-secondary dark:text-dark-muted leading-[1.6]"><strong class="text-primary dark:text-dark-text font-bold">Keep your details private:</strong> No need to share your bank account every time. </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import handshakeImg from '@/assets/images/handshake.webp'
import { onMounted, onUnmounted, ref } from 'vue'
import { CheckCircle2, TrendingUp } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const imageRef = ref(null)
const textRef = ref(null)

let ctx

onMounted(() => {
    ctx = gsap.context(() => {
        gsap.fromTo(
            imageRef.value,
            { opacity: 0, x: -40 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.value,
                    start: 'top 60%'
                }
            }
        )

        gsap.fromTo(
            textRef.value?.children || [],
            { opacity: 0, x: 40 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
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
