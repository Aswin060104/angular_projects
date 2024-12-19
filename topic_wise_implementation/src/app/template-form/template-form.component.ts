import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  @ViewChild('registrationForm') 
  form : NgForm;

  register(){
    console.log(this.form);
    console.log(this.form.controls['profession']);


    // this.form.setValue({
    //   firstName : "Aswin",
    //   lastName : "T",
    //   email : "trajaaswin@gmail.com",
    //   Profession : "staff",
    //   address : "123",
    //   more-details : {

    //   }
    // });

    this.form.form.patchValue({
      firstName : "Aswin"
    })
    
  }
  profession : string ;

  
}
