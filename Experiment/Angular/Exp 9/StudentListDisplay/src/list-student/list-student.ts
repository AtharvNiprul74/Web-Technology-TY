import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentData } from '../Services/student-data';

@Component({
  selector: 'app-list-student',
  imports: [CommonModule],
  templateUrl: './list-student.html',
  styleUrl: './list-student.css',
})

export class ListStudent {
  studentList:any[] = []
  constructor(private studList:StudentData)
  {
    studList.getStudentList()
  }

  
  ngOnInit()
  {
    this.studentList = 
  }
}
