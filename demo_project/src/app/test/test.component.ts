import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  title = "Top Interview Questions";
  display = false;
  register = "Register Course";

  searchedValues = "";

  courses = [
    {id :0, name : "Data Structure and Algorithm", status : false, value: "Register Course" },
    {id :1, name : "Java Programmimg Essenials", status : false, value: "Register Course"},
    {id :2, name : "Python Programmimg", status : false, value: "Register Course"},
  ]
  registerCourse(idNo : number){
    if(this.courses[idNo].status == false){
      this.courses[idNo].status = true;
      this.courses[idNo].value = "Course Registered";
    }
    else {
      this.courses[idNo].status = false;
      this.courses[idNo].value = "Register Course";
    } 
  }
  onclick() {
    this.display = true;
  }
}
