import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Course {
  id: number;
  name: string;
  instructor: string;
  duration: string;
  enrolled: boolean;
}

@Component({
  selector: 'app-course-list',
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent {

  courses: Course[] = [
    {
      id: 1,
      name: 'Angular Development',
      instructor: 'John Smith',
      duration: '8 Weeks',
      enrolled: false
    },
    {
      id: 2,
      name: 'Python Programming',
      instructor: 'Sarah Johnson',
      duration: '10 Weeks',
      enrolled: false
    },
    {
      id: 3,
      name: 'Data Structures and Algorithms',
      instructor: 'David Wilson',
      duration: '12 Weeks',
      enrolled: false
    },
    {
      id: 4,
      name: 'Machine Learning',
      instructor: 'Emily Brown',
      duration: '10 Weeks',
      enrolled: false
    }
  ];

  enrollCourse(course: Course): void {
    course.enrolled = true;
  }
}