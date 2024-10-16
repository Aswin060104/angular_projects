import { Component, Input } from '@angular/core';
import { Registered } from '../../services/registered.service'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input()
  radioButtonValue : string = "";

  @Input()
  searchBarValue : string = "";

  @Input()
  Allcourses : {id : number, name : string, available : boolean, imageLocation : string, description : string, reference : string}[] = [];

  onRegister(name : string){
    var r = new Registered();
    r.onRegister(name);
  }
}
