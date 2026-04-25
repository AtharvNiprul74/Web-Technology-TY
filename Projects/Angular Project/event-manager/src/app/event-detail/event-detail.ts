import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../Services/event';
import { RegistrationService } from '../Services/registration';
import { AuthService } from '../Services/auth';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  templateUrl: './event-detail.html'
})
export class EventDetail {

  event: any;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private reg: RegistrationService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.event = this.eventService.getById(+id);
    this.user = this.auth.getUser();
  }

  register() {
    if (!this.user) {
      alert('Login first');
      return;
    }

    this.reg.register(this.event.id, this.user.id);
    alert('Registered!');
  }
}