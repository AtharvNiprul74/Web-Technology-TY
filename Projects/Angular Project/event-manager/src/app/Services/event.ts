import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events: any[] = JSON.parse(localStorage.getItem('events') || '[]');

  add(event: any) {
    event.id = Date.now();
    this.events.push(event);
    localStorage.setItem('events', JSON.stringify(this.events));
  }

  getAll() {
    return this.events;
  }

  getById(id: number) {
    return this.events.find(e => e.id == id);
  }
}