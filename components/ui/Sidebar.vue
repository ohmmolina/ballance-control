<script setup lang="ts">
  type icon = `${"fas" | "fab" | "far"} fa-${string}`;
  type route = `/${string}`;
  type item = {
    icon: icon;
    title: string;
    route: route;
    badge?: string | number;
  };
  type Props = {
    items?: item[];
    open?: boolean;
    permanent?: boolean;
    small?: boolean;
  };
  const props = defineProps<Props>();
  defineEmits(["open", "close"])

  const routes = [
    {
      icon: "fas fa-chart-pie",
      title: "Dashboard",
      route: "/",
      badge: 2,
    },
    {
      icon: "fas fa-wallet",
      title: "Accounts",
      route: "/accounts",
    },
    {
      icon: "fas fa-file-invoice-dollar",
      title: "Transactions",
      route: "/transactions",
    },
  ];
  const isSidebarShown = ref(false);
  
  const menuItems = computed(() => {
    return props.items ?? routes;
  });
  const sidebarClasses = computed(() => {
    return isSidebarShown.value ? "transalte-x-0" : "-translate-x-64";
  });

  watch(
    () => props.open,
    (val) => {
      isSidebarShown.value = val ?? false;
    }
  )
  if (props.permanent) {
    isSidebarShown.value = true;
  }
</script>
<template>
  <div v-if="open" class="lg:hidden absolute w-screen h-screen bg-gray-800/50 z-10"></div>
  <aside
    class="absolute top-0 w-64 h-screen transition-all z-20"
    :class="sidebarClasses">
    <div
      class="overflow-y-auto py-4 px-3 h-screen bg-gray-50 rounded dark:bg-gray-800">
      <nuxt-link to="/" class="flex justify-center items-center mb-3">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="mr-3 h-6 sm:h-10"
          alt="Flowbite logo" />
        <span
          class="self-center text-xl font-raleway font-bold whitespace-nowrap dark:text-white">
          Flowbite
        </span>
      </nuxt-link>
      <span class="absolute top-3 right-4 lg:hidden text-gray-500" @click="$emit('close')">
        <fai icon="fas fa-xmark"/>
      </span>
      <ul class="pt-4 space-y-2">
        <li v-for="(item, i) in menuItems" :key="item.route">
          <nuxt-link
            :to="item.route"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <fai
              :icon="item.icon"
              class="flex-shrink-0 w-6 h-6 text-xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span class="flex-1 ml-3 text-lg whitespace-nowrap font-raleway font-semibold">{{ item.title }}</span>
            <span
              v-if="item.badge"
              class="inline-flex justify-center items-center px-2 ml-3 font-medium font-raleway text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
              {{ item.badge }}
            </span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </aside>
</template>
