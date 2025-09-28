<template>
  <div class="mt-8 space-y-8">
    <h1 class="text-3xl font-bold text-slate-900 dark:text-slate-100">Forgot password</h1>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      Enter your account email to receive password reset instructions.
    </p>
    <form class="space-y-5" @submit.prevent="handleSubmit">
      <div>
        <label class="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
        <input
          v-model="email"
          type="email"
          class="mt-2 w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-slate-600 dark:text-slate-100"
          required
        />
      </div>
      <button
        type="submit"
        class="inline-flex w-full items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-500"
      >
        Send reset link
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const email = ref('');

useHead({
  title: 'Forgot Password',
  meta: [
    { name: 'description', content: 'Reset your AcadNexus password quickly and securely.' },
    { property: 'og:title', content: 'AcadNexus Password Recovery' }
  ]
});

definePageMeta({ layout: 'auth' });

const handleSubmit = () => {
  alert(`Reset instructions sent to ${email.value}`);
};
</script>
