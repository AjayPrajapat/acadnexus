<template>
  <div class="space-y-16">
    <HeroSection
      title="Unify learning with AcadNexus"
      subtitle="Empower students, teachers, and institutions with AI-assisted workflows, actionable analytics, and immersive content."
      cta-text="Explore platform"
      cta-link="/register"
    />

    <section>
      <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100">Why AcadNexus?</h2>
      <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          v-for="feature in features"
          :key="feature.title"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
          :cta="feature.cta"
        />
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100">Popular Courses</h2>
      <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <CourseCard
          v-for="course in courses"
          :key="course.id"
          :title="course.title"
          :description="course.description"
          :progress="course.progress"
          :enrolled="course.enrolled"
        />
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100">Loved by modern learning communities</h2>
      <div class="mt-8 grid gap-6 md:grid-cols-3">
        <TestimonialCard v-for="testimonial in testimonials" :key="testimonial.name" v-bind="testimonial" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { AcademicCapIcon, SparklesIcon, ChartBarSquareIcon } from '@heroicons/vue/24/outline';

useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'AcadNexus connects learners and educators with AI-assisted tools and insights.' },
    { property: 'og:title', content: 'AcadNexus EdTech Platform' },
    { property: 'og:description', content: 'Engage students, empower teachers, and inform institutions.' }
  ]
});

const features = [
  {
    title: 'AI study workflows',
    description: 'Guide learners with adaptive study assistants and personalized recommendations.',
    icon: SparklesIcon,
    cta: { label: 'Discover AI tools', link: '/student/dashboard' }
  },
  {
    title: 'Integrated analytics',
    description: 'Monitor performance trends across cohorts with role-specific dashboards.',
    icon: ChartBarSquareIcon,
    cta: { label: 'View analytics', link: '/teacher/dashboard' }
  },
  {
    title: 'Curriculum management',
    description: 'Streamline course creation, assignments, and accreditation workflows.',
    icon: AcademicCapIcon,
    cta: { label: 'See courses', link: '/institution/courses' }
  }
];

const courses = [
  {
    id: 'course-1',
    title: 'Data Science Foundations',
    description: 'Hands-on pathway into statistics, Python, and machine learning.',
    progress: 78,
    enrolled: 340
  },
  {
    id: 'course-2',
    title: 'Creative Writing Studio',
    description: 'Peer-reviewed workshops focused on storytelling craft.',
    progress: 45,
    enrolled: 210
  },
  {
    id: 'course-3',
    title: 'Advanced Mathematics',
    description: 'Adaptive practice sets and interactive lessons for high achievers.',
    progress: 62,
    enrolled: 190
  }
];

const testimonials = [
  {
    quote: 'AcadNexus helps our teachers personalize learning at scale without additional workload.',
    name: 'Jordan Matthews',
    role: 'Director, Horizon High School',
    avatar: '/images/testimonial-1.jpg'
  },
  {
    quote: 'The AI study assistant transformed how our students revise and collaborate.',
    name: 'Amelia Patel',
    role: 'Learning Lead, BrightFuture Academy',
    avatar: '/images/testimonial-2.jpg'
  },
  {
    quote: 'Our administrators finally have visibility into learner progress across campuses.',
    name: 'Luis Rodriguez',
    role: 'Provost, Global University',
    avatar: '/images/testimonial-3.jpg'
  }
];
</script>
