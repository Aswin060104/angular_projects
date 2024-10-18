export class user{
    user : string = "";
    active : boolean = true;
    age : number = 0;
    nationality : string = "";

    constructor(user : string, active : boolean, age : number, nationality : string){
        this.user = user;
        this.active = active;
        this.age = age;
        this.nationality = nationality;
    }
}