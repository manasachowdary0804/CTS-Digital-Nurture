import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {

  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (isLoggedIn === 'true') {
    return true;
  }

  alert('Please login to access the Student Profile.');

  return false;
};