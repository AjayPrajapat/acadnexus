<template>
  <NuxtLayout name="dashboard">
    <template #sidebar>
      <NuxtLink to="/student/dashboard">Overview</NuxtLink>
      <NuxtLink to="/student/courses" class="text-primary-600">My Courses</NuxtLink>
      <NuxtLink to="/settings">Settings</NuxtLink>
    </template>
    <template #header>
      <div>
        <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">My Courses</h1>
        <p class="text-sm text-slate-500 dark:text-slate-300">Continue learning with your assigned modules.</p>
      </div>
      <button class="rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary-500">Browse Catalog</button>
    </template>

    <section class="space-y-6">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div class="flex gap-3">
          <button class="rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-600 shadow dark:bg-slate-800">All</button>
          <button class="rounded-full bg-transparent px-4 py-2 text-sm font-semibold text-slate-500 hover:text-primary-600">In progress</button>
          <button class="rounded-full bg-transparent px-4 py-2 text-sm font-semibold text-slate-500 hover:text-primary-600">Completed</button>
        </div>
        <input
          v-model="search"
          type="search"
          placeholder="Search courses"
          class="w-full max-w-xs rounded-full border border-slate-300 bg-white px-4 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-slate-700 dark:bg-slate-800"
        />
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
            <NuxtLink :to="`/student/course/${course.id}`" class="mt-4 inline-flex text-sm font-semibold text-primary-600 hover:text-primary-500">Continue learning</NuxtLink>
          </template>
        </CourseCard>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { courses: studentCourses } = useFetchCourses('student');
const search = ref('');

const courses = computed(() => studentCourses.value ?? []);

const filteredCourses = computed(() => {
  if (!search.value) {
    return courses.value;
  }
  return courses.value.filter((course) =>
    course.title.toLowerCase().includes(search.value.toLowerCase())
  );
});

useHead({
  title: 'Student Courses',
  meta: [
    { name: 'description', content: 'Browse all courses you are enrolled in on AcadNexus.' }
  ]
});

definePageMeta({ layout: false });
</script>
