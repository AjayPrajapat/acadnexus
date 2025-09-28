<template>
  <NuxtLayout name="dashboard">
    <template #sidebar>
      <NuxtLink to="/institution/dashboard">Overview</NuxtLink>
      <NuxtLink to="/institution/students">Students</NuxtLink>
      <NuxtLink to="/institution/teachers" class="text-primary-600">Teachers</NuxtLink>
      <NuxtLink to="/institution/courses">Courses</NuxtLink>
      <NuxtLink to="/settings">Settings</NuxtLink>
    </template>
    <template #header>
      <div>
        <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">Teacher Management</h1>
        <p class="text-sm text-slate-500 dark:text-slate-300">Support faculty performance and collaboration.</p>
      </div>
      <button class="rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary-500">Invite teacher</button>
    </template>

    <section class="space-y-8">
      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <TeacherCard v-for="teacher in teachers" :key="teacher.id" :name="teacher.name" :email="teacher.email" :courses="teacher.courses" />
      </div>
      <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Faculty Insights</h2>
        <ul class="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <li>🌟 87% of teachers achieved performance targets.</li>
          <li>🧠 Professional development hours increased by 22%.</li>
          <li>🤝 Cross-campus collaboration sessions scheduled weekly.</li>
        </ul>
      </section>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { teachers: institutionTeachers } = useFetchTeachers();
const teachers = computed(() => institutionTeachers.value ?? []);

useHead({
  title: 'Institution Teachers',
  meta: [
    { name: 'description', content: 'Coordinate and support faculty teams across your institution.' }
  ]
});

definePageMeta({ layout: false });
</script>
