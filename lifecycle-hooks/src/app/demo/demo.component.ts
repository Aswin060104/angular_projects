import { AfterContentChecked, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges, OnInit, AfterContentChecked{
  @Input() message : string = "";

  @ViewChild('demo_p') demoChild : ElementRef;

  @ContentChild('para') pareTem : ElementRef;
  
  constructor(){
    console.log("Demo constructor is called");
    //console.log("value : ", this.message);
  }
  ngOnChanges(){ // Its is called because of @Input() message 
    console.log("On Change is called");
    //console.log("value : ", this.message);
    
  }

  ngOnInit(){
    console.log("OnInit lifecycle hook is called");
    console.log(this.demoChild);
    
    //console.log("value : ", this.message);
  }

  ngDoCheck(){
    console.log("DoCheck is");
    //console.log("value : ", this.message);
    //console.log(this.pareTem);
    console.log(this.demoChild);
    
  }

  ngAfterContentInit(){
    console.log("After Content Init hook");
    //console.log(this.demoChild.nativeElement.value);
    
  }

  ngAfterContentChecked(){
    console.log("After Content Checked Hook");
    console.log(this.demoChild.nativeElement.value);
    
  }
}
