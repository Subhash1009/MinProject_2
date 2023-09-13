import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userservice } from '../../Service/user.service';
@Component({
  selector: 'app-usercrud',
  templateUrl: './usercrud.component.html',
  styleUrls: ['./usercrud.component.css']
})
export class UsercrudComponent 
{
  constructor(private mynavigation:Router,private ulog:userservice, private objservice:userservice)
  {

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
  getcustomerdetails()
  {
    
    this.objservice.getcustomerdata().subscribe(res => {
      console.log(res);
      this.temp = res;
    },err=>
    {
      console.log('Data Not loaded..!!!');
      this.msg = 'Data not loaded..!!!!'
    })
  }
  addcustomer():void
  {
    //alert('You are adding book details in Completed');
    this.mynavigation.navigate(['Form']);    
  }
  delete(id:any):void
  {
    this.objservice.deletecustomer(id).subscribe(res=>{
        this.getcustomerdetails();
        alert('Data Deleted Sucessfully');
    },err=>{
      alert('unable to delete the record');
    })
  }

}



