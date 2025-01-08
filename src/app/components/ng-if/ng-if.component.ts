import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  imports: [NgIf],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  toggleDiv:boolean= false

  onToggle(){
    this.toggleDiv =!this.toggleDiv
  }
}
