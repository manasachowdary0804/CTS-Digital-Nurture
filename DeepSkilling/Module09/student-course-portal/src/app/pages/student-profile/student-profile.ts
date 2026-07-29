import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  imports: [],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfileComponent {

  @Input() studentName: string = '';

  @Output() profileUpdated = new EventEmitter<string>();

  updateProfile(): void {
    const name = this.studentName.trim() || 'Student';

    this.profileUpdated.emit(
      `${name} profile updated successfully!`
    );
  }
}