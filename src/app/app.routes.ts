
import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
import { LoginComponent } from './login/login.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'patients/:id', component: PatientDetailsComponent },
  { path: 'patients', component: PatientComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

  