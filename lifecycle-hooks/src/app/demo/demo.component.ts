import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges, OnInit{
  @Input() message : string = "";
  constructor(){
    console.log("Demo constructor is called");
    
  }
  ngOnChanges(){ // Its is called because of @Input() message 
    console.log("On Change is called");
  }

  ngOnInit(){
    console.log("OnInit lifecycle hook is called");
    
  }
}
