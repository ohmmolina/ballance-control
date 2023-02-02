<script setup lang="ts">
  import { useSidebarStore } from "~~/stores/sidebar";
  const { getOpen: sidebar } = storeToRefs(useSidebarStore());
  const { toggleOpen } = useSidebarStore();
</script>
<template>
  <UiSidebar :open="sidebar" @close="toggleOpen({ toFalse: true })" />
  <UiNavbar :isShowSidebar="sidebar" @sidebar="toggleOpen" />
  <slot />
</template>
