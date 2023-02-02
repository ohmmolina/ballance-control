export const useSidebarStore = definePiniaStore("sidebar", () => {
  const isOpen = ref(false);
  const getOpen = computed(() => isOpen.value);
  const toggleOpen = ({ toFalse = false } = {}) => {
    if (toFalse) {
      isOpen.value = false;
      return;
    }
    isOpen.value = !isOpen.value;
  };

  return { getOpen, toggleOpen };
});
