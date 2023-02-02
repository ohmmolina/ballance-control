<script setup lang="ts">
  const drawer = ref();
  const backdrop = ref();
  const isPermanent = ref(false);
  // const isMini = ref(false);
  const toggleDrawer = () => {
    drawer.value.classList.toggle("-translate-x-full");
    backdrop.value.classList.toggle("hidden");
  };
  const togglePermanentDrawer = () => {
    isPermanent.value = !isPermanent.value;
    // isMini.value = false
    drawer.value.classList.toggle("-translate-x-full");
    drawer.value.classList.toggle("absolute");
  };
  // const toggleMiniDrawer = () => {
  //   isPermanent.value = !isMini.value;
  //   isMini.value = !isMini.value;
  // };
  // const drawerWidthClass = computed(() => {
  //   return isMini.value ? "w-[56px] translate-x-0" : "absolute w-1/4";
  // })
</script>
<template>
  <div class="flex">
    <div
      ref="backdrop"
      class="absolute hidden w-screen h-screen z-40 bg-gray-800/50 transition-all duration-700"
      @click="toggleDrawer" />
    <div
      ref="drawer"
      class="absolute w-1/4 h-screen z-50 bg-white transition-all duration-300 -translate-x-full border-2 border-gray-300">
      <div class="relative">
        <button
          v-if="!isPermanent"
          class="absolute right-0 mr-1 px-2 bg-white text-lg"
          @click="toggleDrawer">
          <fai v-if="!isPermanent" icon="fas fa-close" />
        </button>
        <div class="p-4">A</div>
      </div>
    </div>
    <div class="transition-all duration-500">
      <button class="bg-blue-600 mr-5" @click="toggleDrawer">
        Open Drawer
      </button>
      <button class="bg-blue-600 mr-5" @click="togglePermanentDrawer">
        Permanent Drawer
      </button>
      <!-- <button class="bg-blue-600" @click="toggleMiniDrawer">
        Mini Drawer
      </button> -->
    </div>
  </div>
</template>
