import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { LoggerService } from './logger';

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

  getCourseById(id: number): Course | undefined {
    this.logger.log(`Fetching course with ID: ${id}`);

    return this.courses.find(
      course => course.id === id
    );
  }

  addCourse(course: Course): void {
    this.courses.push(course);

    this.logger.log(
      `Course added successfully: ${course.name}`
    );
  }
}