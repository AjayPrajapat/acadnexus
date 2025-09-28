import { defineStore } from 'pinia';

interface Course {
  id: string;
  title: string;
  description: string;
  progress?: number;
  enrolled?: number;
}

interface CoursesState {
  courses: Course[];
}

export const useCoursesStore = defineStore('courses', {
  state: (): CoursesState => ({
    courses: []
  }),
  actions: {
    setCourses(courses: Course[]) {
      this.courses = courses;
    }
  }
});
