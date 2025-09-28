<template>
  <NuxtLayout name="dashboard">
    <template #sidebar>
      <NuxtLink to="/teacher/dashboard">Overview</NuxtLink>
      <NuxtLink to="/teacher/courses">Courses</NuxtLink>
      <NuxtLink to="/settings">Settings</NuxtLink>
    </template>
    <template #header>
      <div>
        <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">{{ course?.title }}</h1>
        <p class="text-sm text-slate-500 dark:text-slate-300">{{ course?.description }}</p>
      </div>
      <div class="flex gap-2">
        <button class="rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary-500">Publish</button>
        <button class="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 hover:border-primary-500 hover:text-primary-600 dark:border-slate-700">Preview</button>
      </div>
    </template>

    <div class="grid gap-8 lg:grid-cols-[2fr,1fr]">
      <section class="space-y-6">
        <CourseDetail :lessons="course?.lessons ?? []" :assignments="course?.assignments ?? []" />
        <AssignmentManagement
          :assignment-list="course?.assignments ?? []"
          @create="handleCreateAssignment"
          @edit="handleEditAssignment"
          @delete="handleDeleteAssignment"
        />
      </section>
      <aside class="space-y-6">
        <section class="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Student Progress</h2>
          <StudentProgressCard
            v-for="student in topStudents"
            :key="student.id"
            :student-name="student.name"
            :progress="student.progress"
          />
        </section>
        <AnalyticsChart
          title="Course Health"
          chart-type="Line"
          :data="[
            { label: 'Engagement', value: '92%' },
            { label: 'Completion', value: `${course?.progress ?? 0}%` },
            { label: 'Feedback Score', value: '4.6/5' }
          ]"
        />
      </aside>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
const { courses: teacherCourses } = useFetchCourses('teacher');
const { students } = useFetchStudents();

const course = computed(() => teacherCourses.value?.find((item) => item.id === route.params.id) ?? null);
const topStudents = computed(() => (students.value ?? []).slice(0, 3));

const handleCreateAssignment = () => alert('Create assignment for this course');
const handleEditAssignment = (id: string) => alert(`Edit assignment ${id}`);
const handleDeleteAssignment = (id: string) => alert(`Delete assignment ${id}`);

useHead({
  title: computed(() => course.value?.title ?? 'Course Management'),
  meta: [
    { name: 'description', content: 'Manage course content, assignments, and student progress on AcadNexus.' }
  ]
});

definePageMeta({ layout: false });
</script>
