import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  regs: any[] = JSON.parse(localStorage.getItem('regs') || '[]');

  register(eventId: number, userId: number) {
    this.regs.push({ eventId, userId });
    localStorage.setItem('regs', JSON.stringify(this.regs));
  }

  getUserRegs(userId: number) {
    return this.regs.filter(r => r.userId === userId);
  }
}