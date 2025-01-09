
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-api-call1',
  imports: [],
  templateUrl: './api-call1.component.html',
  styleUrl: './api-call1.component.css'
})
export class ApiCall1Component {

  constructor(private http:HttpClient){
  } 
  loading:boolean=false
  error:null|string=null
  userList:any=[]

  getUser(){
    this.loading=true
    this.http.get("https://json-placeholder.mock.beeceptor.com/users").subscribe({
      next:(data)=>{
        this.loading=false
        this.userList=data
      },
      error:(err)=>{this.loading=false
        this.error=err.message
      } 
    })
  }
}
