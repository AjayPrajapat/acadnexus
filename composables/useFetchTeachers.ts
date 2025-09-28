import { ref, type Ref } from 'vue';

interface TeacherResponse {
  id: string;
  name: string;
  email: string;
  courses: number;
}

export function useFetchTeachers() {
  const teachers: Ref<TeacherResponse[] | null> = useState('institution-teachers', () => null);
  const error: Ref<string | null> = useState('institution-teachers-error', () => null);
  const pending = ref(false);

  const load = async () => {
    pending.value = true;
    error.value = null;
    try {
      const { $api } = useNuxtApp();
      const { data } = await $api.get('/api/institution/teachers');
      teachers.value = data;
    } catch (err) {
      error.value = 'Unable to fetch teachers right now.';
    } finally {
      pending.value = false;
    }
  };

  if (!teachers.value) {
    load();
  }

  return { teachers, error, pending, refresh: load };
}
