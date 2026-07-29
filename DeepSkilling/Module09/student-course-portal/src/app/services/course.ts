import { Injectable } from '@angular/core';
import { LoggerService } from './logger';

export interface Course {
  id: number;
  name: string;
  instructor: string;
  duration: string;
  credits: number | null;
  enrolled: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    {
      id: 1,
      name: 'Angular Development',
      instructor: 'John Smith',
      duration: '8 Weeks',
      credits: 3,
      enrolled: false
    },
    {
      id: 2,
      name: 'Python Programming',
      instructor: 'Sarah Johnson',
      duration: '10 Weeks',
      credits: 1,
      enrolled: false
    },
    {
      id: 3,
      name: 'Data Structures and Algorithms',
      instructor: 'David Wilson',
      duration: '12 Weeks',
      credits: 4,
      enrolled: false
    },
    {
      id: 4,
      name: 'Machine Learning',
      instructor: 'Emily Brown',
      duration: '10 Weeks',
      credits: null,
      enrolled: false
    }
  ];

  constructor(
    private logger: LoggerService
  ) {}

  getCourses(): Course[] {

    this.logger.log('Fetching all available courses');

    return this.courses;
  }

  enrollCourse(courseId: number): void {

    const course = this.courses.find(
      course => course.id === courseId
    );

    if (course) {

      course.enrolled = true;

      this.logger.log(
        `Student enrolled in course: ${course.name}`
      );

    } else {

      this.logger.error(
        `Course with ID ${courseId} was not found`
      );

    }
  }
}