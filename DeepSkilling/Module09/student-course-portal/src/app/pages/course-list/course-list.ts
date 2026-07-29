import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import {
  Course,
  CourseService
} from '../../services/course';

@Component({
  selector: 'app-course-list',
  imports: [
    CommonModule,
    HighlightDirective,
    CreditLabelPipe
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  constructor(
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  enrollCourse(course: Course): void {
    this.courseService.enrollCourse(course.id);
  }
}