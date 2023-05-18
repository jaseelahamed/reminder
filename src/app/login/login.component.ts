import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{DataService}from '../service/data.service'
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private r:Router,private ds:DataService,private fb:FormBuilder){} 
lgform=this.fb.group({
  usid:['',[Validators.required,Validators.pattern("[0-9]+")]],
 
 
  pswd:['',[Validators.required,Validators.pattern("[0-9]+")]]
})


clicked(){
  let usid=this.lgform.value.usid
  
  
  let pswd=this.lgform.value.pswd
let result=this.ds.login(usid,pswd)
result.subscribe((resp:any)=>{
  if(resp){
localStorage.setItem("currentUser",resp.currentUser)
localStorage.setItem("currentusid",resp.currentusid)
localStorage.setItem ("token",(resp.token))
alert(resp.message)
this.r.navigateByUrl("/dashb")
  }
},
(err:any)=>{
  alert(err.error.message)
})
}
}