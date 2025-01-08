import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName:string = 'data-binding';
  rollNo:number=101
  isActive:boolean = false
  currentDate:Date = new Date()

  constructor(){
    console.log(this.firstName)
   
  }

  showMessage(){
alert('welcome to the world of angular')
  }
}
