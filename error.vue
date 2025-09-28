<template>
  <NuxtLayout>
    <div class="py-20">
      <NotFound v-if="isNotFound" />
      <section v-else class="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h1 class="text-3xl font-bold text-slate-900 dark:text-slate-100">{{ statusMessage }}</h1>
        <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">{{ description }}</p>
        <NuxtLink to="/" class="mt-8 inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-500">
          Go home
        </NuxtLink>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const nuxtError = useError();
const statusCode = computed(() => nuxtError.value?.statusCode ?? 500);
const statusMessage = computed(() => nuxtError.value?.statusMessage ?? 'Something went wrong');
const description = computed(() => nuxtError.value?.message ?? 'An unexpected error occurred.');
const isNotFound = computed(() => statusCode.value === 404);

useHead({
  title: isNotFound.value ? 'Page Not Found' : 'Something went wrong'
});
</script>
