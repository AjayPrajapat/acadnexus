<template>
  <div class="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
    <h4 class="text-lg font-semibold text-slate-900 dark:text-slate-100" v-text="name" />
    <a :href="`mailto:${email}`" class="mt-1 text-sm text-primary-600 hover:text-primary-500">{{ email }}</a>
    <p class="mt-3 text-sm text-slate-500 dark:text-slate-300">{{ enrollment }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  email: string;
  enrollment: string;
}

defineProps<Props>();
</script>
