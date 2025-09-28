<template>
  <StaticContent :content="content" />
</template>

<script setup lang="ts">
const content = `
  <h1>Terms of Service</h1>
  <p>Welcome to AcadNexus. By using our platform you agree to the following terms.</p>
  <h2>Use of Platform</h2>
  <p>AcadNexus provides learning management and analytics tools. Users agree to comply with institutional policies and applicable laws.</p>
  <h2>Data Protection</h2>
  <p>We implement security controls to protect personal data and adhere to FERPA, COPPA, and GDPR guidelines where applicable.</p>
  <h2>Acceptable Use</h2>
  <p>Users must not misuse platform resources, attempt unauthorized access, or distribute harmful content.</p>
`;

useHead({
  title: 'Terms of Service',
  meta: [
    { name: 'description', content: 'Review the AcadNexus terms governing platform usage and responsibilities.' }
  ]
});
</script>
