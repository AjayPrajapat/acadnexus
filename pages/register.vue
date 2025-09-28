<template>
  <div class="mt-8 space-y-8">
    <h1 class="text-3xl font-bold text-slate-900 dark:text-slate-100">Create your account</h1>
    <form class="space-y-5" @submit.prevent="handleRegister">
      <div class="grid gap-5 sm:grid-cols-2">
        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-200">First name</label>
          <input
            v-model="form.firstName"
            type="text"
            class="mt-2 w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-slate-600 dark:text-slate-100"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-200">Last name</label>
          <input
            v-model="form.lastName"
            type="text"
            class="mt-2 w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-slate-600 dark:text-slate-100"
            required
          />
        </div>
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
      <div>
        <label class="block text-sm font-medium text-slate-700 dark:text-slate-200">Role</label>
        <select
          v-model="form.role"
          class="mt-2 w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-slate-600 dark:text-slate-100"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="institution">Institution</option>
        </select>
      </div>
      <button
        type="submit"
        class="inline-flex w-full items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-500"
      >
        Create account
      </button>
    </form>
    <p class="text-sm text-slate-500 dark:text-slate-300">
      Already have an account?
      <NuxtLink to="/login" class="font-semibold text-primary-600 hover:text-primary-500">Sign in</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  role: 'student'
});

const router = useRouter();

useHead({
  title: 'Register',
  meta: [
    { name: 'description', content: 'Create an AcadNexus account to access personalized learning experiences.' },
    { property: 'og:title', content: 'Join AcadNexus' },
    { property: 'og:description', content: 'Students, teachers, and institutions can start for free.' }
  ]
});

definePageMeta({ layout: 'auth' });

const handleRegister = () => {
  router.push('/login');
};
</script>
