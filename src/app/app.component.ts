
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

    private router = inject(Router);
  showLogoutPopup = false;
  showLogoutSuccess = false;

  logout() {
    this.showLogoutPopup = true;
  }

  cancelLogout() {
    this.showLogoutPopup = false;
  }

  confirmLogout() {
    this.showLogoutPopup = false;
    this.showLogoutSuccess = true;
  }

  loginAgain() {
  this.showLogoutSuccess = false;
  this.router.navigate(['/login']);
}

get isLoginPage(): boolean {
  return this.router.url === '/login';
}

}
