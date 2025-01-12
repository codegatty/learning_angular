import { Component,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output-child',
  imports: [],
  templateUrl: './input-output-child.component.html',
  styleUrl: './input-output-child.component.css'
})
export class InputOutputChildComponent {
@Input()
label:string=""

@Output()
valueChange = new EventEmitter<string>();

onChnageValue(event:Event){
  const inputValue = (event.target as HTMLInputElement).value;
  this.valueChange.emit(inputValue)
  console.log('Input value:', inputValue);
}

}