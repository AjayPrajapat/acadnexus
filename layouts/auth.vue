<template>
  <div class="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-50 via-white to-slate-100 px-6 py-12 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
    <div class="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl dark:border-slate-700 dark:bg-slate-900">
      <NuxtLink to="/" class="text-2xl font-bold text-primary-600">AcadNexus</NuxtLink>
      <slot />
    </div>
  </div>
</template>
