import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule,NgClass],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  showDiv:boolean = true;
  engineStatus:boolean=false
  colors:string[]=['bg-yellow-400','bg-yellow-500','bg-yellow-600','bg-yellow-700']

  toggleDiv(){
    this.showDiv =!this.showDiv;
  }

}
