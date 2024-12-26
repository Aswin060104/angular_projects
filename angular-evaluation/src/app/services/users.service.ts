export class UserDetails{
    currentUser : string = "";
    
    registeredUsers : { name : string, password : string, loginCount: number}[] = [
        {name : "Aswin", password : "aswin", loginCount : 5},
        {name : "Arul", password : "arul",  loginCount : 7},
    ];

    addNewUser(name : string, password : string){
        this.registeredUsers.push({name : name, password : password, loginCount : 1});
    }
}