<template>
  <NuxtLayout name="dashboard">
    <template #sidebar>
      <NuxtLink to="/student/dashboard">Overview</NuxtLink>
      <NuxtLink to="/student/courses">My Courses</NuxtLink>
      <NuxtLink to="/settings">Settings</NuxtLink>
    </template>
    <template #header>
      <div>
        <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">Student Dashboard</h1>
        <p class="text-sm text-slate-500 dark:text-slate-300">Track progress and upcoming assignments.</p>
      </div>
      <button class="rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary-500">Notifications</button>
    </template>

    <div class="grid gap-8 lg:grid-cols-[2fr,1fr]">
      <section class="space-y-6">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Active Courses</h2>
        <div class="grid gap-6 md:grid-cols-2">
          <CourseCard
            v-for="course in courses"
            :key="course.id"
            :title="course.title"
            :description="course.description"
            :progress="course.progress ?? 0"
            :enrolled="course.enrolled ?? 0"
          >
            <template #footer>
              <NuxtLink :to="`/student/course/${course.id}`" class="mt-4 inline-flex text-sm font-semibold text-primary-600 hover:text-primary-500">View course</NuxtLink>
            </template>
          </CourseCard>
        </div>
      </section>

      <aside class="space-y-6">
        <section>
          <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Upcoming Assignments</h2>
          <div class="mt-4 space-y-4">
            <AssignmentCard
              v-for="assignment in assignments"
              :key="assignment.id"
              :title="assignment.title"
              :due-date="assignment.dueDate"
              :status="assignment.status ?? 'Pending'"
            />
          </div>
        </section>
        <AIStudyAssistant />
      </aside>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { courses: studentCourses } = useFetchCourses('student');
const { assignments: studentAssignments } = useFetchAssignments('student');

const courses = computed(() => studentCourses.value ?? []);
const assignments = computed(() => studentAssignments.value ?? []);

useHead({
  title: 'Student Dashboard',
  meta: [
    { name: 'description', content: 'Overview of your AcadNexus learning journey with progress, assignments, and AI tools.' },
    { property: 'og:title', content: 'AcadNexus Student Dashboard' }
  ]
});

definePageMeta({ layout: false });
</script>
