<template>
    <section id="signup" class="bg-light-gray py-10 sm:py-16 md:py-24" ref="sectionRef">
        <div class="max-w-300 mx-auto px-3 sm:px-5 md:px-8 flex justify-center">
            <div ref="cardRef"
                class="w-full max-w-150 bg-primary rounded-4xl p-8 md:p-12 shadow-[0_24px_64px_rgba(26,60,56,0.16)] flex flex-col items-center text-center">
                <h2 class="text-[28px] md:text-[32px] font-extrabold text-white mb-3 leading-tight">
                    Be among the first to try Paylinc
                </h2>

                <p class="text-[16px] text-light/90 mb-8 max-w-100">
                    Get early access, secure your username, and stay updated as we launch.
                </p>

                <form ref="formRef" class="w-full flex flex-col gap-4 mb-6" @submit.prevent="handleSubmit">
                    <div class="flex flex-col md:flex-row gap-4">
                        <input v-model.trim="form.name" type="text" name="name" placeholder="Full Name"
                            class="w-full md:w-1/2 h-11 px-4 rounded-lg bg-accent border border-accent text-white placeholder:text-white/60 focus:outline-none focus:border-white/30 transition-colors text-[16px]" />

                        <div class="relative w-full md:w-1/2">
                            <select v-model="form.userType" name="user_type"
                                class="w-full h-11 px-4 rounded-lg bg-accent border border-accent text-white focus:outline-none focus:border-white/30 transition-colors text-[16px] appearance-none cursor-pointer">
                                <option disabled value="">I am a...</option>
                                <option value="merchant">Merchant</option>
                                <option value="pos_operator">POS Operator</option>
                                <option value="small_business">Small Business</option>
                                <option value="individual">Individual</option>
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

                    <input v-model.trim="form.email" type="email" name="email" placeholder="Email Address"
                        class="w-full h-11 px-4 rounded-lg bg-accent border border-accent text-white placeholder:text-white/60 focus:outline-none focus:border-white/30 transition-colors text-[16px]" />

                    <button type="submit" :disabled="isSubmitting"
                        class="w-full h-12 bg-white text-primary font-bold text-[16px] rounded-lg shadow-sm hover:bg-light transition-all duration-200 ease-out hover:scale-[1.02] mt-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100">
                        {{ isSubmitting ? 'Submitting...' : 'Join Early Access' }}
                    </button>
                </form>

                <p v-if="successMessage" class="mb-4 text-sm text-green-200">
                    {{ successMessage }}
                </p>

                <p v-if="errorMessage" class="mb-4 text-sm text-red-200">
                    {{ errorMessage }}
                </p>

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

const form = ref({
    name: '',
    email: '',
    userType: '',
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnjgrbqy'

function isValidEmail(email) {
    return /^(?!.*\.\.)(?!.*\.@)[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/.test(email)
}

async function handleSubmit() {
    successMessage.value = ''
    errorMessage.value = ''

    if (!form.value.name || !form.value.email || !form.value.userType) {
        errorMessage.value = 'Please fill in your name, email, and user type.'
        return
    }

    if (!isValidEmail(form.value.email)) {
        errorMessage.value = 'Please enter a valid email address.'
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
            successMessage.value = 'Thank you for joining! We will keep you updated on our launch.'
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

let ctx

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
})
</script>