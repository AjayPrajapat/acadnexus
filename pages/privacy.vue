<template>
  <StaticContent :content="content" />
</template>

<script setup lang="ts">
const content = `
  <h1>Privacy Policy</h1>
  <p>Your privacy is important to AcadNexus. This policy explains the data we collect and how we use it.</p>
  <h2>Information Collection</h2>
  <p>We collect account details, learning activity, and feedback to personalize experiences and provide support.</p>
  <h2>Data Usage</h2>
  <p>Data is used for analytics, communication, and to improve platform features. We do not sell personal data.</p>
  <h2>Contact</h2>
  <p>For any privacy inquiries please contact privacy@acadnexus.com.</p>
`;

useHead({
  title: 'Privacy Policy',
  meta: [
    { name: 'description', content: 'Learn how AcadNexus collects, uses, and protects your personal information.' }
  ]
});
</script>
