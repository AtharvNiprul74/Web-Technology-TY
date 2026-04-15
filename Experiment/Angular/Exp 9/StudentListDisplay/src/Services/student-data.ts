import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentData {
  studentList:any[] = [
    {name:"Atharv",age:20,course:"CSE"},
    {name:"Soham",age:23,course:"CSE AI/ML"}
  ]
  getStudentList()
  {
    return this.studentList
  }
}
