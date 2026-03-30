<template>
  <section id="faq" class="bg-white dark:bg-dark-base py-16 md:py-24 transition-colors duration-300">
    <div class="max-w-200 mx-auto px-4 sm:px-6 md:px-8">
      <div class="text-center mb-12">
        <h2 class="text-[28px] md:text-[36px] font-extrabold text-primary dark:text-dark-text mb-4">
          Questions people usually ask
        </h2>
        <p class="text-[16px] text-text-secondary dark:text-dark-muted">
          Everything you need to know about how Paylinc keeps transport payments clear and stress-free.
        </p>
      </div>

      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border border-gray-200 dark:border-dark-border rounded-2xl overflow-hidden bg-light-gray dark:bg-dark-surface transition-colors duration-300"
        >
          <button
            @click="toggleFAQ(index)"
            class="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
            :aria-expanded="openIndex === index"
          >
            <span class="text-[16px] md:text-[18px] font-semibold text-primary dark:text-dark-text pr-4">
              {{ faq.question }}
            </span>
            <ChevronDown
              :class="`w-5 h-5 shrink-0 text-primary dark:text-dark-text transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`"
            />
          </button>
          <div
            :class="`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`"
          >
            <div class="overflow-hidden">
              <div class="p-6 pt-0 text-[15px] md:text-[16px] text-text-secondary dark:text-dark-muted leading-relaxed">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { ChevronDown } from 'lucide-vue-next';

const faqs = [
  {
    question: 'Is Paylinc a bank or a payment app?',
    answer:
      "No. Paylinc does not hold your money or process payments. You still make transfers using your normal bank app. Paylinc simply helps the driver confirm that your transfer is real and successful."
  },
  {
    question: 'How does Paylinc stop fake alerts?',
    answer:
      "When a passenger makes a transfer, Paylinc verifies the transaction details directly. The driver gets a clear, trusted confirmation on their own phone, so they don't have to rely on seeing the passenger's screen."
  },
  {
    question: 'Do I need to link my bank account to use it?',
    answer:
      "Not at all. You don't link your bank account, BVN, or card to Paylinc. You only use it to generate a secure confirmation after you've done your normal bank transfer."
  },
  {
    question: 'What happens if the bank network is slow?',
    answer:
      "Since you are still using your normal bank, network delays can happen. Paylinc doesn't speed up the bank, but it gives both the driver and passenger a shared, transparent status so there are no arguments while waiting."
  },
  {
    question: 'Do drivers need a smartphone to confirm payments?',
    answer:
      'Yes, drivers or conductors need a basic smartphone with the Paylinc app to receive the trusted confirmation. This replaces the stress of waiting for delayed SMS alerts.'
  }
];

const openIndex = ref(null);

const toggleFAQ = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>
