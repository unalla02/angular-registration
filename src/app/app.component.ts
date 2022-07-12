import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'registration-app';
  myform! : any;

  ngOnInit() {
    this.myform = new FormGroup({
      firstName : new FormControl(''),
      npiNumber  : new FormControl(''),
      businessAddress  : new FormControl(''),
      telephoneNumber  : new FormControl(''),
      emailAddress  : new FormControl('')

    })
   
  }

  onSubmit() {
    //Saving the Registration details into Angular Local Storage. Under Developer Tools/Applicaiton/LocalStorage --Choose the URL we can see all the registered details.
    console.log('event is ' + uuid.v4())
    localStorage.setItem(uuid.v4() , JSON.stringify(this.myform.value))
    this.myform.reset();
  }
}
