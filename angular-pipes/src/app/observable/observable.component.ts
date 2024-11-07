import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {

  data : number[] = [];

  observable = new Observable( (observer) => {
    setTimeout(() => { observer.next(1); }, 1000); 
    setTimeout(() => { observer.next(2); }, 2000); 
    setTimeout(() => { observer.next(3); }, 3000); 
    setTimeout(() => { observer.next(4); }, 4000); 
    setTimeout(() => { observer.next(5); }, 5000); 
    setTimeout(() => { observer.complete(); }, 5000); 
  });

  getAsyncData(){
    this.ofObservable.subscribe((val : number) => {

      this.data.push(val);
      console.log(val);
      
    }, ()=>{}, () => {
      alert("All data are received")
    })  
  }

  ofObservable = of(...[1,2,3],["Aswin","Raja"]);

}
