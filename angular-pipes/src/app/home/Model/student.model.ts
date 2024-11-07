export class Student{
    name : string;
    dob : Date;
    stream : string;
    mark : number;

    constructor(name : string, dob : Date, stream : string, mark : number){
        this.name = name;
        this.dob = dob;
        this.stream = stream;
        this.mark = mark;
    }
}