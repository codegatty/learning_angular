import { Component } from '@angular/core';
import { InputOutputChildComponent } from '../input-output-child/input-output-child.component';

@Component({
  selector: 'app-input-output',
  imports: [InputOutputChildComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css'
})
export class InputOutputComponent {
  childVal:string=""
  getValue(val:string){
    console.log(val)
    this.childVal=val;
  }
}
