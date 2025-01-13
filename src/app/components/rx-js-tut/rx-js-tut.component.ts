import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rx-js-tut',
  imports: [],
  templateUrl: './rx-js-tut.component.html',
  styleUrl: './rx-js-tut.component.css'
})
export class RxJsTutComponent {

data:number=0
  constructor(){
    const numbers$:Observable<number>=of(1,2,3,4,5,7)

  numbers$.subscribe((data)=>{
    console.log(data)
    this.data=data
  })
  }
}
