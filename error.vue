<script setup>
  const props = defineProps({
    error: Object,
  });

  // customise 404 message from script section
  const error = useError();
  if (error.value.statusCode == 404) {
    error.value.message = "Oops! Page not found 🥺";
  }

  // clear error and redirect to home page
  const handleError = () => clearError({ redirect: "/" });
</script>
<template>
  <main class="flex w-screen h-screen justify-center items-center">
    <div class="-mt-20">
      <div class="text-center">
        <h1 class="text-[5rem]">{{ error.statusCode }}</h1>
        <p class="font-raleway font-bold text-4xl">
          {{ error.message }} 😔
        </p>
      </div>

      <!-- Redirect to home page -->
      <div class="flex justify-center mt-8">
        <UiButton
          icon="fas fa-arrow-right"
          text="Go to home"
          append-icon
          hide-icon
          @click="handleError"
        />
      </div>
    </div>
  </main>
</template>
