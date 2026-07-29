import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

import { passwordStrengthValidator } from '../../validators/password-strength.validator';

function passwordsMatchValidator(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (!password || !confirmPassword) {
      return null;
    }

    return password === confirmPassword
      ? null
      : { passwordsMismatch: true };
  };
}

@Component({
  selector: 'app-registration',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class RegistrationComponent {

  registrationForm: FormGroup;

  submitted = false;

  constructor(private fb: FormBuilder) {

    this.registrationForm = this.fb.group(
      {
        studentName: [
          '',
          [
            Validators.required,
            Validators.minLength(3)
          ]
        ],

        email: [
          '',
          [
            Validators.required,
            Validators.email
          ]
        ],

        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            passwordStrengthValidator()
          ]
        ],

        confirmPassword: [
          '',
          [
            Validators.required
          ]
        ]
      },
      {
        validators: passwordsMatchValidator()
      }
    );
  }

  get studentName(): AbstractControl | null {
    return this.registrationForm.get('studentName');
  }

  get email(): AbstractControl | null {
    return this.registrationForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.registrationForm.get('password');
  }

  get confirmPassword(): AbstractControl | null {
    return this.registrationForm.get('confirmPassword');
  }

  get passwordStrength(): string {

    const password = this.password?.value || '';

    if (!password) {
      return '';
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const score = [
      hasUppercase,
      hasLowercase,
      hasNumber,
      hasSpecial
    ].filter(Boolean).length;

    if (score <= 1) {
      return 'Weak';
    }

    if (score === 2 || score === 3) {
      return 'Medium';
    }

    return 'Strong';
  }

  onSubmit(): void {

    this.submitted = true;

    if (this.registrationForm.valid) {

      console.log(
        'Registration Details:',
        this.registrationForm.value
      );

      alert('Registration successful!');

      this.registrationForm.reset();

      this.submitted = false;
    }
  }
}