<template>
  <form class="space-y-5" @submit.prevent="handleSubmit">
    <div>
      <label class="block text-sm font-medium text-slate-700 dark:text-slate-200">Name</label>
      <input
        v-model="form.name"
        type="text"
        class="mt-2 w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-slate-600 dark:text-slate-100"
        required
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
      <input
        v-model="form.email"
        type="email"
        class="mt-2 w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-slate-600 dark:text-slate-100"
        required
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-slate-700 dark:text-slate-200">Password</label>
      <input
        v-model="form.password"
        type="password"
        class="mt-2 w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-slate-600 dark:text-slate-100"
        required
      />
    </div>
    <button
      type="submit"
      class="inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
    >
      Save Profile
    </button>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'submit', payload: { name: string; email: string; password: string }): void;
}>();

const form = reactive({
  name: '',
  email: '',
  password: ''
});

const handleSubmit = () => {
  emit('submit', { ...form });
};
</script>
