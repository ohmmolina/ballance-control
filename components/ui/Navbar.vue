<script setup lang="ts">
  import {
    Avatar,
    Navbar,
    NavbarLogo,
    NavbarCollapse,
    NavbarLink,
  } from "flowbite-vue";
  import { useUserStore } from "~~/stores/user";

  type Props = {
    isShowSidebar: boolean;
  };
  defineProps<Props>();
  defineEmits(["sidebar"]);

  onBeforeMount(() => {
    const { setUser } = useUserStore();
    const { getUser: user } = storeToRefs(useUserStore());
    setUser(user.value);
  });
</script>
<template>
  <Navbar class="bg-gray-200" :class="{ 'ml-64': isShowSidebar }">
    <template #logo>
      <button
        class="mr-2 px-2 py-1 font-mediumtext-center text-lg text-gray-900 hover:bg-gray-200 focus:outline-none rounded-lg dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        @click="$emit('sidebar')">
        <fai icon="fas fa-bars" />
      </button>
    </template>
    <template #default="{ isShowMenu }">
      <NavbarCollapse
        :isShowMenu="isShowMenu"
        class="flex justify-center items-center">
        <NavbarLink class="place-self-center flex justify-between text-xs">
          <fai icon="fas fa-gear"/>
          <span class="ml-2 md:hidden">Settings</span>
        </NavbarLink>
        <NavbarLink class="place-self-center text-xs">
          <fai icon="far fa-envelope"/>
          <span class="ml-2 md:hidden">Messages</span>
        </NavbarLink>
        <NavbarLink class="place-self-center text-xs">
          <fai icon="far fa-bell"/>
          <span class="ml-2 md:hidden">Notifications</span>
        </NavbarLink>
        <div class="flex items-center">
          <Avatar
          class="place-self-center"
          status="online"
          size="xs"
          rounded
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
          <span class="ml-2 text-xs md:hidden">Omar Molina</span>
        </div>
        <NavbarLink class="place-self-center text-xs">
          <fai icon="fas fa-arrow-right-to-bracket"/>
          <span class="ml-2 md:hidden">Logout</span>
        </NavbarLink>
      </NavbarCollapse>
    </template>
    <template #menu-icon>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
      </template>
  </Navbar>
</template>
