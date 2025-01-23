import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { filter, from, fromEvent, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements AfterViewInit{

  @ViewChild('dataButton') dataButton : ElementRef;

  data : number[] = [];

  buttonObs;

  observable = new Observable( (observer) => {
    setTimeout(() => { observer.next(1); }, 1000); 
    setTimeout(() => { observer.next(2); }, 2000); 
    setTimeout(() => { observer.next(3); }, 3000); 
    setTimeout(() => { observer.next(4); }, 4000); 
    setTimeout(() => { observer.next(5); }, 5000); 
    setTimeout(() => { observer.complete(); }, 5000); 
  });

  getAsyncData(){
    // this.fromObservable.subscribe((val : number) => {

    //   this.data.push(val);
    //   //console.log(val);
      
    // }, ()=>{}, () => {
    //   //alert("All data are received")
    // })  

    this.ofObservable.subscribe({
      next:(value)=>{
        console.log(value);
      }, 
      error(){
      }, 
      complete(){
        
      }
    })
  }

  ofObservable = of(...[1,2,3],["Aswin","Raja"]);

  fromObservable = from([1,2,3,4,5]).pipe(
    filter( (e) => {
    return e % 1 == 0;
  }));

  count = 0;

  buttonClicked(){
    this.buttonObs = fromEvent(this.dataButton.nativeElement,"click")
    
    this.buttonObs.subscribe( () => {
      console.log("Hi");
      this.createDiv();
    })
  }

  ngAfterViewInit(){
    //this.buttonClicked();
  }
  
  createDiv(){
    let div = document.createElement('div');
    div.innerText = 'Item ' + this.count++;

    div.className = "container";

    document.getElementById('contentDiv').className = "container";

    document.getElementById("contentDiv").appendChild(div);
  }
}
