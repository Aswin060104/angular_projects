import { Component, Input } from '@angular/core';

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
}
