import { ref, type Ref } from 'vue';

interface AssignmentResponse {
  id: string;
  title: string;
  dueDate: string;
  status?: string;
}

export function useFetchAssignments(role: 'student' | 'teacher') {
  const assignments: Ref<AssignmentResponse[] | null> = useState(
    `assignments-${role}`,
    () => null
  );
  const error: Ref<string | null> = useState(`assignments-error-${role}`, () => null);
  const pending = ref(false);

  const load = async () => {
    pending.value = true;
    error.value = null;
    try {
      const { $api } = useNuxtApp();
      const { data } = await $api.get(`/api/${role}/assignments`);
      assignments.value = data;
    } catch (err) {
      error.value = 'Unable to fetch assignments right now.';
    } finally {
      pending.value = false;
    }
  };

  if (!assignments.value) {
    load();
  }

  return { assignments, error, pending, refresh: load };
}
