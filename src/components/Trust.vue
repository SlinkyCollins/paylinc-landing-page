<template>
    <section class="bg-white py-10 sm:py-16 md:py-24" ref="sectionRef">
        <div class="max-w-300 mx-auto px-3 sm:px-5 md:px-8">
            <div class="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                <!-- Left: Image -->
                <div class="w-full md:w-1/2 relative" ref="imageRef">
                    <div
                        class="relative rounded-4xl overflow-hidden shadow-[0_12px_40px_rgba(26,60,56,0.12)] aspect-4/3 md:aspect-3/2 w-full max-w-125 mx-auto md:ml-0">
                            <img :src="handshakeImg" alt="Business handshake" class="w-full h-full object-cover" loading="lazy" />
                        <div class="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>

                        <!-- Overlay Badge -->
                        <div
                            class="absolute bottom-6 right-6 bg-white rounded-2xl p-4 shadow-lg flex flex-col gap-1 min-w-35">
                            <span class="text-[12px] text-text-secondary font-medium">Transfer Accuracy</span>
                            <div class="flex items-center gap-2">
                                <span class="text-[24px] font-bold text-primary">100%</span>
                                <div
                                    class="flex items-center gap-1 text-accent text-[12px] font-medium bg-light px-2 py-1 rounded-full">
                                    <TrendingUp :size="12" />
                                    No more typos
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right: Text -->
                <div class="w-full md:w-1/2" ref="textRef">
                    <div class="flex items-center gap-2 mb-6">
                        <div class="w-3 h-3 bg-primary rounded-sm"></div>
                        <span class="text-[12px] font-medium text-primary uppercase tracking-[0.08em]">Trust &amp;
                            Security</span>
                    </div>

                    <h2 class="text-[28px] md:text-[36px] font-bold text-primary leading-[1.2] mb-6">
                        Not a wallet.<br />
                        Just a safer way to identify.
                    </h2>

                    <p class="text-[16px] text-[#42514D] leading-[1.6] mb-8 max-w-120">
                        Paylinc does not hold your money. We act as a secure identity layer that sits on top of your
                        existing
                        bank. You keep using the apps you love, but with the added safety of verified identities.
                    </p>

                    <ul class="space-y-4">
                        <li class="flex items-start gap-3">
                            <CheckCircle2 :size="20" class="text-accent shrink-0 mt-0.5" />
                            <span class="text-[16px] text-primary font-medium">Money goes directly to your bank</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <CheckCircle2 :size="20" class="text-accent shrink-0 mt-0.5" />
                            <span class="text-[16px] text-primary font-medium">Verified Payment Identity</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <CheckCircle2 :size="20" class="text-accent shrink-0 mt-0.5" />
                            <span class="text-[16px] text-primary font-medium">Works with all major fintech apps</span>
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