import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TUser } from '../../types/types';
@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})


export class TemplateFormComponent {
 user:TUser={
  name:'',
  email:'',
  password:''
 }

 onSubmit(){
   console.log(this.user);
 }
}
