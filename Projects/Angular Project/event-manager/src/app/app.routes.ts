import { Routes } from '@angular/router';
import { EventList } from './event-list/event-list';
import { AddEvent } from './add-event/add-event';
import { EventDetail } from './event-detail/event-detail';
import { Login } from './login/login';
import { Register } from './register/register';
import { MyEvents } from './my-events/my-events';

export const routes: Routes = [
  { path: '', component: EventList },
  { path: 'add', component:  AddEvent},
  { path: 'event/:id', component: EventDetail },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'my', component: MyEvents }
];