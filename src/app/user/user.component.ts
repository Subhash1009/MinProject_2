import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userservice } from '../Service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private mynavigation:Router,private ulog:userservice)
  {

  }
  Signin():void
  {
    //alert('Dear User Please use login credentails to login');
    this.mynavigation.navigate(['Userlogin'])
  }
  Signup():void
  {
    //alert('Dear User Please give the required feilds to create a account');
    this.mynavigation.navigate(['Userregister'])
  }
/////////////////////////////////////////////////////////
 
///////////////////////////////////////////////////////////
}
