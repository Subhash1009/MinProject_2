import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userservice } from '../../Service/user.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent 
{
  constructor(private mynavigation: Router, private userobj: userservice) {

  }
 
  Additems(obj: any): void {

    //At this point i want to retrive the data given text box in html file
    console.log(obj.value);
    this.userobj.additems(obj.value).subscribe(res => {
      console.log(res);
      alert('Items Added Sucessfully');
      this.mynavigation.navigate(['Admincurd'])
      
    }, err => {

    })
  }
    //this.mynavigation.navigate(['Login']);
    reactiveForm1 = new FormGroup({
      Itemname: new FormControl('', Validators.required),
      Itemprice: new FormControl('', Validators.required)
    })
}

