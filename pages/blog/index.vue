<template>
  <section class="space-y-8">
    <header class="max-w-3xl">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-slate-100">AcadNexus Blog</h1>
      <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">Guides, product updates, and stories from learning innovators.</p>
    </header>
    <div class="grid gap-6 md:grid-cols-2">
      <BlogCard v-for="post in posts" :key="post.slug" v-bind="post" />
    </div>
  </section>
</template>

<script setup lang="ts">
const posts = [
  {
    title: 'Designing inclusive digital campuses',
    excerpt: 'Practical steps to ensure accessibility and belonging across your virtual learning environments.',
    date: '2024-03-18',
    slug: 'inclusive-digital-campuses'
  },
  {
    title: '5 ways AI copilots empower teachers',
    excerpt: 'Explore how educators are collaborating with AI assistants to personalize learning.',
    date: '2024-04-02',
    slug: 'ai-copilots-empower-teachers'
  },
  {
    title: 'Launching competency-based programs at scale',
    excerpt: 'Lessons from institutions rolling out stackable micro-credentials with AcadNexus.',
    date: '2024-02-05',
    slug: 'competency-based-programs'
  },
  {
    title: 'Building data cultures in K-12 districts',
    excerpt: 'How leaders cultivate data fluency and actionable insights across teams.',
    date: '2024-01-12',
    slug: 'data-cultures-k12'
  }
];

useHead({
  title: 'Blog',
  meta: [
    { name: 'description', content: 'Stay updated with the latest insights and releases from the AcadNexus team.' },
    { property: 'og:title', content: 'AcadNexus Blog' }
  ]
});
</script>
