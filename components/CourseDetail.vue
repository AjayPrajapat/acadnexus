<template>
  <section class="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
    <div>
      <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Lessons</h2>
      <ol class="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
        <li v-for="lesson in lessons" :key="lesson" class="flex items-center gap-2">
          <span aria-hidden="true">•</span>
          {{ lesson }}
        </li>
      </ol>
    </div>
    <div>
      <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Assignments</h2>
      <ul class="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
        <li v-for="assignment in assignments" :key="assignment.id" class="flex items-center justify-between">
          <span>{{ assignment.title }}</span>
          <span class="text-xs text-slate-500">Due {{ assignment.dueDate }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
interface AssignmentItem {
  id: string;
  title: string;
  dueDate: string;
}

interface Props {
  lessons: string[];
  assignments: AssignmentItem[];
}

defineProps<Props>();
</script>
