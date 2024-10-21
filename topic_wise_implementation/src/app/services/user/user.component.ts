import { Component, Inject } from '@angular/core';
import { dataStorageService } from '../dataStorageService/dataStorage.service';
import { ds } from 'src/app/app.module';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[dataStorageService]

})
export class UserComponent {
  name : string = "";
  active : boolean = true;
  age : number = 0;
  nationality : string = "indian";

  constructor( private dataServiceUser : dataStorageService){

  }
  

  addUser(){
    this.dataServiceUser.createUser( this.name, this.active, this.age, this.nationality);
    this.name = "";
    this.age = 0; 
    this.active = false;
    this.nationality = "";
    console.log("User added");
  }
}
