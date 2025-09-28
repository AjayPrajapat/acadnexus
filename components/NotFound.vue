<template>
  <section class="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
    <p class="text-sm font-semibold uppercase tracking-wider text-primary-500">404</p>
    <h1 class="mt-4 text-3xl font-bold text-slate-900 dark:text-slate-100">Page not found</h1>
    <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">
      We can’t find the page you’re looking for. Please check the URL or return to the homepage.
    </p>
    <NuxtLink
      to="/"
      class="mt-8 inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-500"
    >
      Go home
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
</script>
