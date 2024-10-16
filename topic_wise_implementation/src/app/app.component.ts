import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'output_decorator';


  searchBarValue : string = "";
  
  enteredSearchBarValue(value : any){
    this.searchBarValue = value;
    console.log(value); 
  }
}
