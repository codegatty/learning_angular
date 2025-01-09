import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactice-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactice-form.component.html',
  styleUrl: './reactice-form.component.css'
})
export class ReacticeFormComponent {
  userForm:FormGroup=new FormGroup({
    name:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}")]),
    password:new FormControl("",[Validators.required,Validators.minLength(4)])    
  })
  constructor(){
    this.userForm.controls['name'].setValue("value from constructor") //
  }


  onUserSave(){
    console.log(this.userForm.value)
  }
}
