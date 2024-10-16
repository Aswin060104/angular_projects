import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchBarValue : string = "" ;

  @Output()
  enteredSearchBarValue : EventEmitter<string> = new EventEmitter<string>();

  onSearch(){
    //this.enteredSearchBarValue.emit(this.searchBarValue);
  }
  onSearchClicked(v : HTMLInputElement){
    this.enteredSearchBarValue.emit(v.value);  
    console.log(v.value);
    
  }
}
