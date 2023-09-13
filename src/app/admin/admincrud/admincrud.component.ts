import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userservice } from '../../Service/user.service';
@Component({
  selector: 'app-admincrud',
  templateUrl: './admincrud.component.html',
  styleUrls: ['./admincrud.component.css']

})
export class AdmincrudComponent 
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
  additems()
  {
 
    this.mynavigation.navigate(['Menu'])
  }
  delete(id:any):void
  {
    this.objservice.deletitem(id).subscribe(res=>{
        this.getmenulist();
        alert('Data Deleted Sucessfully');
    },err=>{
      alert('unable to delete the record');
    })
  }

}




