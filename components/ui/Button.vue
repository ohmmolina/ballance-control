<script setup lang="ts">
  type icon = `${"fas" | "fab" | "far"} fa-${string}`;
  interface Props {
    icon?: icon;
    text?: string;
    color?: string;
    loading?: boolean;
    disabled?: boolean;
    variant?: "default" | "outlined" | "flat" | "link";
    rounded?: boolean;
    roundedFull?: boolean;
    roundedCircle?: boolean;
    appendIcon?: boolean;
    nonClickEffect?: boolean;
    hideIcon?: boolean;
    bounceSpinner?: boolean;
  }
  const {
    icon,
    color,
    variant,
    rounded,
    roundedFull,
    roundedCircle,
    appendIcon,
    nonClickEffect,
    hideIcon,
  } = withDefaults(defineProps<Props>(), {
    variant: "default",
  });

  const defaultClasses = [
    "bg-blue-500",
    "text-white",
    "border-transparent",
    "shadow-lg",
    "hover:bg-blue-400",
    "hover:shadow-blue-300",
    "dark:hover:shadow-blue-900",
    "focus:bg-blue-400",
    "active:bg-blue-400",
    "active:text-blue-500",
    "disabled:bg-blue-300",
    "disabled:cursor-not-allowed",
    "disabled:hover:shadow-none",
    "disabled:hover:bg-blue-300",
    "disabled:foucs:bg-blue-300",
    "disabled:active:bg-blue-300",
    "disabled:active:text-white",
  ];
  const outlineClasses = [
    "bg-transparent",
    "border-blue-300",
    "text-blue-300",
    "hover:border-transparent",
    "hover:bg-blue-300",
    "hover:text-white",
    "focus:bg-blue-300",
    "focus:text-white",
    "focus:border-transparent",
    "active:bg-blue-900",
    "active:text-gray-300",
    "disabled:cursor-not-allowed",
    "disabled:text-blue-300",
    "disabled:border-blue-300",
    "disabled:bg-blue-300",
    "disabled:bg-opacity-10",
  ];
  const flatClasses = [
    "bg-transparent",
    "text-blue-500",
    "border-transparent",
    "hover:bg-blue-500",
    "hover:bg-opacity-25",
    "disabled:text-blue-300",
  ];
  const linkClasses = [
    "bg-transparent",
    "text-blue-500",
    "border-transparent",
    "hover:text-blue-800",
    "focus:border-transparent",
    "active:border-transparent",
    "disabled:text-blue-300",
  ];
  const roundedClass = computed(() => {
    if (rounded) return "rounded-xl";
    if (roundedFull || roundedCircle) return "rounded-full";
    return "rounded";
  });
  const btnClasses = computed(() => {
    const returnedClass = [roundedClass.value];
    const variants = {
      default: defaultClasses,
      outlined: outlineClasses,
      flat: flatClasses,
      link: linkClasses,
    };
    const replaceColor =
      color &&
      (color.startsWith("#") || color.startsWith("rgb")) &&
      Number.isNaN(parseInt(color))
        ? "blue"
        : color;
    returnedClass.push(
      ...variants[variant].map((c: string) => c.replace("blue", replaceColor || "blue"))
    );
    return returnedClass;
  });
  const textHidePrependIconClasses = [
    "mr-1",
    "ml-1",
    "-translate-x-2",
    "transition-all",
    "group-hover:ml-2",
    "group-hover:mr-0",
    "group-hover:translate-x-0",
    "disabled:pointer-events-none",
  ];
  const textHideAppendIconClasses = [
    "mr-1",
    "ml-1",
    "translate-x-2",
    "transition-all",
    "group-hover:mr-2",
    "group-hover:ml-0",
    "group-hover:translate-x-0",
    "disabled:pointer-events-none",
  ];

  const textClasses =
    icon && !roundedCircle
      ? hideIcon
        ? appendIcon
          ? textHideAppendIconClasses
          : textHidePrependIconClasses
        : appendIcon
        ? "mr-2"
        : "ml-2"
      : "mx-0";

  const iconClasses = hideIcon
    ? !appendIcon
      ? [
          "-translate-x-10",
          "transition-all",
          "group-hover:block",
          "group-hover:translate-x-0",
        ]
      : [
          "translate-x-10",
          "transition-all",
          "group-hover:block",
          "group-hover:translate-x-0",
          "disabled:text-red-200",
        ]
    : [""];
  roundedCircle && iconClasses.push("py-1");

  const spinnerClass = computed(() => {
    if (roundedCircle) return "my-2";
    if (icon && !appendIcon) return "my-[0.3rem] mx-[1.68rem]";
    if (icon && appendIcon) return "my-[0.3rem] mx-[1.68rem]";
    return "my-[0.3rem] mx-4";
  });

  const btn = ref<HTMLElement>();
  const ripple = ref<HTMLElement>();
  const rippleEffect = (event: MouseEvent) => {
    const circle = ripple.value;
    if (nonClickEffect || !btn.value || !circle) return;

    const diameter = Math.max(btn.value.clientWidth, btn.value.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (btn.value.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (btn.value.offsetTop + radius)}px`;
    circle.classList.add("ripple");

    if (ripple.value) {
      ripple.value.remove();
    }

    btn.value.appendChild(circle);
  };
</script>
<template>
  <button
    ref="btn"
    class="flex justify-between items-center relative px-3 py-1 border-2 overflow-hidden transition-all focus:outline-none group disabled:pointer-events-none"
    :class="btnClasses"
    :disabled="disabled"
    @click="variant !== 'flat' && variant !== 'link' && rippleEffect">
    <span ref="ripple" class="ripple"></span>
    <span v-if="!loading" :class="iconClasses">
      <fai v-if="icon && !appendIcon" :icon="icon" />
      <slot name="prependIcon" />
    </span>
    <span
      v-if="!roundedCircle && !loading"
      class="font-semibold font-raleway"
      :class="textClasses">
      <slot v-if="!text" />
      <span v-else class="font-semibold font-raleway uppercase">{{ text }}</span>
    </span>
    <span v-if="!loading" :class="iconClasses">
      <fai v-if="icon && appendIcon" :icon="icon" />
      <slot name="appendIcon" />
    </span>
    <div v-if="loading" class="flex justify-center w-full">
      <UiSpinner
        :class="spinnerClass"
        size="sm"
        :color="variant === 'flat' || variant === 'link' ? color : ''"
        :bounce="bounceSpinner" />
    </div>
  </button>
</template>
<style scoped>
  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
  }
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
</style>
