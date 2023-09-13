import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userservice } from 'src/app/Service/user.service';

@Component({
  selector: 'app-cartform',
  templateUrl: './cartform.component.html',
  styleUrls: ['./cartform.component.css']
})
export class CartformComponent {

  constructor(private mynavigation: Router, private userobj: userservice) {

  }
 
  Additems(obj: any): void {

    //At this point i want to retrive the data given text box in html file
    console.log(obj.value);
    this.userobj.addcartitems(obj.value).subscribe(res => {
      console.log(res);
      alert('Items Added Sucessfully');
      
    }, err => {

    })
  }
    //this.mynavigation.navigate(['Login']);
    reactiveForm1 = new FormGroup({
      Itemname: new FormControl('', Validators.required),
      Itemprice: new FormControl('', Validators.required),
      Itemquantity: new FormControl('', Validators.required),
      Totalitemprice: new FormControl('', Validators.required)
    })
    temp:any = [];
    msg?:any;
    getmenulist()
    {
      this.userobj.getmenudata().subscribe(res => {
        console.log(res);
        this.temp = res;
      },err=>
      {
        console.log('Data Not loaded..!!!');
        this.msg = 'Data not loaded..!!!!'
      })
    }
    viewcart():void{
      this.mynavigation.navigate(['Cart'])
    }
}
