import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CouchdbService } from './couch_db.service'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [CouchdbService, HttpClient]
})
export class AppComponent {
  title = 'couch_db';

  employeeId:string=''
  employeeName:string=''
  email:string=''
  phoneNumber:string=''
  employees:any[] = [];
  employeeEdit:any=null;

  constructor(private couch:CouchdbService){}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  create(){
    const data:any={
      _id:`employee_1000_${this.employeeId}`,
      data:{
        employeeId: this.employeeId,
        employeeName: this.employeeName,
        email: this.email,
        phoneNumber: this.phoneNumber
      }
    }
      this.couch.addEmployee(data).subscribe({
        next:(response)=>{
          alert('Added');
          this.employees.push(data.data);
          this.resetForm();
        },
        error:(error)=>{
          alert('Err');
        }
      });
  }

  resetForm() {
    this.employeeId = '';
    this.employeeName = '';
    this.email = '';
    this.phoneNumber = '';
  }

  update(){
    if(this.employeeEdit){
      const updatedData ={
        employeeId: this.employeeId,
        employeeName: this.employeeName,
        email: this.email,
        phoneNumber: this.phoneNumber
      };

      this.couch.updateEmployee(this.employeeEdit._id, this.employeeEdit._rev, updatedData).subscribe({
        next:(response)=>{
          alert('updated');
          const index= this.employees.findIndex(emp => emp._id ===this.employeeEdit._id);
          if(index !== -1){
            this.employees[index] = {...updatedData,_id:this.employeeEdit._id, _rev:response.rev};
          }
          this.resetForm();
          this.employeeEdit=null;
        },
        error:(error)=>{
          alert('Error Updating');
        }
      });
    }
  }

  deleteEmployeebyId(_id:string, _rev:string){
    this.couch.deleteEmployee(_id, _rev).subscribe({
      next:(response)=>{
        alert('Deleted');
        this.employees = this.employees.filter(employee=>employee._id !== _id);
      },
      error:(error)=>{
        alert('Erroe deleting');
      }
    });
  }

  getAllEmployees(){
    this.couch.getEmployees().subscribe({
      next:(response)=>{
        this.employees = response.rows.map((row:any)=>({
          ...row.doc.data,
          _rev: row.doc._rev,
          _id: row.doc._id
        }));
      },
      error:(error)=>{
        alert('Error fetching');
      }
    });
  }

  updateEmployee(employee:any){
    this.employeeId=employee.employeeId;
    this.employeeName = employee.employeeName;
    this.email = employee.email;
    this.phoneNumber = employee.phoneNumber;
    this.employeeEdit = employee;
  }

}
