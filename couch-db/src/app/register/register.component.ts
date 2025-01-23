import { Component, inject } from '@angular/core';
import { CouchDbService } from '../services/couchdb.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userName : string = "";
  email : string = "";
  password : string = "";

  dbConnector : CouchDbService = inject(CouchDbService);
  count : number = 1000;

  register(){
    const customerDetails : {_id : string, data : {userName : string, email : string, password : string}} = {
      _id : `user_${this.userName}`,
      data : {
        userName : this.userName,
        email : this.email,
        password : this.password
      }
    }

    this.dbConnector.register(customerDetails).subscribe({
      next(response){
        alert("Added Successfully");
      },
      error(error){
        alert("Error while adding new customer");
      }
    });
  }
}
