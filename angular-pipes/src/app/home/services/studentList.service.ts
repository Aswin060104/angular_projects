import { Injectable } from "@angular/core";
import { Student } from "../Model/student.model";


@Injectable({
    providedIn: 'root'
})
export class StudentList {
    students: Student[] = [
        new Student("Aswin", new Date(2004, 0, 6), "CSE", 450),
        new Student("Arul", new Date(2004, 8, 26), "CSE", 468),
        new Student("Sugu", new Date(2003, 7, 17), "ECE", 453),
        new Student("Manoj", new Date(2003, 8, 18), "ECE", 423),
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
}