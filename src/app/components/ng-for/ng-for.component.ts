import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  elements:number[]=[]

  addElement(){
    this.elements.push(1)
  }
  
  removeElement(){
    this.elements.pop()
  }
}
