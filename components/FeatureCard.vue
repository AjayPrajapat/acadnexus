<template>
  <div class="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
    <div class="flex items-center gap-4">
      <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/40">
        <component :is="icon" class="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-100" v-text="title" />
    </div>
    <p class="mt-4 flex-1 text-sm text-slate-600 dark:text-slate-300" v-text="description" />
    <NuxtLink
      v-if="cta"
      :to="cta.link"
      class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-500"
    >
      {{ cta.label }}
      <span aria-hidden="true">→</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue';

interface Props {
  title: string;
  description: string;
  icon: Component;
  cta?: {
    label: string;
    link: string;
  };
}

defineProps<Props>();
</script>
