<script setup lang="ts">
  interface Props {
    type?: string;
    'v-model'?: any;
    outlined?: boolean;
    color?: string;
    bgColor?: string;
    labelColor?: string;
    iconColor?: string;
  }
  const { outlined } = withDefaults(defineProps<Props>(), {
    type: "text",
  });

  const defaultClasses = {
    inputClasses: 'bg-gray-300 border-transparent',
    labelClasses: 'left-2 -top-6 px-1 text-black text-sm dark:text-white peer-placeholder-shown:left-10 peer-placeholder-shown:top-2 peer-placeholder-shown:px-0 peer-placeholder-shown:text-black peer-placeholder-shown:text-base peer-focus:left-2 peer-focus:-top-6 peer-focus:px-1 peer-focus:text-black peer-focus:text-sm dark:peer-focus:text-white',
    iconClasses: '',
  }
  const outlineClasses = {
    inputClasses: 'bg-transparent border-gray-400 transition-all duration-300 focus:border-black dark:text-white dark:focus:border-white',
    labelClasses: 'left-3 -top-2 bg-white px-1 text-gray-400 text-xs peer-placeholder-shown:left-10 peer-placeholder-shown:top-2 peer-placeholder-shown:px-0 peer-placeholder-shown:text-base peer-focus:left-3 peer-focus:-top-2 peer-focus:px-1 peer-focus:text-black peer-focus:text-xs dark:bg-black dark:text-white dark:peer-focus:text-white',
    iconClasses: 'text-gray-400 peer-focus:text-black dark:text-white dark:peer-focus:text-white',
  }
  const variantClasses = outlined ? outlineClasses : defaultClasses;
</script>
<template>
  <div class="relative mb-6 mr-5">
    <input
      type="text"
      class="peer block w-full pl-10 p-2.5 pt-3 border text-black text-sm placeholder-transparent rounded-lg outline-none"
      :class="variantClasses.inputClasses"
      placeholder="placeholder"/>
    <label
      class="absolute transition-all duration-300"
      :class="variantClasses.labelClasses"
      >Email</label
    >
    <div
      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none transition-colors duration-300" :class="variantClasses.iconClasses">
      <fai icon="far fa-envelope" />
    </div>
  </div>
</template>
