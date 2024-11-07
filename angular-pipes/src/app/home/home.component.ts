import { Component, inject } from '@angular/core';
import { Student } from './Model/student.model';
import { StudentList } from './services/studentList.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  studentList = inject(StudentList);

  students : Student[] = this.studentList.students;

  selectedValue : string = 'All';

  optionChanged(){
    this.students = this.studentList.particularStream(this.selectedValue);
    console.log("Option change Detected");
  }
}
