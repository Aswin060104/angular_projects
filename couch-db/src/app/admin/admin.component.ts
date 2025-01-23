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
  editingIndex : number = -1;
  editCustomerId : string = "";
  editRevId : string = "";
  editUserName : string = "";
  editEmail : string = "";
  staticPassword : string = "";

  registeredUsers : {id : string, rev : string, userName : string, email : string}[] = [];

  ngOnInit(){
    this.getAllRegisteredUser();
  }

  getAllRegisteredUser(){
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

  editDetails(userId : string, revId: string, index : number){
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
            this.editingIndex = index;
            this.editCustomerId = e.doc._id;
            this.editRevId =e.doc._rev;
            this.editUserName = e.doc.data.userName;
            this.editEmail = e.doc.data.email;
            this.staticPassword = e.doc.data.password;
          }
        })
        console.log(this.editUserName);
        console.log(this.editEmail);
      },
       error : (error) => {
        alert("Error while editing data")
       }
    })
  }

  saveDetails(){
    let updatingId : string = this.editCustomerId;
    let updatingRevID : string = this.editRevId;
    
    let updatedData = {
      userName : this.editUserName,
      email :  this.editEmail,
      password : this.staticPassword
    }
    this.dbConnector.updateCustomerDetails(updatingId, updatingRevID, updatedData).subscribe({
      next : () =>{
        console.log("Successfully updated");
        this.getAllRegisteredUser();
      },
      error : (error) => {
        console.log("Error during Updation");
        console.log(error);
      }
    });
    this.registeredUsers[this.editingIndex - 1].userName = this.editUserName;
    this.registeredUsers[this.editingIndex - 1].email = this.editEmail;
    this.showEditingID = "";

    this.registeredUsers.splice(0,this.registeredUsers.length);
   
  }

  cancelUpdate(){
    this.showEditingID = "";
  }

  deleteUser(userId : string, revId : string){
    let indexToDelete  : number = - 1;
    this.registeredUsers.forEach( (e,i) => {
      if(e.id == userId)
        indexToDelete = i;
    });
    if(indexToDelete !== undefined && indexToDelete !== -1)
      this.registeredUsers.splice(indexToDelete,1);
    console.log(userId, revId);
    
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
