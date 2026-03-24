<template>
  <section class="bg-light dark:bg-dark-surface py-16 md:py-24 transition-colors duration-300" ref="sectionRef">
    <div class="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div class="w-full lg:w-1/2" ref="contentRef">
          <div class="inline-flex items-center gap-2 mb-6 bg-white dark:bg-dark-elevated px-3 py-1.5 rounded-full shadow-sm border border-gray-border/50 dark:border-dark-border">
            <div class="w-2 h-2 bg-accent rounded-full"></div>
            <span class="text-[12px] font-bold text-primary dark:text-dark-text uppercase tracking-wider">Our Solution</span>
          </div>

          <h2 class="text-[32px] md:text-[40px] font-extrabold text-primary dark:text-dark-text leading-[1.1] mb-6">
            A simpler way to pay for transport
          </h2>

          <p class="text-[18px] text-text-secondary dark:text-dark-muted leading-[1.6] mb-8 font-medium">
            Paylinc helps you pay for buses, Keke, and taxis without relying on cash.
          </p>

          <div class="space-y-4 mb-8">
            <div class="flex items-center gap-3 bg-white dark:bg-dark-elevated p-4 rounded-[16px] shadow-sm border border-gray-border/30 dark:border-dark-border">
              <div class="w-8 h-8 rounded-full bg-light dark:bg-dark-base flex items-center justify-center shrink-0">
                <CheckCircle2 :size="16" class="text-accent dark:text-dark-muted" />
              </div>
              <span class="text-[16px] font-semibold text-primary dark:text-dark-text">No searching for change.</span>
            </div>

            <div class="flex items-center gap-3 bg-white dark:bg-dark-elevated p-4 rounded-[16px] shadow-sm border border-gray-border/30 dark:border-dark-border">
              <div class="w-8 h-8 rounded-full bg-light dark:bg-dark-base flex items-center justify-center shrink-0">
                <CheckCircle2 :size="16" class="text-accent dark:text-dark-muted" />
              </div>
              <span class="text-[16px] font-semibold text-primary dark:text-dark-text">No delays while people pay one by one.</span>
            </div>

            <div class="flex items-center gap-3 bg-white dark:bg-dark-elevated p-4 rounded-[16px] shadow-sm border border-gray-border/30 dark:border-dark-border">
              <div class="w-8 h-8 rounded-full bg-light dark:bg-dark-base flex items-center justify-center shrink-0">
                <CheckCircle2 :size="16" class="text-accent dark:text-dark-muted" />
              </div>
              <span class="text-[16px] font-semibold text-primary dark:text-dark-text">No unnecessary arguments.</span>
            </div>
          </div>

          <p class="text-[20px] font-bold text-primary dark:text-dark-text">
            Just simple, faster movement.
          </p>
        </div>

        <div class="w-full lg:w-1/2" ref="imageRef">
          <div class="relative rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(26,60,56,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] aspect-square md:aspect-[4/3] w-full border border-gray-border/50 dark:border-dark-border flex items-center justify-center p-8">
            <img
              src="https://images.unsplash.com/photo-1625191824793-db4300fc138d?w=800&auto=format&fit=crop"
              alt="Smooth transport"
              class="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              referrerpolicy="no-referrer"
            >
            <div class="absolute inset-0 bg-primary/60 dark:bg-dark-base/80"></div>

            <div class="relative z-10 flex flex-col items-center gap-6 w-full max-w-[320px]">
              <div class="w-full bg-white dark:bg-dark-base rounded-[24px] shadow-xl p-6 border border-gray-border dark:border-dark-border flex flex-col gap-4">
                <div class="flex items-center gap-4 border-b border-gray-border/50 dark:border-dark-border pb-4">
                  <div class="w-12 h-12 rounded-full bg-light dark:bg-dark-surface flex items-center justify-center shrink-0">
                    <Bus :size="24" class="text-primary dark:text-dark-text" />
                  </div>
                  <div>
                    <div class="text-[16px] font-bold text-primary dark:text-dark-text leading-tight">Campus Shuttle</div>
                    <div class="text-[13px] text-text-secondary dark:text-dark-muted">Main Gate - Campus</div>
                  </div>
                </div>

                <div class="flex justify-between items-end pt-2">
                  <div>
                    <div class="text-[12px] text-text-secondary dark:text-dark-muted font-medium mb-1">Fare Amount</div>
                    <div class="text-[24px] font-extrabold text-primary dark:text-dark-text leading-none">₦500</div>
                  </div>
                  <div class="bg-accent/10 text-accent px-3 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-1.5">
                    <CheckCircle2 :size="14" />
                    Paid
                  </div>
                </div>

                <button class="w-full mt-2 bg-primary text-white font-bold text-[14px] py-3 rounded-xl flex items-center justify-center gap-2">
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { ArrowRight, Bus, CheckCircle2 } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const contentRef = ref(null)
const imageRef = ref(null)

let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.fromTo(
      contentRef.value?.children || [],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 70%',
        }
      }
    )

    gsap.fromTo(
      imageRef.value,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 60%',
        }
      }
    )
  }, sectionRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})

void ArrowRight
</script>
