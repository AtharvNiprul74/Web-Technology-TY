import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListStudent } from '../list-student/list-student';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListStudent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('StudentListDisplay');
}
