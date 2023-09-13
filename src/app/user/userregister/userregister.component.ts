import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userservice } from '../../Service/user.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {
  constructor(private mynavigation: Router, private userobj: userservice) {

  }
 
  registerData(obj: any): void {

    //At this point i want to retrive the data given text box in html file
    console.log(obj.value);
    this.userobj.createuser(obj.value).subscribe(res => {
      console.log(res);
      //alert('Registration Sucessfull.......Please use login credentails to login');
      this.mynavigation.navigate(['Userlogin'])
      
    }, err => {

    })
  }
    //this.mynavigation.navigate(['Login']);
    reactiveForm1 = new FormGroup({
     Username: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
      Phonenumber: new FormControl('', Validators.required),
      //Address: new FormControl('', Validators.required),
      Name: new FormControl('', Validators.required),
      //Age: new FormControl('', Validators.required)
    })
}
