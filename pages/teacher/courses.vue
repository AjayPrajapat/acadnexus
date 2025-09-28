<template>
  <NuxtLayout name="dashboard">
    <template #sidebar>
      <NuxtLink to="/teacher/dashboard">Overview</NuxtLink>
      <NuxtLink to="/teacher/courses" class="text-primary-600">Courses</NuxtLink>
      <NuxtLink to="/settings">Settings</NuxtLink>
    </template>
    <template #header>
      <div>
        <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">Manage Courses</h1>
        <p class="text-sm text-slate-500 dark:text-slate-300">Organize curriculum, assignments, and communication.</p>
      </div>
      <button class="rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary-500">New course</button>
    </template>

    <section class="space-y-6">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <input
          v-model="search"
          type="search"
          placeholder="Search courses"
          class="w-full max-w-sm rounded-full border border-slate-300 bg-white px-4 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-slate-700 dark:bg-slate-800"
        />
        <select
          v-model="statusFilter"
          class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-slate-700 dark:bg-slate-800"
        >
          <option value="all">All statuses</option>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>
      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <CourseCard
          v-for="course in filteredCourses"
          :key="course.id"
          :title="course.title"
          :description="course.description"
          :progress="course.progress ?? 0"
          :enrolled="course.enrolled ?? 0"
        >
          <template #footer>
            <div class="mt-4 flex gap-2 text-sm">
              <NuxtLink :to="`/teacher/course/${course.id}`" class="font-semibold text-primary-600 hover:text-primary-500">Open</NuxtLink>
              <button class="font-semibold text-slate-500 hover:text-primary-600">Share</button>
            </div>
          </template>
        </CourseCard>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { courses: teacherCourses } = useFetchCourses('teacher');
const search = ref('');
const statusFilter = ref('all');

const courses = computed(() => teacherCourses.value ?? []);

const filteredCourses = computed(() =>
  courses.value.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search.value.toLowerCase());
    const matchesStatus =
      statusFilter.value === 'all' || (statusFilter.value === 'published' ? (course.progress ?? 0) > 0 : (course.progress ?? 0) === 0);
    return matchesSearch && matchesStatus;
  })
);

useHead({
  title: 'Teacher Courses',
  meta: [
    { name: 'description', content: 'Create and manage courses for your learners on AcadNexus.' }
  ]
});

definePageMeta({ layout: false });
</script>
