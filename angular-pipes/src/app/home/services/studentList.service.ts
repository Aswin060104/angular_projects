import { Injectable } from "@angular/core";
import { Student } from "../Model/student.model";


@Injectable({
    providedIn: 'root'
})
export class StudentList {
    students: Student[] = [
        new Student("Aswin", new Date(2004, 0, 6), "CSE", 450),
        new Student("Arul", new Date(2004, 8, 25), "CSE", 468),
        new Student("Sugu", new Date(2003, 7, 18), "ECE", 453),
        new Student("Manoj", new Date(2003, 9, 17), "ECE", 423),
        new Student("Aakash", new Date(2003, 11, 22), "CSE", 491),
    ]

    particularStream(selectedValue: string) {
        if (selectedValue == 'All')
            return this.students;
        else {
            return this.students.filter(ele => {
                return ele.stream === selectedValue;
            });
        }
    }

    addNewStudent(name, dob : Date, stream, mark){
        this.students.push(new Student(name,dob,stream, mark));
    }

    
}