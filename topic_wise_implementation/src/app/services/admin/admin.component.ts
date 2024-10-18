import { Component } from '@angular/core';
import { dataStorageService } from '../dataStorageService/dataStorage.service';
import { user } from '../model/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {

  constructor(private dataServiceAdmin : dataStorageService){
    
  }

  user : user[] = this.dataServiceAdmin.returnAllUser();

}
