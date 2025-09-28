<template>
  <div class="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
    <h4 class="text-base font-semibold text-slate-900 dark:text-slate-100" v-text="title" />
    <p class="mt-2 text-sm text-slate-500 dark:text-slate-300">Due {{ dueDate }}</p>
    <span
      class="mt-4 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium"
      :class="statusClass"
    >
      {{ status }}
    </span>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  title: string;
  dueDate: string;
  status: 'Pending' | 'Submitted' | 'Overdue' | string;
}

const props = defineProps<Props>();

const statusClass = computed(() => {
  switch (props.status) {
    case 'Submitted':
      return 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300';
    case 'Overdue':
      return 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300';
    default:
      return 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300';
  }
});
</script>
