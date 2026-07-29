import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private enrolledCourses: Course[] = [];

  enroll(course: Course): void {

    const alreadyEnrolled = this.isEnrolled(course.id);

    if (!alreadyEnrolled) {
      course.enrolled = true;
      this.enrolledCourses.push(course);

      console.log(
        `Successfully enrolled in ${course.name}`
      );
    }
  }

  unenroll(courseId: number): void {

    const index = this.enrolledCourses.findIndex(
      course => course.id === courseId
    );

    if (index !== -1) {

      this.enrolledCourses[index].enrolled = false;

      this.enrolledCourses.splice(index, 1);

      console.log(
        `Successfully unenrolled from course ID: ${courseId}`
      );
    }
  }

  isEnrolled(courseId: number): boolean {

    return this.enrolledCourses.some(
      course => course.id === courseId
    );
  }

  getEnrolledCourses(): Course[] {

    return this.enrolledCourses;
  }
}