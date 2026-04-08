import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "../home/home"
import { AddStudent } from "../add-student/add-student"
import { ListStudent } from '../list-student/list-student';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, AddStudent,ListStudent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('First-Angular-App');
}
