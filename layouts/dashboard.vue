<template>
  <div class="flex min-h-screen bg-slate-100 dark:bg-slate-900">
    <aside class="hidden w-72 flex-col justify-between border-r border-slate-200 bg-white px-6 py-8 dark:border-slate-800 dark:bg-slate-900 lg:flex">
      <div>
        <NuxtLink to="/" class="text-2xl font-bold text-primary-600">AcadNexus</NuxtLink>
        <nav class="mt-8 space-y-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
          <slot name="sidebar" />
        </nav>
      </div>
      <button class="text-left text-sm text-slate-500 hover:text-primary-600">Need help?</button>
    </aside>
    <div class="flex-1">
      <header class="flex items-center justify-between border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
        <slot name="header" />
      </header>
      <main class="px-6 py-8">
        <slot />
      </main>
    </div>
  </div>
</template>
