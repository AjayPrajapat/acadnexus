<template>
  <form class="space-y-5" @submit.prevent="handleSubmit">
    <div>
      <label class="block text-sm font-medium text-slate-700 dark:text-slate-200">Notification Preferences</label>
      <select
        v-model="form.notificationPrefs"
        class="mt-2 w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-slate-600 dark:text-slate-100"
      >
        <option value="all">All notifications</option>
        <option value="email">Email only</option>
        <option value="in-app">In-app only</option>
      </select>
    </div>
    <div class="flex items-center justify-between">
      <span class="text-sm font-medium text-slate-700 dark:text-slate-200">Dark mode</span>
      <button
        type="button"
        class="relative inline-flex h-8 w-16 items-center rounded-full border border-slate-300 bg-slate-100 transition dark:border-slate-600 dark:bg-slate-700"
        role="switch"
        :aria-checked="form.themeMode === 'dark'"
        @click="toggleTheme"
      >
        <span
          class="absolute left-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-semibold text-slate-700 shadow-md transition dark:bg-slate-200"
          :class="form.themeMode === 'dark' ? 'translate-x-8' : 'translate-x-0'"
        >
          {{ form.themeMode === 'dark' ? '🌙' : '☀️' }}
        </span>
      </button>
    </div>
    <button
      type="submit"
      class="inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
    >
      Save Preferences
    </button>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'submit', payload: { notificationPrefs: string; themeMode: 'light' | 'dark' }): void;
}>();

const form = reactive({
  notificationPrefs: 'all',
  themeMode: 'light' as 'light' | 'dark'
});

const toggleTheme = () => {
  form.themeMode = form.themeMode === 'light' ? 'dark' : 'light';
};

const handleSubmit = () => {
  emit('submit', { ...form });
};
</script>
