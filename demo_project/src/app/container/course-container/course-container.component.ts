import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-container',
  templateUrl: './course-container.component.html',
  styleUrls: ['./course-container.component.css']
})
export class CourseContainerComponent {
  
  title = "Top Interview Questions";
  display = true;
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
    if(this.allCourses[idNo].status == false){
      this.allCourses[idNo].status = true;
      this.allCourses[idNo].value = "Course Registered";
    }
    else {
      this.allCourses[idNo].status = false;
      this.allCourses[idNo].value = "Register Course";
    } 
  }

  onclick() {
    this.display = true;
  }

  changeView(s : string){
    this.change = s;
  }

  change = "";

  @Input()
  allCourses : { id : number, name : string, status : boolean, value : string }[] = [];
}
