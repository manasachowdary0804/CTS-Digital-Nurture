import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

export function passwordStrengthValidator(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    const password = control.value;

    if (!password) {
      return null;
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const isStrong =
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialCharacter;

    return isStrong
      ? null
      : { passwordStrength: true };
  };
}