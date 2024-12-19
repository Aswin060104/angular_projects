import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';

  @ViewChild('validationForm')
  form! : NgForm;
  
  showLogin : boolean = false;

  login(){
    this.showLogin = true;
    console.log(this.showLogin);
  }

  register(){
    console.log(this.form);
    this.showLogin = false;
  }
}