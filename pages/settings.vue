<template>
  <NuxtLayout name="dashboard">
    <template #sidebar>
      <NuxtLink v-if="role === 'student'" to="/student/dashboard">Dashboard</NuxtLink>
      <NuxtLink v-else-if="role === 'teacher'" to="/teacher/dashboard">Dashboard</NuxtLink>
      <NuxtLink v-else-if="role === 'institution'" to="/institution/dashboard">Dashboard</NuxtLink>
      <NuxtLink to="/settings" class="text-primary-600">Settings</NuxtLink>
    </template>
    <template #header>
      <div>
        <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">Account Settings</h1>
        <p class="text-sm text-slate-500 dark:text-slate-300">Update your profile details and preferences.</p>
      </div>
      <button class="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 hover:border-primary-500 hover:text-primary-600 dark:border-slate-700">Manage billing</button>
    </template>

    <div class="grid gap-8 lg:grid-cols-[2fr,1fr]">
      <section class="space-y-6">
        <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Profile</h2>
          <ProfileForm @submit="handleProfileSubmit" />
        </div>
        <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Preferences</h2>
          <PreferencesForm @submit="handlePreferencesSubmit" />
        </div>
      </section>
      <aside class="space-y-6">
        <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Notifications</h2>
          <p class="mt-2 text-sm text-slate-500 dark:text-slate-300">Keep track of assignment deadlines, announcements, and institution-wide updates.</p>
        </section>
        <section class="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-800 shadow-sm dark:border-amber-500/30 dark:bg-amber-900/30 dark:text-amber-200">
          <h3 class="text-base font-semibold">Need to update permissions?</h3>
          <p class="mt-2">Contact your administrator to adjust role-based access across AcadNexus modules.</p>
        </section>
      </aside>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const userStore = useUserStore();
const role = computed(() => userStore.role ?? 'student');

const handleProfileSubmit = (payload: { name: string; email: string; password: string }) => {
  userStore.setUser({ name: payload.name, email: payload.email });
  alert('Profile updated.');
};

const handlePreferencesSubmit = (payload: { notificationPrefs: string; themeMode: 'light' | 'dark' }) => {
  document.documentElement.classList.toggle('dark', payload.themeMode === 'dark');
  alert(`Preferences saved: ${payload.notificationPrefs}`);
};

useHead({
  title: 'Settings',
  meta: [
    { name: 'description', content: 'Manage your AcadNexus account profile and platform preferences.' }
  ]
});

definePageMeta({ layout: false });
</script>
