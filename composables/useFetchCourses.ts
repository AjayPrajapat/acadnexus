import { ref, type Ref } from 'vue';

interface CourseResponse {
  id: string;
  title: string;
  description: string;
  progress?: number;
  enrolled?: number;
  lessons?: string[];
  assignments?: { id: string; title: string; dueDate: string }[];
}

export function useFetchCourses(role: 'student' | 'teacher') {
  const courses: Ref<CourseResponse[] | null> = useState(`courses-${role}`, () => null);
  const error: Ref<string | null> = useState(`courses-error-${role}`, () => null);
  const pending = ref(false);

  const load = async () => {
    pending.value = true;
    error.value = null;
    try {
      const { $api } = useNuxtApp();
      const { data } = await $api.get(`/api/${role}/courses`);
      courses.value = data;
    } catch (err) {
      error.value = 'Unable to fetch courses at this time.';
    } finally {
      pending.value = false;
    }
  };

  if (!courses.value) {
    load();
  }

  return { courses, error, pending, refresh: load };
}
