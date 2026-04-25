import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink,Router } from '@angular/router';
import { AuthService } from './Services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('event-manager');
  constructor(private auth:AuthService , private router:Router)
  {

  }

  logout() {
    this.auth.logout();  
    alert('Logged out');     
    this.router.navigate(['/login']); 
  }
}
