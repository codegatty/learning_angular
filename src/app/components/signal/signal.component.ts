import { ChangeDetectionStrategy, Component,signal } from '@angular/core';


@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
firstName=signal("rajith")
lastName=signal<string>("gatty")
thirdName:string="Hosamane "

constructor(){
  setTimeout(()=>{
    this.thirdName="rajesh"
    this.firstName.set("manjith")
  },5000)
}
}
