<template>
  <section id="faq" class="bg-white dark:bg-dark-base py-16 md:py-24 transition-colors duration-300 border-t border-gray-200/60 dark:border-dark-border/40">
    <div class="max-w-200 mx-auto px-4 sm:px-6 md:px-8">
      <div class="text-center mb-12">
        <h2 class="text-[28px] md:text-[36px] font-extrabold text-primary dark:text-dark-text mb-4">
          Questions people usually ask
        </h2>
        <p class="text-[16px] text-text-secondary dark:text-dark-muted">
          Learn more about how Paylinc is designed to make transport payments easier and less stressful.
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
    question: "What is Paylinc?",
    answer:
      "Paylinc is a digital platform designed to make transport payments easier and less stressful. It helps create a clearer payment experience for passengers and drivers during everyday movement."
  },
  {
    question: "Is Paylinc a bank or a payment app?",
    answer:
      "No. Paylinc is not a bank, and it does not hold your money. It is built to support transport payments in a simpler and clearer way."
  },
  {
    question: "Do I need to link my bank account to use it?",
    answer:
      "Not necessarily. Paylinc is being designed to keep transport payments simple, and more details about the exact flow will be shared as the product rolls out."
  },
  {
    question: "What happens if there's another cash scarcity like in 2023?",
    answer:
      "Paylinc is designed to reduce the stress of depending too much on cash for transport. The goal is to make movement easier through a simpler digital payment experience."
  },
  {
    question: "What happens if the bank network is slow?",
    answer:
      "Bank delays can still happen. Paylinc is being designed to make transport payments feel clearer and less stressful, even when movement is busy."
  },
  {
    question: "Do drivers need a smartphone to use Paylinc?",
    answer:
      "Yes. Drivers or conductors will need a smartphone to use the Paylinc flow more easily."
  }
];

const openIndex = ref(null);

const toggleFAQ = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>
