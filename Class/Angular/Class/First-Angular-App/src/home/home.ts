import { Component } from '@angular/core';

@Component({
  selector: 'app-home', //name of component
  imports: [], // for this component if any 
  templateUrl: './home.html', // html path
  styleUrl: './home.css', // css path
})

export class Home {
  fname = "Atharv"
}
