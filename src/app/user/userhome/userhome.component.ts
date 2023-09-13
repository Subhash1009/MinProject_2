import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userservice } from '../../Service/user.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
  session?:any;
  constructor(private mynavigation:Router,private ulog:userservice)
  {
    this.session = sessionStorage.getItem("Uname")
  }
  Itemslist():void
  {
    //alert('You are opening Items list in the Restaurant');
    this.mynavigation.navigate(['Items'])
  }
  Cart():void
  {
    //alert('Dear Admin You are performing CRUD operations in Admin');
    this.mynavigation.navigate(['Cart'])
  }
  logoutUser():void
  {
    sessionStorage.removeItem("Uname");
    this.mynavigation.navigate(['User'])
  }
/////////////////

//////////////////////////

}
