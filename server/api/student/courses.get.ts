export default defineEventHandler(() => {
  return [
    {
      id: 'course-analytics',
      title: 'Learning Analytics Fundamentals',
      description: 'Interpret dashboards, identify trends, and drive personalized interventions.',
      progress: 76,
      enrolled: 180,
      lessons: ['Data Literacy', 'Cohort Insights', 'Actionable Alerts'],
      assignments: [
        { id: 'assign-1', title: 'Identify at-risk learners', dueDate: '2024-04-20' },
        { id: 'assign-2', title: 'Design interventions', dueDate: '2024-04-27' }
      ]
    },
    {
      id: 'course-collaboration',
      title: 'Collaborative Learning Studio',
      description: 'Build peer learning communities with shared assignments and rubrics.',
      progress: 42,
      enrolled: 210,
      lessons: ['Community Design', 'Feedback Loops', 'AI Moderation'],
      assignments: [
        { id: 'assign-3', title: 'Design community charter', dueDate: '2024-05-01' },
        { id: 'assign-4', title: 'Facilitate peer review', dueDate: '2024-05-08' }
      ]
    }
  ];
});
