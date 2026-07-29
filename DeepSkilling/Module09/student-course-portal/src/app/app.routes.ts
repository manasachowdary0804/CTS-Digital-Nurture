import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { CourseListComponent } from './pages/course-list/course-list';
import { CourseDetailComponent } from './pages/course-detail/course-detail';
import { StudentProfileComponent } from './pages/student-profile/student-profile';
import { EnrollComponent } from './pages/enroll/enroll';
import { NotFoundComponent } from './pages/not-found/not-found';

import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'courses',
    component: CourseListComponent
  },

  {
    path: 'courses/:id',
    component: CourseDetailComponent
  },

  {
    path: 'profile',
    component: StudentProfileComponent,
    canActivate: [authGuard]
  },

  {
    path: 'registration',
    loadComponent: () =>
      import('./pages/registration/registration')
        .then(m => m.RegistrationComponent)
  },

  {
    path: 'enroll',
    component: EnrollComponent
  },

  {
    path: 'not-found',
    component: NotFoundComponent
  },

  {
    path: '**',
    redirectTo: 'not-found'
  }

];