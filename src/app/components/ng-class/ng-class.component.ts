import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {

  isOn:boolean=false;
  buttonColor:string='bg-red-500'

  toggleButton(){
    this.isOn=!this.isOn
    if(this.isOn)
      this.buttonColor='bg-green-500'
    else  
     this.buttonColor='bg-red-500'
  }
}
