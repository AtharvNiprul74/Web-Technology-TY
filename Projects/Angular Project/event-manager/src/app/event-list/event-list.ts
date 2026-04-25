import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../Services/event';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './event-list.html'
})
export class EventList {

  events: any[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getAll();
  }
}