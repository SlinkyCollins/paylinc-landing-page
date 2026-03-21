<template>
    <div :class="[
        'fixed bottom-6 right-6 md:bottom-20 md:right-6 z-50 transition-all duration-300',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
    ]">
        <button @click="scrollToTop"
            class="bg-primary dark:bg-white text-white dark:text-primary h-11 w-11 rounded-full shadow-sm hover:bg-accent dark:hover:bg-gray-200 transition-all duration-200 ease-out hover:scale-[1.04] hover:shadow-md flex items-center justify-center cursor-pointer"
            aria-label="Back to top">
            <ArrowUp :size="20" />
        </button>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { ArrowUp } from 'lucide-vue-next'

const isVisible = ref(false)

const toggleVisibility = () => {
    if (window.scrollY > 300) {
        isVisible.value = true
    } else {
        isVisible.value = false
    }
}

onMounted(() => {
    window.addEventListener('scroll', toggleVisibility)
})

onUnmounted(() => {
    window.removeEventListener('scroll', toggleVisibility)
})

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>
