import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  doctorCount = 222;
  patientCount = 1080;
  appointmentCount = 800;
  userName = 'A';

  /*changeUserName(){
    this.userName='Admin';
  }*/
 
    //EVENT BINDING & CLOSE POPUP
    showLogoutPopup =false;
    showLogoutSuccess = false;

  logout(){
     this.showLogoutPopup=true;
  }

  cancelLogout() {
    this.showLogoutPopup = false;
   }

 closeSuccessPopup(){
    this.showLogoutSuccess = false;
  }

  confirmLogout() {
  this.showLogoutPopup = false;
  this.showLogoutSuccess = true;
}

  //PROPERTY BINDING
  hospitalLogo = 'assets/hms-logo.svg';

  //TWO0WAY BINDING
  searchText = '';
  
}




