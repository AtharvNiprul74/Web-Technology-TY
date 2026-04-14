import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-student',
  imports: [CommonModule],
  templateUrl: './list-student.html',
  styleUrl: './list-student.css',
})
export class ListStudent {
  studentList = JSON.parse(localStorage.getItem("Student Data") || "[]")
}
