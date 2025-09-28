<template>
  <article class="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
    <header>
      <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100" v-text="title" />
      <p class="mt-2 text-sm text-slate-600 dark:text-slate-300" v-text="description" />
    </header>
    <div class="mt-6 flex flex-col gap-2 text-sm">
      <div class="flex items-center justify-between">
        <span class="font-medium text-slate-700 dark:text-slate-200">Progress</span>
        <span class="text-slate-500 dark:text-slate-300">{{ progress }}%</span>
      </div>
      <div class="h-2 rounded-full bg-slate-100 dark:bg-slate-700">
        <div
          class="h-2 rounded-full bg-primary-500 transition-all"
          :style="{ width: `${progress}%` }"
          role="progressbar"
          :aria-valuenow="progress"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
      <p class="mt-2 text-xs text-slate-500 dark:text-slate-300">{{ enrolled }} learners enrolled</p>
    </div>
    <slot name="footer" />
  </article>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  progress: number;
  enrolled: number;
}

defineProps<Props>();
</script>
