import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home', //name of component
  imports: [FormsModule], // for this component if any //needed to use ngModal
  templateUrl: './home.html', // html path
  styleUrl: './home.css', // css path
})

export class Home {
  fname:String = "Atharv"
  age:Number = 20
  course:String = "CSE"

  changeName = () => {
    this.course = "CSE AI/ML"
  }
}
