<script setup lang="ts">
  type Props = {
    title?: string;
    color?: string;
  };
  const props = defineProps<Props>();
  const classes = [
    "bg-white",
    "shadow-gray-200",
    "hover:shadow-gray-300",
    "text-black",
    "dark:text-white",
  ];
  const cardClasses = computed(() => {
    const returnedClasses: any = [];
    if (!props.color) {
      return classes;
    }
    classes.forEach((item) => {
      if (item.includes("white")) {
        returnedClasses.push(item.replace("white", `${props.color}-500`));
      } else if (item.includes("black")) {
        returnedClasses.push(item.replace("black", "white"));
      } else {
        returnedClasses.push(item.replace("gray", `${props.color}`));
      }
    });
    returnedClasses.push(`hover:bg-${props.color}-600`)
    return returnedClasses;
  });
</script>
<template>
  <div
    class="p-4 px-5 dark:bg-dark rounded-lg shadow-lg transition-all"
    :class="cardClasses">
    <slot v-if="!title" name="title"/>
    <span v-else class="text-xs tracking-widest">{{ title }}</span>
    <slot />
  </div>
</template>
