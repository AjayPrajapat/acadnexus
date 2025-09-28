<template>
  <NuxtLayout name="dashboard">
    <template #sidebar>
      <NuxtLink to="/teacher/dashboard">Overview</NuxtLink>
      <NuxtLink to="/teacher/courses">Courses</NuxtLink>
      <NuxtLink to="/settings">Settings</NuxtLink>
    </template>
    <template #header>
      <div>
        <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">Teacher Dashboard</h1>
        <p class="text-sm text-slate-500 dark:text-slate-300">Manage courses, assignments, and learner progress.</p>
      </div>
      <button class="rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary-500">Create course</button>
    </template>

    <div class="grid gap-8 lg:grid-cols-[2fr,1fr]">
      <section class="space-y-6">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Course Snapshot</h2>
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
              <NuxtLink :to="`/teacher/course/${course.id}`" class="mt-4 inline-flex text-sm font-semibold text-primary-600 hover:text-primary-500">Manage course</NuxtLink>
            </template>
          </CourseCard>
        </div>
        <AssignmentManagement
          :assignment-list="assignments"
          @create="handleCreateAssignment"
          @edit="handleEditAssignment"
          @delete="handleDeleteAssignment"
        />
      </section>

      <aside class="space-y-6">
        <AnalyticsChart
          title="Engagement Overview"
          chart-type="Bar"
          :data="[
            { label: 'Active Students', value: '156' },
            { label: 'Assignments Graded', value: '48' },
            { label: 'Average Score', value: '88%' }
          ]"
        />
        <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Announcements</h2>
          <p class="mt-2 text-sm text-slate-500 dark:text-slate-300">Share updates with your classes and automate reminders.</p>
        </section>
      </aside>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { courses: teacherCourses } = useFetchCourses('teacher');
const { assignments: teacherAssignments } = useFetchAssignments('teacher');

const courses = computed(() => teacherCourses.value ?? []);
const assignments = computed(() => teacherAssignments.value ?? []);

const handleCreateAssignment = () => alert('Open assignment creation modal.');
const handleEditAssignment = (id: string) => alert(`Edit assignment ${id}`);
const handleDeleteAssignment = (id: string) => alert(`Delete assignment ${id}`);

useHead({
  title: 'Teacher Dashboard',
  meta: [
    { name: 'description', content: 'Teacher insights and management tools for AcadNexus courses.' },
    { property: 'og:title', content: 'AcadNexus Teacher Dashboard' }
  ]
});

definePageMeta({ layout: false });
</script>
