import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { userservice } from '../Service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent 
{
  constructor(private mynavigation:Router,private ulog:userservice)
  {

  }
  LoginData(obj:any):void
  {
    console.log(obj.value);
    this.ulog.signinadmin().subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.Username === this.reactiveFormlog.value.Username && a.Password === this.reactiveFormlog.value.Password
      });
      if(user){
        sessionStorage.setItem("Uname", user.Username)
        
        this.mynavigation.navigate(['Adminhome']);
      }else{
        alert('Details Not Matched');
      }
      console.log(res);
    },err=>{
      console.log('Data Not Found...!!!!!');
    });
  }
  reactiveFormlog = new FormGroup({
    Username: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required)
  })
}



