import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  
  @Output()
  changeSelectedRadioButton : EventEmitter<string> = new EventEmitter<string>();

  selectedRadioButton : string= "all";

  onChangeSelectedRadioButton(){
    
    this.changeSelectedRadioButton.emit(this.selectedRadioButton);
    console.log(this.selectedRadioButton);
  }
}
