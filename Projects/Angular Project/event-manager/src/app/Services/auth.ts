import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  users = JSON.parse(localStorage.getItem('users') || '[]');

  register(user: any) {
    user.id = Date.now();
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  login(email: string, password: string) {
    const user = this.users.find((u: any) => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  getUser() {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}