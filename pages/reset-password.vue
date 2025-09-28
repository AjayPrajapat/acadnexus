<template>
  <div class="mt-8 space-y-8">
    <h1 class="text-3xl font-bold text-slate-900 dark:text-slate-100">Reset password</h1>
    <form class="space-y-5" @submit.prevent="handleSubmit">
      <div>
        <label class="block text-sm font-medium text-slate-700 dark:text-slate-200">New password</label>
        <input
          v-model="form.password"
          type="password"
          class="mt-2 w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-slate-600 dark:text-slate-100"
          required
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-slate-700 dark:text-slate-200">Confirm password</label>
        <input
          v-model="form.confirm"
          type="password"
          class="mt-2 w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-slate-600 dark:text-slate-100"
          required
        />
      </div>
      <button
        type="submit"
        class="inline-flex w-full items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-500"
      >
        Update password
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  password: '',
  confirm: ''
});

useHead({
  title: 'Reset Password',
  meta: [
    { name: 'description', content: 'Choose a new password for your AcadNexus account.' }
  ]
});

definePageMeta({ layout: 'auth' });

const handleSubmit = () => {
  if (form.password !== form.confirm) {
    alert('Passwords do not match.');
    return;
  }
  alert('Password updated successfully.');
};
</script>
