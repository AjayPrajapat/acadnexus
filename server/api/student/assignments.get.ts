export default defineEventHandler(() => {
  return [
    { id: 'assign-1', title: 'Identify at-risk learners', dueDate: '2024-04-20', status: 'Pending' },
    { id: 'assign-2', title: 'Design interventions', dueDate: '2024-04-27', status: 'Submitted' },
    { id: 'assign-5', title: 'Reflection journal', dueDate: '2024-04-25', status: 'Overdue' }
  ];
});
