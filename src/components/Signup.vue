<template>
    <section id="signup" class="bg-light-gray dark:bg-dark-surface py-8 max-[320px]:py-6 sm:py-16 md:py-24 transition-colors duration-300 overflow-x-clip" ref="sectionRef">
        <div class="max-w-300 mx-auto px-3 max-[320px]:px-2.5 sm:px-5 md:px-8 flex justify-center overflow-x-clip">
            <div ref="cardRef"
                class="w-[90vw] max-w-[90vw] min-[321px]:max-w-[88vw] sm:w-full sm:max-w-150 bg-primary dark:bg-dark-base rounded-4xl max-[320px]:rounded-3xl p-4 max-[320px]:p-3.5 min-[321px]:p-5 sm:p-6 md:p-12 shadow-[0_24px_64px_rgba(26,60,56,0.16)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.6)] flex flex-col items-center text-center transition-colors duration-300 border border-transparent dark:border-dark-border">
                <h2 class="text-[24px] max-[320px]:text-[22px] min-[321px]:text-[26px] md:text-[32px] font-extrabold text-white dark:text-dark-text mb-3 leading-tight">
                    Be among the first to try Paylinc
                </h2>

                <p class="text-[14px] max-[320px]:text-[13px] min-[321px]:text-[15px] sm:text-[16px] text-light/90 dark:text-dark-muted mb-6 max-[320px]:mb-5 sm:mb-8 max-w-full sm:max-w-100">
                    Get early access, secure your username, and stay updated as we launch.
                </p>

                <form ref="formRef" class="w-full flex flex-col gap-3 max-[320px]:gap-2.5 sm:gap-4 mb-5 sm:mb-6" @submit.prevent="handleSubmit">
                    <div class="flex flex-col md:flex-row gap-3 max-[320px]:gap-2.5 sm:gap-4">
                        <input v-model.trim="form.name" type="text" name="name" placeholder="Full Name" required
                            class="w-full min-w-0 md:w-1/2 h-11 px-3.5 max-[320px]:px-3 rounded-lg bg-accent dark:bg-dark-elevated border border-accent dark:border-dark-border text-white dark:text-dark-text placeholder:text-white/60 dark:placeholder:text-dark-muted focus:outline-none focus:border-white/30 dark:focus:border-accent transition-colors text-[15px] sm:text-[16px]" />

                        <div class="relative w-full min-w-0 md:w-1/2">
                            <select v-model="form.userType" name="user_type" required
                                class="w-full min-w-0 h-11 px-3.5 max-[320px]:px-3 rounded-lg bg-accent dark:bg-dark-elevated border border-accent dark:border-dark-border text-white dark:text-dark-text focus:outline-none focus:border-white/30 dark:focus:border-accent transition-colors text-[15px] sm:text-[16px] appearance-none cursor-pointer">
                                <option disabled value="" class="text-white/60 dark:text-dark-muted">I am a...</option>
                                <option value="passenger" class="text-white dark:text-dark-text">Passenger</option>
                                <option value="driver" class="text-white dark:text-dark-text">Driver</option>
                                <option value="transport_company" class="text-white dark:text-dark-text">Transport Company</option>
                            </select>

                            <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/60 dark:text-dark-muted">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <input v-model.trim="form.email" type="email" name="email" placeholder="Email" required
                        class="w-full min-w-0 h-11 px-3.5 max-[320px]:px-3 rounded-lg bg-accent dark:bg-dark-elevated border border-accent dark:border-dark-border text-white dark:text-dark-text placeholder:text-white/60 dark:placeholder:text-dark-muted focus:outline-none focus:border-white/30 dark:focus:border-accent transition-colors text-[15px] sm:text-[16px]" />

                    <button type="submit" :disabled="isSubmitting"
                        class="w-full h-11 sm:h-12 px-4 bg-white dark:bg-accent text-primary dark:text-white font-bold text-[15px] sm:text-[16px] rounded-lg shadow-sm hover:bg-light dark:hover:bg-accent/90 transition-all duration-200 ease-out hover:scale-[1.02] mt-1.5 sm:mt-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100">
                        <span class="flex items-center justify-center gap-2">
                            <svg v-if="isSubmitting" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"
                                aria-hidden="true">
                                <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"
                                    class="opacity-25" />
                                <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" class="opacity-90" />
                            </svg>

                            <span>
                                {{ isSubmitting ? 'Submitting...' : 'Join Early Access' }}
                            </span>
                        </span>
                    </button>
                </form>

                <!-- Inline Error Alert -->
                <transition enter-active-class="transition duration-250 ease-out"
                    enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 -translate-y-1">
                    <div v-if="errorMessage"
                        class="w-full mb-4 rounded-2xl border border-red-300/30 bg-red-100/10 px-3.5 py-3 sm:px-4 text-left backdrop-blur-sm">
                        <div class="flex items-start gap-3">
                            <div
                                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-red-100 text-sm font-bold">
                                <Info />
                            </div>

                            <div class="min-w-0">
                                <p class="text-sm font-semibold text-red-100">Something needs fixing</p>
                                <p class="text-sm text-red-100/90 leading-5">
                                    {{ errorMessage }}
                                </p>
                            </div>
                        </div>
                    </div>
                </transition>

                <div class="flex w-full items-start justify-center gap-2 text-[11px] max-[320px]:text-[10px] min-[321px]:text-[12px] text-light/60 dark:text-dark-muted">
                    <Lock :size="12" class="mt-0.5 shrink-0" />
                    <span class="min-w-0 text-left leading-[1.4]">We'll only send you important updates. No spam.</span>
                </div>
            </div>
        </div>

        <!-- Success Toast -->
        <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 translate-y-3"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-2">
            <div v-if="toast.show"
                class="fixed z-50 bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-5 md:bottom-5 w-[calc(100%-1.25rem)] max-w-sm rounded-2xl border border-green-200 bg-white/95 backdrop-blur px-3.5 py-3 sm:px-4 shadow-xl">
                <div class="flex items-start gap-3 text-left">
                    <div
                        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 text-sm font-bold">
                        ✓
                    </div>

                    <div class="min-w-0">
                        <p class="text-sm font-semibold text-primary">Success</p>
                        <p class="text-sm text-text-secondary leading-5">
                            {{ toast.message }}
                        </p>
                    </div>

                    <button type="button" @click="hideToast"
                        class="ml-auto text-text-secondary/70 hover:text-primary transition" aria-label="Close toast">
                        ✕
                    </button>
                </div>
            </div>
        </transition>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { Info, Lock } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const cardRef = ref(null)
const formRef = ref(null)

const form = ref({
    name: '',
    email: '',
    userType: '',
})

const isSubmitting = ref(false)
const errorMessage = ref('')

const toast = ref({
    show: false,
    message: '',
})

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnjgrbqy'

let toastTimeout = null
let ctx = null

function isValidEmail(email) {
    return /^(?!.*\.\.)(?!.*\.@)[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/.test(
        email
    )
}

function isValidName(name) {
    const value = name.trim()

    // Must contain at least 2 chars and at least one letter
    if (value.length < 2) return false
    if (!/[A-Za-z]/.test(value)) return false

    // Allow letters, spaces, apostrophes, dots, hyphens
    // but reject names made only of punctuation like "." or "--"
    return /^[A-Za-z]+(?:[A-Za-z .'-]*[A-Za-z])?$/.test(value)
}

function showToast(message) {
    toast.value.message = message
    toast.value.show = true

    if (toastTimeout) clearTimeout(toastTimeout)

    toastTimeout = setTimeout(() => {
        toast.value.show = false
    }, 3500)
}

function hideToast() {
    toast.value.show = false
    if (toastTimeout) clearTimeout(toastTimeout)
}

watch(
    [() => form.value.name, () => form.value.email, () => form.value.userType],
    () => {
        if (errorMessage.value) {
            errorMessage.value = ''
        }
    }
)

async function handleSubmit() {
    errorMessage.value = ''

    if (!form.value.name || !form.value.email || !form.value.userType) {
        errorMessage.value = 'Please fill in your name, email, and user type.'
        return
    }

    if (!isValidEmail(form.value.email)) {
        errorMessage.value = 'Please enter a valid email address.'
        return
    }

    if (!isValidName(form.value.name)) {
        errorMessage.value = 'Please enter a valid name.'
        return
    }

    isSubmitting.value = true

    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                name: form.value.name,
                email: form.value.email,
                user_type: form.value.userType,
                source: 'landing_page',
            }),
        })

        const data = await response.json()

        if (response.ok) {
            showToast('You\'re in. We\'ll notify you as soon as Paylinc is live.')
            form.value.name = ''
            form.value.email = ''
            form.value.userType = ''
        } else {
            errorMessage.value =
                data?.errors?.[0]?.message || 'Something went wrong. Please try again.'
        }
    } catch {
        errorMessage.value = 'Network error. Please try again.'
    } finally {
        isSubmitting.value = false
    }
}

onMounted(() => {
    ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.value,
                start: 'top 70%',
            },
        })

        tl.fromTo(
            cardRef.value,
            { opacity: 0, scale: 0.95, y: 30 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out',
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
                ease: 'power2.out',
            },
            '-=0.2'
        )
    }, sectionRef.value)
})

onUnmounted(() => {
    ctx?.revert()
    if (toastTimeout) clearTimeout(toastTimeout)
})
</script>
