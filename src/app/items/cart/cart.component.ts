import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userservice } from 'src/app/Service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent 
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
  getcart()
  {
    this.objservice.getcartdata().subscribe(res => {
      console.log(res);
      this.temp = res;
    },err=>
    {
      console.log('Data Not loaded..!!!');
      this.msg = 'Data not loaded..!!!!'
    })
  }
  addtocart(): void 
  {
    this.mynavigation.navigate(['Cartform'])
  }
  deletecart(id:any):void
  {
    
    this.objservice.deletecartitems(id).subscribe(res=>{
        alert('Data Deleted Sucessfully....');
        this.getcart();
    },err=>{
      alert('unable to delete the record');
    })
  }
  Paybill():void
  {
    this.mynavigation.navigate(['paybill'])
  }
}
