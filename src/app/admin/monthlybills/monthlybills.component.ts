import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userservice } from 'src/app/Service/user.service';

@Component({
  selector: 'app-monthlybills',
  templateUrl: './monthlybills.component.html',
  styleUrls: ['./monthlybills.component.css']
})
export class MonthlybillsComponent
{
  session?:any;
  constructor(private mynavigation:Router,private ulog:userservice, private objservice:userservice)
  {
    this.session = sessionStorage.getItem("Uname")
  }
  usercrud():void
  {
    //alert('Dear Admin You are performing CRUD operations in User');
    this.mynavigation.navigate(['Usercurd'])
  }
  admincrud():void
  {
    //alert('Dear Admin You are performing CRUD operations in Admin');
    this.mynavigation.navigate(['Admincurd'])
  }
  todaybills():void
  {
    //alert('Dear Admin You are viewing today bills at your restaurant');
    this.mynavigation.navigate(['Todaybill'])
  }
  monthlybills():void
  {
    //alert('Dear Admin You are viewing this month bills at your restaurant');
    this.mynavigation.navigate(['Monthlybills'])
  }
  logoutUser():void
  {
    sessionStorage.removeItem("Uname");
    this.mynavigation.navigate(['Admin'])
  }
  temp:any = [];
  msg?:any;
  //Need to apply DI for user service class 
  getmonthlybills()
  {
    this.objservice.getmonthlybills().subscribe(res => {
      console.log(res);
      this.temp = res;
    },err=>
    {
      console.log('Data Not loaded..!!!');
      this.msg = 'Data not loaded..!!!!'
    })
  }
 


}
