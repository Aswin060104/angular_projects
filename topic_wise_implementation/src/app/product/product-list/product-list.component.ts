import { Component, Input } from '@angular/core';
import { Registered } from '../../services/registered.service'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers : [Registered]
})
export class ProductListComponent {
  @Input()
  radioButtonValue : string = "";

  @Input()
  searchBarValue : string = "";

  @Input()
  Allcourses : {id : number, name : string, available : boolean, imageLocation : string, description : string, reference : string}[] = [];


  constructor( private register : Registered){ // to avoid tight coupling

  }

  displayCourseCard(){
    return this.Allcourses.some( course => course.name.toLowerCase().includes(this.searchBarValue));
  }

  onRegister(name : string){ 
    this.register.onRegister(name);
  }
}
