<template>
  <blockquote class="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
    <p class="text-sm text-slate-600 dark:text-slate-300">“{{ quote }}”</p>
    <footer class="mt-6 flex items-center gap-3">
      <img
        :src="avatar"
        :alt="`Portrait of ${name}`"
        class="h-12 w-12 rounded-full object-cover"
      />
      <div>
        <p class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ name }}</p>
        <p class="text-xs text-slate-500 dark:text-slate-300">{{ role }}</p>
      </div>
    </footer>
  </blockquote>
</template>

<script setup lang="ts">
const props = defineProps<{
  quote: string;
  name: string;
  role: string;
  avatar: string;
}>();
</script>
