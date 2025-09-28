export default defineEventHandler(() => {
  return [
    {
      id: 'course-analytics',
      title: 'Learning Analytics Fundamentals',
      description: 'Instructor toolkit for data-informed teaching strategies.',
      progress: 65,
      enrolled: 180,
      lessons: ['Data Literacy', 'Cohort Insights', 'Actionable Alerts'],
      assignments: [
        { id: 'assign-1', title: 'Identify at-risk learners', dueDate: '2024-04-20' },
        { id: 'assign-2', title: 'Design interventions', dueDate: '2024-04-27' }
      ]
    },
    {
      id: 'course-capstone',
      title: 'Capstone Studio',
      description: 'Guide learners through project-based mastery assessments.',
      progress: 30,
      enrolled: 92,
      lessons: ['Proposal Review', 'Milestone Coaching', 'Showcase Prep'],
      assignments: [
        { id: 'assign-10', title: 'Milestone checkpoint', dueDate: '2024-05-02' }
      ]
    },
    {
      id: 'course-design',
      title: 'Designing Active Learning',
      description: 'Create dynamic hybrid courses with human-centered design.',
      progress: 80,
      enrolled: 146,
      lessons: ['Journey Mapping', 'Interactive Media', 'Assessment Strategy'],
      assignments: [
        { id: 'assign-12', title: 'Learning experience blueprint', dueDate: '2024-04-30' }
      ]
    }
  ];
});
