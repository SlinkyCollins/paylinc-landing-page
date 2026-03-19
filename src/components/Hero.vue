<template>
    <section class="pt-8 pb-12 md:pt-12 md:pb-24 px-3 sm:px-5 md:px-8 max-w-[1200px] mx-auto" ref="containerRef">
        <div
            class="flex flex-col md:flex-row rounded-[32px] overflow-hidden shadow-[0_8px_32px_rgba(26,60,56,0.08)] min-h-[560px]">
            <!-- Left Side -->
            <div class="w-full md:w-[60%] bg-primary p-8 md:p-16 flex flex-col justify-center relative z-10">
                <div ref="textRef">
                    <div
                        class="inline-flex items-center h-[20px] px-[16px] bg-light text-primary text-[12px] font-medium rounded-full mb-6">
                        <span class="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span>
                        Safer Payments for Everyone
                    </div>

                    <h1 class="text-[40px] md:text-[48px] font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                        One identity for<br /><span class="text-alert-yellow-icon">all</span> your<br />payments
                    </h1>

                    <p class="text-[16px] md:text-[18px] text-light/90 leading-[1.6] mb-10 max-w-[480px]">
                        Receive money securely using a verified username or QR code. Stop sharing raw bank details and
                        eliminate transfer mistakes forever.
                    </p>
                </div>

                <div ref="buttonsRef" class="flex flex-wrap items-center gap-4">
                    <button
                        class="bg-white text-primary font-bold text-[16px] h-[44px] px-[28px] rounded-full shadow-sm hover:bg-light transition-all duration-200 ease-out hover:scale-[1.04] flex items-center gap-2">
                        Join Early Access
                        <ArrowUpRight :size="18" />
                    </button>
                    <button
                        class="bg-transparent text-white border border-white/30 font-bold text-[16px] h-[44px] px-[28px] rounded-full hover:bg-white/10 transition-all duration-200 ease-out hover:scale-[1.04]">
                        See How It Works
                    </button>
                </div>
            </div>

            <!-- Right Side -->
            <div
                class="w-full md:w-[40%] relative min-h-[400px] md:min-h-full bg-[#E3E7E5] flex items-center justify-center p-4 sm:p-6 md:p-8">
                    <img :src="heroImg" alt="Modern workspace" class="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply" loading="lazy"/>
                <div class="absolute inset-0 bg-primary/10"></div>

                <!-- Floating Card -->
                <div ref="cardRef"
                    class="relative z-10 w-full max-w-[320px] bg-white rounded-[24px] shadow-[0_12px_40px_rgba(26,60,56,0.12)] p-6">
                    <div class="flex items-center justify-between mb-8">
                        <div class="flex items-center gap-3">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
                                alt="David Miller" class="w-12 h-12 rounded-full object-cover border-2 border-light"
                                referrerpolicy="no-referrer" />
                            <div>
                                <h3 class="font-bold text-[16px] text-primary leading-tight">David Miller</h3>
                                <p class="text-[14px] text-text-secondary">@david_m_store</p>
                            </div>
                        </div>
                        <div class="w-6 h-6 rounded-full bg-[#3A8DDE] text-white flex items-center justify-center">
                            <CheckCircle2 :size="14" :stroke-width="3" />
                        </div>
                    </div>

                    <div
                        class="relative group bg-light-gray rounded-[16px] p-6 flex justify-center mb-6 border border-gray-border/50 cursor-pointer hover:bg-light transition-colors duration-300">
                        <div
                            class="absolute inset-0 rounded-[16px] border-2 border-transparent group-hover:border-accent/30 transition-colors duration-300">
                        </div>
                        <div class="relative z-10 animate-[pulse_3s_ease-in-out_infinite] group-hover:animate-none">
                            <QrCode :size="80"
                                class="text-primary group-hover:scale-105 transition-transform duration-300"
                                :stroke-width="1.5" />
                        </div>

                        <!-- Tooltip -->
                        <div
                            class="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-[12px] font-medium py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-md z-20">
                            Scan to pay securely
                            <!-- Tooltip Arrow -->
                            <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45">
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex items-center justify-center gap-2 bg-light text-primary text-[12px] font-medium py-2 px-4 rounded-full w-max mx-auto">
                        <CheckCircle2 :size="14" class="text-accent" />
                        Verified Identity Layer
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import heroImg from '@/assets/images/payment.webp'
import { onMounted, onUnmounted, ref } from 'vue'
import { ArrowUpRight, CheckCircle2, QrCode } from 'lucide-vue-next'
import gsap from 'gsap'

const containerRef = ref(null)
const textRef = ref(null)
const buttonsRef = ref(null)
const cardRef = ref(null)

let ctx

onMounted(() => {
    ctx = gsap.context(() => {
        // Text fade in left-to-right
        gsap.fromTo(
            textRef.value?.children || [],
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
        )

        // Buttons scale in
        gsap.fromTo(
            buttonsRef.value?.children || [],
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.5, delay: 0.6, stagger: 0.1, ease: 'back.out(1.5)' }
        )

        // Floating card slides up with fade
        gsap.fromTo(
            cardRef.value,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' }
        )

        // Floating animation yoyo
        gsap.to(cardRef.value, {
            y: -8,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 1.1
        })
    }, containerRef.value)
})

onUnmounted(() => {
    ctx?.revert()
})
</script>