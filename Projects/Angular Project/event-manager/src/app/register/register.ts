import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../Services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html'
})
export class Register {

  user: any = {
    email:'',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.user);
    alert('Registered successfully');
    this.router.navigate(['/login']);
  }
}