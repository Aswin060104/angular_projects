import { Component, inject } from '@angular/core';
import { CouchDbService } from '../services/couchdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginName: string = "";
  loginPassword: string = "";

  dbConnector: CouchDbService = inject(CouchDbService);
  router : Router = inject(Router);

  login() {
    this.dbConnector.getAllUsers().subscribe({
      next : (response)=>{
        let status : boolean = false;
        console.log(response);
        console.log(this.loginName + " " + this.loginPassword);
        response.rows.forEach((e: {
          doc:{ data : { userName: string, email: string, password: string } },
           id: string
          _rev: string
          key: string
          value: { rev: string }
        }) => {
          // console.log(e);
          if (e.id === this.loginName && e.doc.data.password === this.loginPassword){
            console.log("Success");
            alert("Successfully logged as Customer");
            status = true; 
          }
          else
            console.log(e.doc.data.userName + " "+ e.doc.data.password);
        });
        if(this.loginName === "admin" && this.loginPassword === "admin@123") {
          console.log("logged");
          this.router.navigate(['admin']);
        }
      console.log(status);
      

      },
      error: (error) => {
        alert("Error while fetching data")
      }
    });
  }

  navigateRegistration(){
    console.log("Navigating");
    
    this.router.navigate(['register']);
  }

}
