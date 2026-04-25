import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventService } from '../Services/event';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-event.html',
  styleUrl: './add-event.css',
})
export class AddEvent {

  event: any = {
    title: '',
    club: '',
    date: '',
    description: ''
  };

  constructor(private eventService: EventService) {}

  add() {
    this.eventService.add(this.event);

    this.event = {
      title: '',
      club: '',
      date: '',
      description: ''
    };

    console.log("Event Added");
  }
}