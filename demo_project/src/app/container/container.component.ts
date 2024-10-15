import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  allCourses = [
    { name : "Java Fundamentals", registered : 1234},
    { name : "Python Fundamentals", registered : 420},
    { name : "SQ Fundamentals", registered : 734},
  ];


  courses = [
    {id :0, name : "Data Structure and Algorithm course", status : false, value: "Register Course" },
    {id :1, name : "Java Programmimg Essenials course", status : false, value: "Register Course"},
    {id :2, name : "Python Programmimg course", status : false, value: "Register Course"},
  ]
}