import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  courses = [
    { id : 0, name : "Java Programming", available : true, imageLocation : "assets/java.png", description : "This is java course", reference : "java"},
    { id : 1, name : "Python Programming", available : true, imageLocation : "assets/python.png", description : "This is python course", reference : "python" },
    { id : 2, name : "Java Script Programming", available : true, imageLocation : "assets/js.png", description : "This is java script course", reference : "js"},
    { id : 2, name : "Data Structures in java ", available : true, imageLocation : "assets/java.png", description : "This is java script course", reference : "java"},
    { id : 2, name : "Data Structures in Python ", available : true, imageLocation : "assets/python.png", description : "This is java script course", reference : "python"}
  ]

  radioValue : string = "all";
  onFilterChange(value : any){
    this.radioValue = value; 
  }

  @Input()
  searchBarValue : string = "";

}
