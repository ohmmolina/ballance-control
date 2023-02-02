<script setup lang="ts">
  interface Props {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    color?: string;
    bounce?: boolean;
  }
  const { size, color, bounce } = defineProps<Props>();
  const sizes = {
    xs: 'w-2 h-2',
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  }
  const colorClass = computed(() => {
    if (color) return `bg-${color}-500`
    return 'bg-white'
  })
  const classList = [sizes[size || 'md']]
</script>
<template>
  <div v-if="bounce" class="bounce" :class="classList">
    <div class="double-bounce1" :class="colorClass"></div>
    <div class="double-bounce2" :class="colorClass"></div>
  </div>
  <div v-else class="sk-chase" :class="classList">
    <div class="sk-chase-dot" :class="`before:${colorClass}`"></div>
    <div class="sk-chase-dot" :class="`before:${colorClass}`"></div>
    <div class="sk-chase-dot" :class="`before:${colorClass}`"></div>
    <div class="sk-chase-dot" :class="`before:${colorClass}`"></div>
    <div class="sk-chase-dot" :class="`before:${colorClass}`"></div>
    <div class="sk-chase-dot" :class="`before:${colorClass}`"></div>
  </div>
</template>
<style scoped>
  .bounce {
    position: relative;
  }

  .double-bounce1,
  .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: sk-bounce 2s infinite ease-in-out;
    animation: sk-bounce 2s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  @-webkit-keyframes sk-bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
  .sk-chase {
    position: relative;
    animation: sk-chase 2.5s infinite linear both;
  }

  .sk-chase-dot {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: sk-chase-dot 2s infinite ease-in-out both;
  }

  .sk-chase-dot:before {
    content: "";
    display: block;
    width: 25%;
    height: 25%;
    border-radius: 100%;
    animation: sk-chase-dot-before 2s infinite ease-in-out both;
  }

  .sk-chase-dot:nth-child(1) {
    animation-delay: -1.1s;
  }
  .sk-chase-dot:nth-child(2) {
    animation-delay: -1s;
  }
  .sk-chase-dot:nth-child(3) {
    animation-delay: -0.9s;
  }
  .sk-chase-dot:nth-child(4) {
    animation-delay: -0.8s;
  }
  .sk-chase-dot:nth-child(5) {
    animation-delay: -0.7s;
  }
  .sk-chase-dot:nth-child(6) {
    animation-delay: -0.6s;
  }
  .sk-chase-dot:nth-child(1):before {
    animation-delay: -1.1s;
  }
  .sk-chase-dot:nth-child(2):before {
    animation-delay: -1s;
  }
  .sk-chase-dot:nth-child(3):before {
    animation-delay: -0.9s;
  }
  .sk-chase-dot:nth-child(4):before {
    animation-delay: -0.8s;
  }
  .sk-chase-dot:nth-child(5):before {
    animation-delay: -0.7s;
  }
  .sk-chase-dot:nth-child(6):before {
    animation-delay: -0.6s;
  }

  @keyframes sk-chase {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes sk-chase-dot {
    80%,
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes sk-chase-dot-before {
    50% {
      transform: scale(0.4);
    }
    100%,
    0% {
      transform: scale(1);
    }
  }
</style>
