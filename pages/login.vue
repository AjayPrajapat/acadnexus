<template>
  <div class="mt-8 space-y-8">
    <h1 class="text-3xl font-bold text-slate-900 dark:text-slate-100">Sign in</h1>
    <form class="space-y-5" @submit.prevent="handleLogin">
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
      <div class="flex items-center justify-between text-sm">
        <label class="flex items-center gap-2">
          <input type="checkbox" class="h-4 w-4 rounded border-slate-300" />
          <span class="text-slate-600 dark:text-slate-300">Remember me</span>
        </label>
        <NuxtLink to="/forgot-password" class="text-primary-600 hover:text-primary-500">Forgot password?</NuxtLink>
      </div>
      <button
        type="submit"
        class="inline-flex w-full items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-500"
      >
        Sign in
      </button>
    </form>
    <p class="text-sm text-slate-500 dark:text-slate-300">
      New to AcadNexus?
      <NuxtLink to="/register" class="font-semibold text-primary-600 hover:text-primary-500">Create an account</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  email: '',
  password: '',
  role: 'student'
});

const userStore = useUserStore();
const router = useRouter();

useHead({
  title: 'Login',
  meta: [
    { name: 'description', content: 'Access your AcadNexus dashboard by signing into your account.' },
    { property: 'og:title', content: 'Sign in to AcadNexus' },
    { property: 'og:description', content: 'Secure login for students, teachers, and institutions.' }
  ]
});

definePageMeta({ layout: 'auth' });

const handleLogin = () => {
  userStore.setUser({
    id: 'user-1',
    name: 'Alex Doe',
    email: form.email,
    role: form.role as 'student' | 'teacher' | 'institution',
    token: 'mock-token'
  });
  router.push(`/${form.role}/dashboard`);
};
</script>
