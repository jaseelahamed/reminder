import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})

export class DashComponent {
  usid:any=''
  constructor(
    private r: Router,
    private ds: DataService,
    private fb: FormBuilder
  ) {}

  rmform = this.fb.group({
    message: ['', [Validators.required]],
    date: ['', [Validators.required]],
    time: ['', [Validators.required]],
  });
  clicked() {
    
    let message = this.rmform.value.message;
    let date = this.rmform.value.date;
    let time = this.rmform.value.time;

    console.log(message, date, time);
    let result = this.ds.addReminder(message,date,time);
    result.subscribe(
      (resp: any) => {
        alert(resp.message);
        this.r.navigateByUrl('/v');
      },
      (err: any) => {
        alert(err.error.message);
      }
    );
  }

  logout(){
    this.r.navigateByUrl("")
    localStorage.removeItem("currentusid")
    localStorage.removeItem("currentUser")
  }
  deleteaccount(event:any){
    console.log(event)
    this.ds.deletAcc(event).subscribe(res=>{
      if(res){
      }
      localStorage.removeItem("currentusid")
      localStorage.removeItem("currentUser")
      localStorage.removeItem("token")
      this.r.navigateByUrl("")
    })
  }
  
  deleteacc(){
    this.usid=JSON.parse(localStorage.getItem("currentusid")||'')
    console.log(this.usid)
  }
  canceldelete(){
    this.usid=''
  }
}
