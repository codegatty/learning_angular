import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-link-signal',
  imports: [],
  templateUrl: './link-signal.component.html',
  styleUrl: './link-signal.component.css'
})
export class LinkSignalComponent {
  firstName=signal<string>("rajith")
  lastName=signal<string>("gatty")
  fullName=linkedSignal({
    source:this.firstName,
    computation:(newOption,previous)=>{
      const full=newOption+" "+this.lastName()
      return full
    }
  })
  changeValue(){
  this.firstName.set("bajith")
  
  }
}
