import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/:id', component: StudentDetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'error', component: ErrorComponent },
];
