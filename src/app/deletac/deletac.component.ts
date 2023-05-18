import { Component,Input,Output,EventEmitter } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-deletac',
  templateUrl: './deletac.component.html',
  styleUrls: ['./deletac.component.css']
})
export class DeletacComponent {
  
  @Input() item:string|undefined
  @Output() onCancel=new EventEmitter
  @Output() onDelete=new EventEmitter()
  constructor(private ds:DataService,private r:Router){}
  Cancel(){
  this.onCancel.emit()
}
deleteacc(){
  this.onDelete.emit(this.item)
}
}
