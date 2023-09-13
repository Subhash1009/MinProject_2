import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { userservice } from '../../Service/user.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  constructor(private mynavigation:Router,private ulog:userservice)
  {

  }
  UserLoginData(obj:any):void
  {
    console.log(obj.value);
    this.ulog.signinuser().subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.Username === this.reactiveFormlog.value.Username && a.Password === this.reactiveFormlog.value.Password
      });
      if(user){
        sessionStorage.setItem("Uname", user.Username)
        //alert('Welcome Dear User...!!!!');
        this.mynavigation.navigate(['Userhome']);
      }else{
        alert('Details Not Matched');
      }
      console.log(res);
    },err=>{
      console.log('Data Not Found...!!!!!');
    });
    //this.mynavigation.navigate(['Home']);
  }
  reactiveFormlog = new FormGroup({
    Username: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required)
  })
}
