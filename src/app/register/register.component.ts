import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private ds:DataService,private r:Router,private fb:FormBuilder){}
  regform=this.fb.group({
    usid:['',[Validators.required,Validators.pattern("[0-9]+")]],
    usname:['',[Validators.required,Validators.pattern("[a-zA-Z 0-9]+")]],
    // phone:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
    pswd:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]{8,}")]]
  })

  

  clicked(){
   let usid=this.regform.value.usid
   let usname=this.regform.value.usname
  //  let ph=this.regform.value.phone
   let pswd=this.regform.value.pswd
   if(this.regform.get("usid")?.errors){
    alert("invalid usid")
   }
   if(this.regform.get("usname")?.errors){
    alert("invalid usname")
   }
  //  if(this.regform.get("phone")?.errors){
  //   alert("invalid phone")
  //  }
   if(this.regform.get("pswd")?.errors){
    alert("invalid password")
   }

   if(this.regform.valid){
    let res=this.ds.register(usid,usname,pswd)
    res.subscribe((resp:any)=>{
      if(resp){
      alert(resp.message)
      this.r.navigateByUrl("/log")

    }

  },
  (err:any)=>{
    alert(err.error.message)
  }
  )
    // if(res==true){
    //   alert("registration successful!!!")
    //   this.r.navigateByUrl("")
    // }
    // else{
    //   alert("registration failed")
    // }
}
  else{
    alert("invalid data")
  }

}
}


