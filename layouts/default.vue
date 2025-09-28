<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 transition dark:bg-slate-900 dark:text-slate-100">
    <header class="border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NuxtLink to="/" class="text-xl font-bold text-primary-600">AcadNexus</NuxtLink>
        <div class="hidden items-center gap-6 text-sm font-semibold text-slate-600 sm:flex">
          <NuxtLink to="/blog" class="hover:text-primary-600">Blog</NuxtLink>
          <NuxtLink to="/login" class="hover:text-primary-600">Login</NuxtLink>
          <NuxtLink to="/register" class="rounded-full bg-primary-600 px-4 py-2 text-white shadow hover:bg-primary-500">Get Started</NuxtLink>
        </div>
      </nav>
    </header>
    <main class="mx-auto min-h-[70vh] max-w-6xl px-6 py-10">
      <slot />
    </main>
    <footer class="border-t border-slate-200 bg-white py-8 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p>&copy; {{ new Date().getFullYear() }} AcadNexus. All rights reserved.</p>
        <div class="flex gap-4">
          <NuxtLink to="/terms" class="hover:text-primary-600">Terms</NuxtLink>
          <NuxtLink to="/privacy" class="hover:text-primary-600">Privacy</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>
