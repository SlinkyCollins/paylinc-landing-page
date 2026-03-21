<template>
    <section class="bg-white dark:bg-dark-base py-12 border-b border-gray-border/50 dark:border-dark-border transition-colors duration-300">
        <div class="max-w-300 mx-auto px-3 sm:px-5 md:px-8 flex flex-col items-center">
            <h3 class="text-[12px] font-medium text-text-secondary dark:text-dark-muted uppercase tracking-[0.08em] mb-8 text-center">
                Payments received in your favorite apps
            </h3>

            <div class="relative w-full flex justify-center items-center h-10">
                <div class="flex justify-center items-center gap-8 md:gap-16">
                    <!-- Using Lucide icons as placeholders for brand logos since brand SVGs aren't available -->
                    <div class="flex items-center gap-2 text-text-secondary dark:text-dark-muted opacity-80 hover:opacity-100 transition-opacity">
                        <span class="font-bold text-[24px] tracking-tighter">VISA</span>
                    </div>
                    <div class="flex items-center gap-2 text-text-secondary dark:text-dark-muted opacity-80 hover:opacity-100 transition-opacity">
                        <div class="flex -space-x-3">
                            <div class="w-8 h-8 rounded-full bg-text-secondary/80 dark:bg-dark-muted/80 mix-blend-multiply dark:mix-blend-screen"></div>
                            <div class="w-8 h-8 rounded-full bg-text-secondary/80 dark:bg-dark-muted/80 mix-blend-multiply dark:mix-blend-screen"></div>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 text-text-secondary dark:text-dark-muted opacity-80 hover:opacity-100 transition-opacity">
                        <Landmark :size="32" :stroke-width="1.5" />
                    </div>
                    <div class="flex items-center gap-2 text-text-secondary dark:text-dark-muted opacity-80 hover:opacity-100 transition-opacity">
                        <Wallet :size="32" :stroke-width="1.5" />
                    </div>
                    <div class="flex items-center gap-2 text-text-secondary dark:text-dark-muted opacity-80 hover:opacity-100 transition-opacity">
                        <span class="font-bold text-[20px]">Pay</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { CreditCard, Landmark, Plus, Wallet } from 'lucide-vue-next'

void CreditCard
void Plus
</script>
