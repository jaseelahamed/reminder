import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
const option={
  headers:new HttpHeaders()
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  cuserid:any=''
  constructor(private hc:HttpClient) {
    this.cuserid=(localStorage.getItem("currentusid")||'')
   }


  login(usid:any,pswd:any){


    let data={
      usid,
      pswd
    }
    return this.hc.post("http://localhost:3000/login",data)
  }
  register(usid:any, usname: any,pswd: any ) {

    let data={
      usid,
      usname,
      pswd
    }
     return this.hc.post("http://localhost:3000/register",data)

}


getoptions(){
  const token=(localStorage.getItem("token")||'')
  let header=new HttpHeaders()
  if(token){
    console.log(token)
    header=header.append("x-access-token",token)
    option.headers=header
  }
  console.log(option)
  return option
 }

 addReminder(message:any,date:any,time:any){
  let data={
    message,
    date,
    time
    
  }
  return this.hc.post("http://localhost:3000/addReminder",data,this.getoptions())
  // return this.hc.post("http://localhost:3000/reminder",data,this.getoptions())

}
getReminder(){
  const data ={userid:localStorage.getItem('currentusid')}
  return this.hc.post("http://localhost:3000/viewbook",data,this.getoptions())
}

// getTransaction(){
//   let data={
//     acno:JSON.parse(localStorage.getItem("currentAcno")||'')

//   }
//   return this.hc.post("http://localhost:3000/transact",data,this.getoptions())
// }


deletAcc(acc:any){
  return this.hc.delete("http://localhost:3000/delacc"+acc,this.getoptions())
  // delete this.accounts[acc]
  // this.saveDetails()
  // return true
}

}



