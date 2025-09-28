<template>
  <NuxtLayout name="dashboard">
    <template #sidebar>
      <NuxtLink to="/student/dashboard">Overview</NuxtLink>
      <NuxtLink to="/student/courses">My Courses</NuxtLink>
      <NuxtLink to="/settings">Settings</NuxtLink>
    </template>
    <template #header>
      <div>
        <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">{{ course?.title }}</h1>
        <p class="text-sm text-slate-500 dark:text-slate-300">{{ course?.description }}</p>
      </div>
      <button class="rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary-500">Download syllabus</button>
    </template>

    <div class="grid gap-8 lg:grid-cols-[2fr,1fr]">
      <CourseDetail :lessons="course?.lessons ?? []" :assignments="course?.assignments ?? []" />
      <aside class="space-y-6">
        <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Progress</h2>
          <p class="mt-2 text-sm text-slate-500 dark:text-slate-300">You are {{ course?.progress ?? 0 }}% through this course.</p>
        </section>
        <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Classmates</h2>
          <p class="mt-2 text-sm text-slate-500 dark:text-slate-300">Join the discussion forum to collaborate with peers.</p>
        </section>
      </aside>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
const { courses: studentCourses } = useFetchCourses('student');

const course = computed(() => studentCourses.value?.find((item) => item.id === route.params.id) ?? null);

useHead({
  title: computed(() => course.value?.title ?? 'Course Overview'),
  meta: [
    {
      name: 'description',
      content: computed(() => course.value?.description ?? 'Review course content, lessons, and assignments on AcadNexus.')
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: computed(() => `https://acadnexus.example/student/course/${route.params.id}`)
    }
  ]
});

definePageMeta({ layout: false });
</script>
