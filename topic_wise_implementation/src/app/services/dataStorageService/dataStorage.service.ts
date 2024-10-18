import { user } from "../model/user";

export class dataStorageService{
    user : user[] = [
        new user("Aswin",true,20,"Indian"),
        new user("Arul",true,25,"American"),
    ]

    createUser(name : string, active : boolean, age : number, nationality : string){
        this.user.push(new user(name,active,age,nationality));
        console.log("User added in admin");
        console.log(this.user);
        
    }

    returnAllUser(){
        return this.user;
    }
}