<template>
  <figure class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
    <figcaption class="mb-4 flex items-center justify-between">
      <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">{{ title }}</h3>
      <span class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-300">{{ chartType }}</span>
    </figcaption>
    <div class="grid gap-2 text-sm text-slate-600 dark:text-slate-300">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="flex items-center justify-between rounded-xl bg-slate-100 px-4 py-2 dark:bg-slate-900"
      >
        <span>{{ item.label }}</span>
        <span class="font-semibold">{{ item.value }}</span>
      </div>
    </div>
  </figure>
</template>

<script setup lang="ts">
interface DataPoint {
  label: string;
  value: string | number;
}

interface Props {
  title: string;
  chartType: string;
  data: DataPoint[];
}

defineProps<Props>();
</script>
