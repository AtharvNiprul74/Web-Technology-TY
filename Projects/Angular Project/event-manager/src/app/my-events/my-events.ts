import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../Services/event';
import { RegistrationService } from '../Services/registration';
import { AuthService } from '../Services/auth';

@Component({
  selector: 'app-my-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-events.html'
})
export class MyEvents {

  myEvents: any[] = [];

  constructor(
    private eventService: EventService,
    private reg: RegistrationService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    const user = this.auth.getUser();

    if (!user) {
      alert('Login first');
      return;
    }

    const regs = this.reg.getUserRegs(user.id);
    const allEvents = this.eventService.getAll();

    this.myEvents = allEvents.filter(e =>
      regs.some(r => r.eventId === e.id)
    );
  }
}