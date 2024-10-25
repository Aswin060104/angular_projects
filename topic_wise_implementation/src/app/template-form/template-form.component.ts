import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  

  register(form : any){
    console.log(form);
    
  }
}
