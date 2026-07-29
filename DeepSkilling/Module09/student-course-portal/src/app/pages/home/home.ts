import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentProfileComponent } from '../student-profile/student-profile';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, StudentProfileComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {

  title = 'Student Course Portal';

  message = 'Welcome to the Student Course Portal!';

  studentName = '';

  isPortalActive = true;

  profileMessage = '';

  ngOnInit(): void {
    console.log('HomeComponent initialized');
  }

  togglePortal(): void {
    this.isPortalActive = !this.isPortalActive;
  }

  onProfileMessage(message: string): void {
    this.profileMessage = message;
  }
}