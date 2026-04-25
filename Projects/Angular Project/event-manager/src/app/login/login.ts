import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../Services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class Login {

  email:string = '';
  password:string = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.auth.login(this.email, this.password)) {
      this.router.navigate(['/']);
    } else {
      alert('Invalid login');
    }
  }
}