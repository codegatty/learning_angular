import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy{

  constructor() {
    console.log("constructor")
  }

ngOnInit(): void {
    console.log("init")
}
ngAfterViewInit(): void {
    console.log("view init")
}
ngAfterViewChecked(): void {
    console.log("View checked")
}

ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
}

ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
}

ngOnDestroy(): void {
    console.log("ngOnDestroy")
}

}
