import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  /* INTERPOLATION */

  doctorCount = 222;
  patientCount = 1080;
  appointmentCount = 800;
  userName = 'A';

  /* PROPERTY BINDING */

  hospitalLogo = 'assets/hms-logo.svg';

  /* TWO WAY BINDING */

  searchText = '';

  /* POPUP CONTROL */

  showLogoutPopup = false;
  showLogoutSuccess = false;

  /* OUTPUT */

  @Output()
  logoutSuccess = new EventEmitter<void>();

  /* OPEN LOGOUT POPUP */

  logout() {
    this.showLogoutPopup = true;
  }

  /* CLOSE LOGOUT POPUP */

  cancelLogout() {
    this.showLogoutPopup = false;
  }

  /* CONFIRM LOGOUT */

  confirmLogout() {
    this.showLogoutPopup = false;
    this.showLogoutSuccess = true;
  }

  /* LOGIN AGAIN */

  loginAgain() {

    this.showLogoutSuccess = false;

    this.logoutSuccess.emit();

  }

}