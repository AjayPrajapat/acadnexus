<template>
  <article class="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
    <p class="text-xs uppercase tracking-wide text-primary-500">{{ formattedDate }}</p>
    <h3 class="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">{{ title }}</h3>
    <p class="mt-3 flex-1 text-sm text-slate-600 dark:text-slate-300">{{ excerpt }}</p>
    <NuxtLink :to="`/blog/${slug}`" class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-500">
      Read more
      <span aria-hidden="true">→</span>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}>();

const formattedDate = computed(() => new Date(props.date).toLocaleDateString());
</script>
