import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userservice } from '../Service/user.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent 
{
  session?:any;
  constructor(private mynavigation:Router,private ulog:userservice, private objservice:userservice)
  {
    this.session = sessionStorage.getItem("Uname")
  }
  Itemslist():void
  {
    this.mynavigation.navigate(['Items'])
  }
  Cart():void
  {
    this.mynavigation.navigate(['Cart'])
  }
  logoutUser():void
  {
    sessionStorage.removeItem("Uname");
    this.mynavigation.navigate(['User'])
  }
  temp:any = [];
  msg?:any;
  getmenulist()
  {
    this.objservice.getmenudata().subscribe(res => {
      console.log(res);
      this.temp = res;
    },err=>
    {
      console.log('Data Not loaded..!!!');
      this.msg = 'Data not loaded..!!!!'
    })
  }
}