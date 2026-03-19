<template>
    <div :class="cardClass">
        <div v-if="$slots.icon" :class="iconWrapperClass">
            <slot name="icon" />
        </div>

        <h3 :class="titleClass">{{ title }}</h3>

        <p :class="bodyClass">{{ body }}</p>

        <div v-if="$slots.footer" :class="footerClass">
            <slot name="footer" />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

// Usage examples:
// <ReusableCard title="Card title" body="Card body" />
// <ReusableCard title="Card title" body="Card body" size="compact" align="center" variant="gray">
//   <template #icon>
//     <Store :size="20" class="text-primary" />
//   </template>
//   <template #footer>
//     <button class="btn-primary">Action</button>
//   </template>
// </ReusableCard>

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    variant: {
        type: String,
        default: 'white'
    },
    size: {
        type: String,
        default: 'default'
    },
    align: {
        type: String,
        default: 'left'
    },
    iconWrapperClass: {
        type: String,
        default: 'w-10 h-10 rounded-lg bg-light flex items-center justify-center mb-6'
    },
    footerClass: {
        type: String,
        default: 'mt-4'
    },
    bodyColorClass: {
        type: String,
        default: 'text-text-secondary'
    },
    titleClassName: {
        type: String,
        default: ''
    },
    bodyClassName: {
        type: String,
        default: ''
    },
    className: {
        type: String,
        default: ''
    }
})

const variantClassMap = {
    white: 'bg-white',
    gray: 'bg-light-gray',
    primary: 'bg-primary text-white'
}

const sizeClassMap = {
    compact: 'min-h-[160px] p-5',
    audience: 'min-h-[160px] p-6',
    default: 'min-h-[220px] p-6',
    large: 'min-h-[260px] p-8'
}

const alignClassMap = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right'
}

const cardClass = computed(() => {
    const variantClass = variantClassMap[props.variant] || variantClassMap.white
    const sizeClass = sizeClassMap[props.size] || sizeClassMap.default
    const alignClass = alignClassMap[props.align] || alignClassMap.left

    return [
        variantClass,
        sizeClass,
        alignClass,
        'rounded-[20px] shadow-[0_2px_8px_rgba(26,60,56,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,60,56,0.08)] transition-all duration-300 flex flex-col',
        props.className
    ]
})

const titleClass = computed(() => {
    if (props.titleClassName) {
        return props.titleClassName
    }

    return props.variant === 'primary'
        ? 'text-[18px] font-semibold text-white mb-3'
        : 'text-[18px] font-semibold text-primary mb-3'
})

const bodyClass = computed(() => {
    if (props.bodyClassName) {
        return props.bodyClassName
    }

    return ['text-[14px] leading-[1.6]', props.bodyColorClass]
})
</script>