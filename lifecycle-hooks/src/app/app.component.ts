import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string = 'Project';

  messageParent : string = "";

  constructor(){
    console.log("App constructor is called");
  }

  updateMessage( message : HTMLInputElement){
    this.messageParent = message.value;
  }
}
