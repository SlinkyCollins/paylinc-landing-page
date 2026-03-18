<template>
  <nav class="sticky top-0 z-50 bg-white h-[72px] border-b border-gray-border/50">
    <div class="max-w-[1200px] mx-auto h-full px-3 sm:px-5 md:px-8 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
          <Box :size="20" />
        </div>
        <span class="font-heading font-bold text-[20px] text-primary">Paylinc</span>
      </div>

      <div class="hidden md:flex items-center gap-8">
        <a href="#problem" class="font-medium text-[16px] text-[#42514D] hover:text-primary hover:underline underline-offset-4 transition-colors">The Problem</a>
        <a href="#process" class="font-medium text-[16px] text-[#42514D] hover:text-primary hover:underline underline-offset-4 transition-colors">How it Works</a>
        <a href="#audience" class="font-medium text-[16px] text-[#42514D] hover:text-primary hover:underline underline-offset-4 transition-colors">Who it's For</a>
      </div>

      <button class="btn-primary h-[40px] px-[24px]">
        Join Early Access
      </button>
    </div>
  </nav>
</template>

<script setup>
import { Box } from 'lucide-vue-next';
</script>