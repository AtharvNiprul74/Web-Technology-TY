import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  imports: [FormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudent {
  name:string = ""
  age:number = 0
  course:string = ""

  addStudent = () => {
    const getStudentData = JSON.parse(localStorage.getItem("Student Data") || "[]")

    const studentData = {
      name:this.name,
      age:this.age,
      course:this.course
    }

    getStudentData.push(studentData)

    localStorage.setItem("Student Data",JSON.stringify(getStudentData))

    this.name=""
    this.age=0
    this.course=""
  }
}
