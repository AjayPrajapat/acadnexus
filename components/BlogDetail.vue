<template>
  <article class="mx-auto max-w-3xl space-y-6">
    <header>
      <p class="text-sm uppercase tracking-wider text-primary-500">{{ formattedDate }}</p>
      <h1 class="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">{{ title }}</h1>
      <p class="mt-1 text-sm text-slate-500 dark:text-slate-300">By {{ author }}</p>
    </header>
    <div class="prose prose-slate max-w-none dark:prose-invert" v-html="content"></div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  content: string;
  author: string;
  date: string;
}>();

const formattedDate = computed(() => new Date(props.date).toLocaleDateString());
</script>
