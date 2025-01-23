import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn : 'root'
})
export class CouchDbService{
    readonly baseURL='https://192.168.57.185:5984/test_db';
    readonly userName= 'd_couchdb';
    readonly password= 'Welcome#2';
  
    constructor(private http:HttpClient) { }
  
    private headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.userName + ':' + this.password),
      'Content-Type': 'application/json'
    });   

    register(data : {_id : string, data : {userName : string, email : string, password : string}}){
        const url = `${this.baseURL}`;
        return this.http.post(url, data, { headers : this.headers});
    }
    
    getAllUsers() : Observable<any>{
        const url= `${this.baseURL}/_all_docs?include_docs=true`;
        console.log("Fetching values");
        return this.http.get<any>(url,{headers:this.headers});
      }

      deleteUser(userId : string, revId : string){
        const url = `${this.baseURL}/${userId}?rev=${revId}`;
        console.log(url);
        return this.http.delete<any>(url,{headers:this.headers});
      }
}