import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    DashboardComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {

  isLoggedIn = false;

  onLoginSuccess() {
    this.isLoggedIn = true;
  }

  onLogoutSuccess() {
    this.isLoggedIn = false;
  }
}