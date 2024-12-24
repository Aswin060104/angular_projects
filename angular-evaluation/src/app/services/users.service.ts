export class UserDetails{
    currentUser : string = "";
    
    registeredUsers : { name : string, password : string}[] = [
        {name : "Aswin", password : "aswin"},
        {name : "Arul", password : "arul"},
    ];

    addNewUser(name : string, password : string){
        this.registeredUsers.push({name : name, password : password});
    }
}