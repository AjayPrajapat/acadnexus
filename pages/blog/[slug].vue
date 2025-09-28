<template>
  <div>
    <NuxtLink to="/blog" class="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-500">
      ← Back to blog
    </NuxtLink>
    <BlogDetail :title="post.title" :content="post.content" :author="post.author" :date="post.date" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const posts = {
  'inclusive-digital-campuses': {
    title: 'Designing inclusive digital campuses',
    author: 'Maya Chen',
    date: '2024-03-18',
    content:
      '<p>Inclusive learning environments start with intentional design decisions that account for diverse needs. In this guide we explore accessibility audits, multi-modal content delivery, and community engagement frameworks that elevate every learner.</p>'
  },
  'ai-copilots-empower-teachers': {
    title: '5 ways AI copilots empower teachers',
    author: 'Zayd Malik',
    date: '2024-04-02',
    content:
      '<p>AI copilots streamline lesson planning, surface intervention opportunities, and personalize feedback loops. Learn how AcadNexus teachers adopt AI ethically and effectively.</p>'
  },
  'competency-based-programs': {
    title: 'Launching competency-based programs at scale',
    author: 'Iris Gomez',
    date: '2024-02-05',
    content:
      '<p>Competency-based education provides flexible pathways for learners. Discover operational playbooks that institutions leverage with AcadNexus analytics.</p>'
  },
  'data-cultures-k12': {
    title: 'Building data cultures in K-12 districts',
    author: 'Priya Desai',
    date: '2024-01-12',
    content:
      '<p>Transforming instructional practices requires a shared understanding of data. We highlight district leaders using AcadNexus dashboards to drive student success.</p>'
  }
} as const;

const post = computed(() => posts[route.params.slug as keyof typeof posts] ?? {
  title: 'Article not found',
  author: 'AcadNexus Team',
  date: new Date().toISOString(),
  content: '<p>The requested article is not available. Please return to the blog overview.</p>'
});

useHead({
  title: computed(() => post.value.title),
  meta: [
    { name: 'description', content: 'Deep dive article from AcadNexus exploring modern education strategies.' }
  ]
});
</script>
