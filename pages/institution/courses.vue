<template>
  <NuxtLayout name="dashboard">
    <template #sidebar>
      <NuxtLink to="/institution/dashboard">Overview</NuxtLink>
      <NuxtLink to="/institution/students">Students</NuxtLink>
      <NuxtLink to="/institution/teachers">Teachers</NuxtLink>
      <NuxtLink to="/institution/courses" class="text-primary-600">Courses</NuxtLink>
      <NuxtLink to="/settings">Settings</NuxtLink>
    </template>
    <template #header>
      <div>
        <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">Course Analytics</h1>
        <p class="text-sm text-slate-500 dark:text-slate-300">Review performance across all programs.</p>
      </div>
      <button class="rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary-500">Sync LMS</button>
    </template>

    <section class="space-y-8">
      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <CourseCard
          v-for="course in courses"
          :key="course.id"
          :title="course.title"
          :description="course.description"
          :progress="course.progress ?? 0"
          :enrolled="course.enrolled ?? 0"
        />
      </div>
      <AnalyticsChart
        title="Program Completion"
        chart-type="Stacked"
        :data="[
          { label: 'STEM', value: '89%' },
          { label: 'Humanities', value: '82%' },
          { label: 'Business', value: '85%' }
        ]"
      />
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { courses: teacherCourses } = useFetchCourses('teacher');
const courses = computed(() => teacherCourses.value ?? []);

useHead({
  title: 'Institution Courses',
  meta: [
    { name: 'description', content: 'Get cross-program visibility into curriculum performance and enrollment.' }
  ]
});

definePageMeta({ layout: false });
</script>
