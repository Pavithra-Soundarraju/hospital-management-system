import { Component, EventEmitter, Output , inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  private router = inject(Router);



  email = '';
  password = '';

  @Output()
  loginSuccess = new EventEmitter<void>();

  login() {

    console.log(this.email);
    console.log(this.password);

    this.loginSuccess.emit();
  
  this.router.navigate(['/dashboard']);

  }
}
