<template>
  <NuxtLayout name="dashboard">
    <template #sidebar>
      <NuxtLink to="/institution/dashboard">Overview</NuxtLink>
      <NuxtLink to="/institution/students" class="text-primary-600">Students</NuxtLink>
      <NuxtLink to="/institution/teachers">Teachers</NuxtLink>
      <NuxtLink to="/institution/courses">Courses</NuxtLink>
      <NuxtLink to="/settings">Settings</NuxtLink>
    </template>
    <template #header>
      <div>
        <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">Student Management</h1>
        <p class="text-sm text-slate-500 dark:text-slate-300">Review enrollment data and learner progress.</p>
      </div>
      <button class="rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary-500">Add student</button>
    </template>

    <section class="space-y-8">
      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <StudentCard v-for="student in students" :key="student.id" :name="student.name" :email="student.email" :enrollment="student.enrollment" />
      </div>
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Progress Leaders</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <StudentProgressCard
            v-for="student in students.slice(0, 4)"
            :key="student.id"
            :student-name="student.name"
            :progress="student.progress"
          />
        </div>
      </section>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { students: institutionStudents } = useFetchStudents();
const students = computed(() => institutionStudents.value ?? []);

useHead({
  title: 'Institution Students',
  meta: [
    { name: 'description', content: 'Manage student rosters, enrollment statuses, and progress insights.' }
  ]
});

definePageMeta({ layout: false });
</script>
