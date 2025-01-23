import { Component, inject } from '@angular/core';
import { CouchDbService } from '../services/couchdb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginName: string = "";
  loginPassword: string = "";

  dbConnector: CouchDbService = inject(CouchDbService);

  login() {
    this.dbConnector.getAllUsers().subscribe({
      next : (response)=>{
        console.log(response);
        console.log(this.loginName + " " + this.loginPassword);
        response.rows.forEach((e: {
          doc:{ data : { userName: string, email: string, password: string } },
           id: string
          _rev: string
          key: string
          value: { rev: string }
        }) => {
          if (e.doc.data.userName === this.loginName && e.doc.data.password === this.loginPassword)
            console.log("Success");
          else
            console.log(e.doc.data.userName + " "+ e.doc.data.password);
            
        }

      );
      },
      error: (error) => {
        alert("Error while fetching data")
      }
    });
  }

}
