<template>
  <NuxtLayout>
    <div class="py-20">
      <NotFound v-if="error.statusCode === 404" />
      <section v-else class="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h1 class="text-3xl font-bold text-slate-900 dark:text-slate-100">{{ error.statusMessage }}</h1>
        <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">{{ error.message }}</p>
        <NuxtLink to="/" class="mt-8 inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-500">
          Go home
        </NuxtLink>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const error = useError();

useHead({
  title: error.value.statusCode === 404 ? 'Page Not Found' : 'Something went wrong'
});
</script>
