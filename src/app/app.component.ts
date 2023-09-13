import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userservice } from './Service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'MinProject_2';
  constructor(private mynavigation:Router,private ulog:userservice)
  {

  }
  
  Signin():void
  {
    alert('Dear User Please use login credentails to login');
    this.mynavigation.navigate(['Userlogin'])
  }
  Signup():void
  {
    alert('Dear User Please give the required feilds to create a account');
    this.mynavigation.navigate(['Userregister'])
  }

}


