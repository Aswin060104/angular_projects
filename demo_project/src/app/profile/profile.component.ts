import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  title = "Angular Project";

  onclick(){
    alert("Hello");
  }

value = 0;  
  increment(){
    this.value+=1;
  }
  mouse(){
    console.log("Entered");
    
  }
  decrement(){
    this.value--;
  }

  college = "KCET";

  someValue = "";

  codingImage = 'assets/images/diamond.png';

  inputValue: string = '';

  status = true;
  onInput(event: any) {
    this.inputValue = event.target.value;
    console.log(event);
    
  }

  changeStatus(){
    this.status = false;
  }
  
  courses = [
    {name : "Java", limit: 50,img : 'assets/images/diamond.png',details : "This is a Java programming course"},
    {name : "Python", limit: 70, img : 'assets/images/target.png',details : "This is a Python programming course"},
    {name : "Python", limit: 100, img : 'assets/images/sql.png',details : "This is a sql course"}
  ]

  addCourse(name : string, limit : any, img : string, details : string){
    var n : number= Number(limit);
    this.courses.push({name, limit, img, details});
  }

  @Input()
  count : string = "";
}
