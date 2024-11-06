import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  register(form : NgForm){
    console.log(form);
    console.log(this.profession);
    
  }
  profession : string ;
}
