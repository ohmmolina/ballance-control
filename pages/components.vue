<script setup lang="ts">
  type variant = "default" | "outlined" | "flat" | "link";
  const colors = ["blue", "red", "green", "purple"];
  const variants1: variant[] = ["default", "outlined"];
  const variants2: variant[] = ["flat", "link"];
  const isLoading = ref(false);
  const toggleLoading = () => {
    isLoading.value = !isLoading.value;
  };
</script>
<template>
  <Body class="dark bg-black text-center">
    <h1 class="my-4 text-3xl text-dark dark:text-white uppercase">
      Lista de Componentes
    </h1>
    <div class="text-left mx-10">
      <!-- BUTTONS -->
      <h2 class="font-bold text-xl text-gray-500">Buttons</h2>

      <div class="flex justify-around items-center">
        <h4 class="text-gray-700">Default</h4>
        <h4 class="text-gray-700">Outlined</h4>
      </div>
      <template v-for="(color, i) in colors" :key="i">
        <h3 class="mx-10 font-semibold text-gray-600">
          {{ color.toUpperCase() }}
        </h3>
        <div class="flex justify-center items-center">
          <template v-for="(variant, i) in variants1" :key="i" class="flex">
            <UiButton
              class="mr-4"
              :color="color"
              :loading="isLoading"
              :variant="variant"
              @click="toggleLoading"
              >Texto</UiButton
            >
            <UiButton
              class="mr-4"
              :color="color"
              icon="fas fa-arrow-left"
              :loading="isLoading"
              :variant="variant"
              bounce-spinner
              rounded
              hide-icon
              @click="toggleLoading"
              >Texto</UiButton
            >
            <UiButton
              class="mr-4"
              :color="color"
              icon="fas fa-arrow-right"
              :loading="isLoading"
              :variant="variant"
              disabled
              rounded
              append-icon
              hide-icon
              @click="toggleLoading"
              >Texto</UiButton
            >
            <UiButton
              class="mr-4"
              :color="color"
              icon="fas fa-trash"
              :variant="variant"
              text="Prop"
              rounded-full
              append-icon />
            <UiButton
              class="mr-4"
              :color="color"
              icon="fas fa-clock"
              :loading="isLoading"
              :variant="variant"
              bounce-spinner
              rounded-circle
              @click="toggleLoading" />
            <UiButton
              class="mr-5"
              :color="color"
              :variant="variant"
              rounded
              non-click-effect>
              <template #prependIcon>
                <fai class="mr-2" icon="fas fa-clock" />
              </template>
              Texto
              <template #appendIcon>
                <fai class="ml-2" icon="fas fa-clock" />
              </template>
            </UiButton>
          </template>
        </div>
      </template>
      <div class="mx-28 mt-4 text-center">
        <UiButton
          class="w-full"
          color="purple"
          icon="fas fa-arrow-right"
          :loading="isLoading"
          @click="toggleLoading"
          rounded
          append-icon
          hide-icon
          >Texto</UiButton
        >
      </div>

      <div class="flex justify-around items-center mt-5">
        <h4 class="text-gray-700">Flat</h4>
        <h4 class="text-gray-700">Link</h4>
      </div>
      <template v-for="(color, i) in colors" :key="i">
        <h3 class="mx-10 font-semibold text-gray-600">
          {{ color.toUpperCase() }}
        </h3>
        <div class="flex justify-center items-center">
          <template v-for="(variant, i) in variants2" :key="i" class="flex">
            <UiButton
              class="mr-4"
              :color="color"
              :loading="isLoading"
              :variant="variant"
              @click="toggleLoading"
              >Texto</UiButton
            >
            <UiButton
              class="mr-4"
              :color="color"
              icon="fas fa-arrow-left"
              :loading="isLoading"
              :variant="variant"
              bounce-spinner
              rounded
              hide-icon
              @click="toggleLoading"
              >Texto</UiButton
            >
            <UiButton
              class="mr-4"
              :color="color"
              icon="fas fa-arrow-right"
              :loading="isLoading"
              :variant="variant"
              disabled
              rounded
              append-icon
              hide-icon
              @click="toggleLoading"
              >Texto</UiButton
            >
            <UiButton
              class="mr-4"
              :color="color"
              icon="fas fa-trash"
              :variant="variant"
              text="Prop"
              rounded-full
              append-icon />
            <UiButton
              class="mr-4"
              :color="color"
              icon="fas fa-clock"
              :loading="isLoading"
              :variant="variant"
              bounce-spinner
              rounded-circle
              @click="toggleLoading" />
            <UiButton
              class="mr-5"
              :color="color"
              :variant="variant"
              rounded
              non-click-effect>
              <template #prependIcon>
                <fai class="mr-2" icon="fas fa-clock" />
              </template>
              Texto
              <template #appendIcon>
                <fai class="ml-2" icon="fas fa-clock" />
              </template>
            </UiButton>
          </template>
        </div>
      </template>
      <!-- /BUTTONS -->
      <!-- INPUTS -->
      <h2 class="my-5 font-bold text-xl text-gray-500">Inputs</h2>
      <div class="mx-28">
        <UiInput />
        <UiInput outlined/>
      </div>
     
      <!-- /INPUTS -->
    </div>
  </Body>
</template>
