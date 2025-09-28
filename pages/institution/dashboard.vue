<template>
  <NuxtLayout name="dashboard">
    <template #sidebar>
      <NuxtLink to="/institution/dashboard">Overview</NuxtLink>
      <NuxtLink to="/institution/students">Students</NuxtLink>
      <NuxtLink to="/institution/teachers">Teachers</NuxtLink>
      <NuxtLink to="/institution/courses">Courses</NuxtLink>
      <NuxtLink to="/settings">Settings</NuxtLink>
    </template>
    <template #header>
      <div>
        <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">Institution Dashboard</h1>
        <p class="text-sm text-slate-500 dark:text-slate-300">Insights across campuses, cohorts, and faculty.</p>
      </div>
      <button class="rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-primary-500">Export report</button>
    </template>

    <div class="space-y-8">
      <div class="grid gap-6 lg:grid-cols-3">
        <AnalyticsChart
          title="Enrollment"
          chart-type="Donut"
          :data="[
            { label: 'Undergraduate', value: '2,430' },
            { label: 'Postgraduate', value: '1,120' },
            { label: 'Professional', value: '870' }
          ]"
        />
        <AnalyticsChart
          title="Completion Rates"
          chart-type="Gauge"
          :data="[
            { label: 'This term', value: '84%' },
            { label: 'Last term', value: '79%' }
          ]"
        />
        <AnalyticsChart
          title="Satisfaction"
          chart-type="Bar"
          :data="[
            { label: 'Students', value: '4.4/5' },
            { label: 'Teachers', value: '4.1/5' }
          ]"
        />
      </div>

      <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Recent Highlights</h2>
        <ul class="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
          <li>✔️ STEM program achieved 92% completion rate.</li>
          <li>✔️ Faculty onboarding automation reduced setup time by 40%.</li>
          <li>✔️ New AI tutoring pilot launched across three campuses.</li>
        </ul>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Institution Dashboard',
  meta: [
    { name: 'description', content: 'Monitor institutional performance, satisfaction, and enrollment trends.' }
  ]
});

definePageMeta({ layout: false });
</script>
