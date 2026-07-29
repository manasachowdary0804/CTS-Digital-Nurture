import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { HighlightDirective } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

import { Course } from '../../models/course.model';

import { CourseService } from '../../services/course';
import { EnrollmentService } from '../../services/enrollment';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-course-list',

  imports: [
    CommonModule,
    HighlightDirective,
    CreditLabelPipe,
    RouterLink
  ],

  providers: [
    NotificationService
  ],

  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  enrolledCourses: Course[] = [];

  selectedCategory = 'All Courses';

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    private notificationService: NotificationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.courses = this.courseService.getCourses();

    this.enrolledCourses =
      this.enrollmentService.getEnrolledCourses();

    this.route.queryParams.subscribe(params => {

      const category = params['category'];

      if (category) {
        this.selectedCategory = category;
      } else {
        this.selectedCategory = 'All Courses';
      }

    });

    this.notificationService.showInfo(
      'Course list loaded successfully'
    );
  }

  enrollCourse(course: Course): void {

    if (this.enrollmentService.isEnrolled(course.id)) {

      this.notificationService.showInfo(
        `You are already enrolled in ${course.name}`
      );

      return;
    }

    this.enrollmentService.enroll(course);

    this.enrolledCourses =
      this.enrollmentService.getEnrolledCourses();

    this.notificationService.showSuccess(
      `Successfully enrolled in ${course.name}`
    );
  }

  unenrollCourse(course: Course): void {

    this.enrollmentService.unenroll(course.id);

    this.enrolledCourses =
      this.enrollmentService.getEnrolledCourses();

    this.notificationService.showInfo(
      `You have been unenrolled from ${course.name}`
    );
  }

  isEnrolled(course: Course): boolean {

    return this.enrollmentService.isEnrolled(
      course.id
    );
  }
}