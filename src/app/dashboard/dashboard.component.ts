
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  /* INTERPOLATION */

  @Input() doctorCount!: number;
  @Input() patientCount!: number;
  @Input() appointmentCount!: number;

  userName = 'A';

  /* PROPERTY BINDING */

  hospitalLogo = 'assets/hms-logo.svg';

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
