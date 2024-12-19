import { Component, inject} from '@angular/core';
import { Student } from './Model/student.model';
import { StudentList } from './services/studentList.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  name : string;
  dob : Date;
  stream : string;
  mark : number;

  studentList = inject(StudentList);

  students : Student[] = this.studentList.students;

  selectedValue : string = 'All';

  enableInputFields : boolean = false;

  optionChanged(){
    this.students = this.studentList.particularStream(this.selectedValue);
    console.log("Option change Detected");
  }

  addUser(executeValue : number){
    if(executeValue == 0)
      this.enableInputFields = true;
    else{
      this.enableInputFields = false;
      this.studentList.addNewStudent(this.name,this.dob,this.stream,this.mark);
      this.students = this.studentList.particularStream(this.selectedValue);
    }
  }
}