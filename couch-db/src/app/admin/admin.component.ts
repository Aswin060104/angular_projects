import { Component, inject } from '@angular/core';
import { CouchDbService } from '../services/couchdb.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  dbConnector : CouchDbService = inject(CouchDbService);
  showEditingID : string = "";
  editUserName : string = "";
  editEmail : string = "";

  registeredUsers : {id : string, rev : string, userName : string, email : string}[] = [];

  ngOnInit(){
    this.dbConnector.getAllUsers().subscribe({
      next : (response) => {
        response.rows.forEach( (e: {
          doc:{ data : { userName: string, email: string, password: string },
          _id : string,
          _rev : string,
        } ,
          key: string,
          value: { rev: string }
        }) => {
          console.log(e.doc._rev);
          
          console.log(e.doc._id);
        console.log(e);
        
          
          this.registeredUsers.push({id : e.doc._id, rev : e.doc._rev, userName : e.doc.data.userName, email : e.doc.data.email});
        });;
      },
      error : (error) => {
        alert("Error while fetching data in admin")
      }
    });
  }


  editDetails(userId : string, revId: string){
    console.log(userId);
    
    
    this.showEditingID = userId;
    
    console.log(this.showEditingID);
    this.dbConnector.getAllUsers().subscribe({
      next : (response) => {
        response.rows.filter((e: {
          doc:{ data : { userName: string, email: string, password: string },
          _id : string,
          _rev : string,
        } ,
          key: string,
          value: { rev: string }
        }) => {
          if(e.doc._id == userId){
            this.editUserName = e.doc.data.userName;
            this.editEmail = e.doc.data.email;
          }
        })
      },
       error : (error) => {
        alert("Error while editing data")
       }
    })
  }

  deleteUser(userId : string, revId : string){
    let indexToDelete  : number = - 1;
    this.registeredUsers.forEach( (e,i) => {
      if(e.id == userId)
        indexToDelete = i;
    });
    if(indexToDelete !== undefined && indexToDelete !== -1)
      this.registeredUsers.splice(indexToDelete,1);
    this.dbConnector.deleteUser(userId, revId).subscribe({
      next : (respone) => {
        alert("Deleted Successfully")
      },
      error : (error) => {
        alert("Error while deleting")
      }
    })
  }
}
