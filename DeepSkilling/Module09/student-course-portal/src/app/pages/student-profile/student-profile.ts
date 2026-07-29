import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfileComponent {

  // Used for @Input() and @Output() demonstration on Home page
  @Input() studentName: string = '';

  @Output() profileUpdated = new EventEmitter<string>();

  // Used for Enrollment Request form
  submitted = false;

  courses = [
    'Angular Development',
    'Python Programming',
    'Data Structures and Algorithms',
    'Machine Learning'
  ];

  updateProfile(): void {
    const name = this.studentName.trim() || 'Student';

    this.profileUpdated.emit(
      `${name} profile updated successfully!`
    );
  }

  onSubmit(form: NgForm): void {

    if (form.valid) {
      this.submitted = true;

      console.log('Enrollment Request:', form.value);

      form.resetForm();
    }
  }
}