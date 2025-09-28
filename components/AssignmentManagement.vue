<template>
  <section class="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
    <header class="flex items-center justify-between">
      <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Assignments</h2>
      <button
        type="button"
        class="inline-flex items-center rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-primary-500"
        @click="emit('create')"
      >
        Create Assignment
      </button>
    </header>
    <ul class="space-y-3 text-sm text-slate-600 dark:text-slate-300">
      <li
        v-for="assignment in assignmentList"
        :key="assignment.id"
        class="flex items-center justify-between rounded-xl bg-slate-100 px-4 py-3 dark:bg-slate-900"
      >
        <div>
          <p class="font-medium text-slate-800 dark:text-slate-100">{{ assignment.title }}</p>
          <p class="text-xs text-slate-500">Due {{ assignment.dueDate }}</p>
        </div>
        <div class="flex items-center gap-2">
          <button
            type="button"
            class="rounded-full px-3 py-1 text-xs font-semibold text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/40"
            @click="emit('edit', assignment.id)"
          >
            Edit
          </button>
          <button
            type="button"
            class="rounded-full px-3 py-1 text-xs font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-900/40"
            @click="emit('delete', assignment.id)"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  assignmentList: { id: string; title: string; dueDate: string }[];
}>();

const emit = defineEmits<{
  (e: 'create'): void;
  (e: 'edit', id: string): void;
  (e: 'delete', id: string): void;
}>();
</script>
