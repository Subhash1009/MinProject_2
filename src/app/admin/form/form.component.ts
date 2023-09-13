import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userservice } from '../../Service/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private mynavigation: Router, private userobj: userservice) {

  }
 
  registerData(obj: any): void {

    //At this point i want to retrive the data given text box in html file
    console.log(obj.value);
    this.userobj.createuser(obj.value).subscribe(res => {
      console.log(res);
      alert('user Added Sucessfully');
      this.mynavigation.navigate(['Usercurd'])
      
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
