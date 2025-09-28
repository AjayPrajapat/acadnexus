import { ref, type Ref } from 'vue';

interface StudentResponse {
  id: string;
  name: string;
  email: string;
  enrollment: string;
  progress: number;
}

export function useFetchStudents() {
  const students: Ref<StudentResponse[] | null> = useState('institution-students', () => null);
  const error: Ref<string | null> = useState('institution-students-error', () => null);
  const pending = ref(false);

  const load = async () => {
    pending.value = true;
    error.value = null;
    try {
      const { $api } = useNuxtApp();
      const { data } = await $api.get('/api/institution/students');
      students.value = data;
    } catch (err) {
      error.value = 'Unable to fetch students right now.';
    } finally {
      pending.value = false;
    }
  };

  if (!students.value) {
    load();
  }

  return { students, error, pending, refresh: load };
}
