<template>
  <div class="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
    <div>
      <p class="text-sm text-slate-500 dark:text-slate-300">{{ studentName }}</p>
      <h4 class="text-lg font-semibold text-slate-900 dark:text-slate-100">{{ progress }}% complete</h4>
    </div>
    <div class="h-16 w-16 rounded-full bg-primary-100 text-center text-2xl font-bold leading-[4rem] text-primary-600 dark:bg-primary-900/40 dark:text-primary-300">
      {{ progress }}%
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  studentName: string;
  progress: number;
}

defineProps<Props>();
</script>
