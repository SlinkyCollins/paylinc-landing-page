<template>
    <section id="signup" class="bg-light-gray py-10 sm:py-16 md:py-24" ref="sectionRef">
        <div class="max-w-300 mx-auto px-3 sm:px-5 md:px-8 flex justify-center">
            <div ref="cardRef"
                class="w-full max-w-150 bg-primary rounded-4xl p-8 md:p-12 shadow-[0_24px_64px_rgba(26,60,56,0.16)] flex flex-col items-center text-center">
                <h2 class="text-[28px] md:text-[32px] font-extrabold text-white mb-3">
                    Be among the first to try Paylinc
                </h2>
                <p class="text-[16px] text-light/90 mb-8 max-w-100">
                    Get early access, secure your username, and stay updated as we launch.
                </p>

                <form ref="formRef" class="w-full flex flex-col gap-4 mb-6" @submit.prevent>
                    <div class="flex flex-col md:flex-row gap-4">
                        <input type="text" placeholder="Full Name"
                            class="w-full md:w-1/2 h-11 px-4 rounded-lg bg-accent border border-accent text-white placeholder:text-white/60 focus:outline-none focus:border-white/30 transition-colors text-[16px]" />
                        <div class="relative w-full md:w-1/2">
                            <select
                                class="w-full h-11 px-4 rounded-lg bg-accent border border-accent text-white focus:outline-none focus:border-white/30 transition-colors text-[16px] appearance-none cursor-pointer"
                                value="">
                                <option value="" disabled class="text-white/60">I am a...</option>
                                <option value="merchant" class="text-white">Merchant</option>
                                <option value="pos_operator" class="text-white">POS Operator</option>
                                <option value="small_business" class="text-white">Small Business</option>
                                <option value="individual" class="text-white">Individual</option>
                            </select>
                            <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/60">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <input type="email" placeholder="Email Address"
                        class="w-full h-11 px-4 rounded-lg bg-accent border border-accent text-white placeholder:text-white/60 focus:outline-none focus:border-white/30 transition-colors text-[16px]" />

                    <button type="submit"
                        class="w-full h-12 bg-white text-primary font-bold text-[16px] rounded-lg shadow-sm hover:bg-light transition-all duration-200 ease-out hover:scale-[1.02] mt-2 cursor-pointer">
                        Join Early Access
                    </button>
                </form>

                <div class="flex items-center justify-center gap-2 text-[12px] text-light/60">
                    <Lock :size="12" />
                    <span>We'll only send you important updates. No spam.</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Lock } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const cardRef = ref(null)
const formRef = ref(null)

let ctx

onMounted(() => {
    ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.value,
                start: 'top 70%'
            }
        })

        tl.fromTo(
            cardRef.value,
            { opacity: 0, scale: 0.95, y: 30 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out'
            }
        )

        tl.fromTo(
            formRef.value?.children || [],
            { opacity: 0, y: 10 },
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.1,
                ease: 'power2.out'
            },
            '-=0.2'
        )
    }, sectionRef.value)
})

onUnmounted(() => {
    ctx?.revert()
})
</script>