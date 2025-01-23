import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class CouchdbService {

    readonly baseURL='https://192.168.57.185:5984/test_db';
    readonly userName= 'd_couchdb';
    readonly password= 'Welcome#2';
  
    constructor(private http:HttpClient) { }
  
    private headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.userName + ':' + this.password),
      'Content-Type': 'application/json'
    });
  
    addEmployee(data:any){
      const url= `${this.baseURL}`;
      return this.http.post<any>(url, data, {headers:this.headers});
    }

    getEmployees(){
      const url= `${this.baseURL}/_all_docs?include_docs=true`;
      return this.http.get<any>(url,{headers:this.headers});
    }

    updateEmployee(_id:string, _rev: string, data:any){
      const url= `${this.baseURL}/${_id}`;
      return this.http.put<any>(url,{...data,_id,_rev}, {headers:this.headers});
    }

    deleteEmployee(_id:string, _rev:string){
      const url = `${this.baseURL}/${_id}?rev=${_rev}`;
      return this.http.delete<any>(url,{headers:this.headers});
    }

  }