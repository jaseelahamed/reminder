import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.css']
})
export class ViewlistComponent {
  
  reminder:any
  constructor(private ds:DataService,private r:Router){
    ds.getReminder().subscribe((res:any)=>{
      console.log(res)
      this.reminder=res.data
    }),
    (err:any)=>{
      console.log(err.error.message)
    }
    
    // console.log(this.reminder)
  }
}
