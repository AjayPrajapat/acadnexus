<template>
  <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
    <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">AI Study Assistant</h3>
    <p class="mt-1 text-sm text-slate-500 dark:text-slate-300">
      Ask any question about your coursework and get instant guidance.
    </p>
    <form class="mt-4 space-y-4" @submit.prevent="handleSubmit">
      <label class="block">
        <span class="sr-only">Question</span>
        <textarea
          v-model="question"
          class="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-slate-600 dark:text-slate-100"
          rows="4"
          placeholder="How can I improve my understanding of algebraic expressions?"
          :aria-busy="isLoading"
        ></textarea>
      </label>
      <button
        type="submit"
        class="inline-flex items-center justify-center rounded-full bg-primary-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:bg-primary-400"
        :disabled="isLoading"
      >
        <span v-if="isLoading" class="inline-flex items-center gap-2">
          <span class="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"></span>
          Thinking
        </span>
        <span v-else>Ask Assistant</span>
      </button>
    </form>
    <div v-if="answer" class="mt-6 rounded-xl bg-slate-100 p-4 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">
      <h4 class="font-semibold">Suggested approach</h4>
      <p class="mt-2 whitespace-pre-line">{{ answer }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const question = ref('');
const answer = ref('');
const isLoading = ref(false);

const handleSubmit = async () => {
  if (!question.value.trim()) {
    return;
  }
  isLoading.value = true;
  answer.value = '';
  await new Promise((resolve) => setTimeout(resolve, 600));
  answer.value =
    'Start by reviewing the lesson notes and practicing problems from your course. Focus on simplifying expressions step by step and use the provided worksheets for additional practice.';
  isLoading.value = false;
  question.value = '';
};
</script>
