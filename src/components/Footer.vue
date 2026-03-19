<template>
    <footer class="bg-white border-t border-gray-border pt-16 pb-8">
        <div class="max-w-[1200px] mx-auto px-3 sm:px-5 md:px-8">
            <div class="flex flex-col md:flex-row justify-between gap-12 mb-16">
                <!-- Left: Logo & Description -->
                <div class="w-full md:w-1/3">
                    <div class="flex items-center gap-2 mb-6">
                        <img :src="logo" alt="Paylinc Logo" class="w-6 h-6" />
                        <span class="font-heading font-bold text-[18px] text-primary">Paylinc</span>
                    </div>
                    <p class="text-[14px] text-text-secondary leading-[1.6] max-w-[280px]">
                        The secure identity layer for modern payments. We do not process funds; we make receiving them
                        safer.
                    </p>
                </div>

                <!-- Right: Links -->
                <div class="w-full md:w-1/2 flex gap-16 md:justify-end">
                    <div>
                        <h4 class="font-bold text-[14px] text-primary mb-4">Product</h4>
                        <ul class="space-y-3">
                            <li><a href="#"
                                    class="text-[14px] text-text-secondary hover:text-primary transition-colors">How it
                                    works</a></li>
                            <li><a href="#"
                                    class="text-[14px] text-text-secondary hover:text-primary transition-colors">Security</a>
                            </li>
                            <li><a href="#"
                                    class="text-[14px] text-text-secondary hover:text-primary transition-colors">For
                                    Business</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-[14px] text-primary mb-4">Company</h4>
                        <ul class="space-y-3">
                            <li><a href="#"
                                    class="text-[14px] text-text-secondary hover:text-primary transition-colors">About</a>
                            </li>
                            <li><a href="#"
                                    class="text-[14px] text-text-secondary hover:text-primary transition-colors">Contact</a>
                            </li>
                            <li><a href="#"
                                    class="text-[14px] text-text-secondary hover:text-primary transition-colors">Privacy
                                    Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Bottom: Copyright & Socials -->
            <div
                class="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-border/50 gap-4">
                <p class="text-[12px] text-text-secondary">
                    © {{ new Date().getFullYear() }} Paylinc Technologies. All rights reserved.
                </p>

                <div class="flex items-center gap-4">
                    <a href="#" class="text-text-secondary hover:text-primary transition-colors">
                        <Twitter :size="16" />
                    </a>
                    <a href="#" class="text-text-secondary hover:text-primary transition-colors">
                        <Linkedin :size="16" />
                    </a>
                    <a href="#" class="text-text-secondary hover:text-primary transition-colors">
                        <Instagram :size="16" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import logo from '@/assets/images/logo.png'
import { Box, Instagram, Linkedin, Twitter } from 'lucide-vue-next'
</script>