<template>
  <section class="relative overflow-hidden rounded-3xl bg-primary-600 px-6 py-16 text-white shadow-xl">
    <div class="mx-auto max-w-4xl text-center">
      <h1 class="text-4xl font-bold sm:text-5xl" v-text="title" />
      <p class="mt-4 text-lg opacity-90" v-text="subtitle" />
      <NuxtLink
        :to="ctaLink"
        class="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-lg transition hover:bg-slate-100"
      >
        {{ ctaText }}
      </NuxtLink>
    </div>
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary-500/30 to-primary-900/30" aria-hidden="true" />
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

defineProps<Props>();
</script>
