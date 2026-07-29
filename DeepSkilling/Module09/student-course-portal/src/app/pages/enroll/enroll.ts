import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enroll',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './enroll.html',
  styleUrl: './enroll.css'
})
export class EnrollComponent {

  submitted = false;

  enrollment = {
    studentName: '',
    email: '',
    course: '',
    startDate: '',
    comments: ''
  };

  courses = [
    'Angular Development',
    'Python Programming',
    'Data Structures and Algorithms',
    'Machine Learning'
  ];

  onSubmit(form: NgForm): void {

    if (form.valid) {

      this.submitted = true;

      console.log(
        'Enrollment Request:',
        this.enrollment
      );

      form.resetForm({
        studentName: '',
        email: '',
        course: '',
        startDate: '',
        comments: ''
      });

    } else {

      this.submitted = false;

      form.control.markAllAsTouched();

    }
  }
}