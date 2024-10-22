import { Component, inject, Inject } from '@angular/core';
import { dataStorageService } from '../dataStorageService/dataStorage.service';
import { user } from '../model/user';
import {  ds } from 'src/app/app.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  dataServiceAdmin = inject(ds);
  // constructor(private dataServiceAdmin : dataStorageService){
    
  // }

  user : user[] = this.dataServiceAdmin.returnAllUser();

}
