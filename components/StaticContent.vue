<template>
  <section class="prose prose-slate mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-sm dark:prose-invert dark:bg-slate-800">
    <div v-html="content" />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  content: string;
}>();
</script>
