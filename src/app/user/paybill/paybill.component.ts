import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userservice } from 'src/app/Service/user.service';

@Component({
  selector: 'app-paybill',
  templateUrl: './paybill.component.html',
  styleUrls: ['./paybill.component.css']
})
export class PaybillComponent
{
  session?:any;
  constructor(private mynavigation: Router, private userobj: userservice) {
    this.session = sessionStorage.getItem("Uname")
  }
  logoutUser():void
  {
    sessionStorage.removeItem("Uname");
    this.mynavigation.navigate(['User'])
  }
 
  Addbill(obj: any): void {

    //At this point i want to retrive the data given text box in html file
    console.log(obj.value);
    this.userobj.addbill(obj.value).subscribe(res => {
      console.log(res);
      alert('Thank you user Bill Payment is Done You Can logout....!!!!!!');
      
    }, err => {
      alert('Payment Not Done .!!!!')

    })
    this.userobj.addbill1(obj.value).subscribe(res => {
      console.log(res);
      
    }, err => {

    })
  }
    reactiveForm1 = new FormGroup({
      Name: new FormControl('', Validators.required),
      Billamount: new FormControl('', Validators.required),
      Billdate: new FormControl('', Validators.required)
    })
    temp:any = [];
  msg?:any;
    getcart()
    {
      this.userobj.getcartdata().subscribe(res => {
        console.log(res);
        this.temp = res;
      },err=>
      {
        console.log('Data Not loaded..!!!');
        this.msg = 'Data not loaded..!!!!'
      })
    }
    deletecart(id:any):void
    {
      
      this.userobj.deletecartitems(id).subscribe(res=>{
          alert('Data Deleted Sucessfully....!!!!!!\nPlease referesh the page');
          this.getcart();
      },err=>{
        alert('unable to delete the record');
      })
    }
}
