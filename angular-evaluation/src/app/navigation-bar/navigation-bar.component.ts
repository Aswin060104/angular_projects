import { Component, inject, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from '../services/users.service';
import { ProductsDetails } from '../services/all-products.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  router: Router = inject(Router);
  userService: UserDetails = inject(UserDetails);
  productDetailService : ProductsDetails = inject(ProductsDetails);
  
  title = 'reactive-forms';
  registration: boolean = false;
  userNotFound: boolean = false;
  showLogOut : boolean = false;
  currentUser : string = this.userService.currentUser;
  
  newUserView: boolean = false;
  registerView: boolean = false;

  registeredUser: { name: string, password: string }[] = this.userService.registeredUsers;

  showRegistration() {    
    this.registration = !this.registration;
    if(this.userService.currentUser != ""){
      this.registration = false;
      this.showLogOut = true;
      console.log("Showing " + this.showLogOut);
      
    }
  }

  @ViewChild('validationForm')
  form!: NgForm;

  showLogin: boolean = false;

  login() {
    this.showLogin = true;
    console.log(this.showLogin);
  }

  validateUser() {
    console.log(this.form);
    this.showLogin = false;

    let currentName = this.form.form.controls['userName'].value;
    let currentPassword = this.form.form.controls['password'].value;
    
    let checkUser = this.registeredUser.filter(e => e.name == currentName && e.password == currentPassword).length;
    console.log(checkUser);
    if(currentName != this.userService.currentUser){
      this.productDetailService.purchasedProducts.splice(0);
      console.log("Hello");
    }
    if (checkUser == 1) {
      this.registration = false;
      this.userService.currentUser = currentName;
      let adminUser = this.registeredUser.find(e => e.name == currentName && e.password == currentPassword);
      if(adminUser.name == "Aswin" && adminUser.password == "aswin")
        this.router.navigate(['admin'])
      else
        this.router.navigate(['billing'])
    }
    else {
      this.userNotFound = true;
    }
  }

  register() {
    this.resetError();
    if (this.registerView === true) {
      let currentName = this.form.form.controls['userName'].value;
      let currentPassword = this.form.form.controls['password'].value;

      if (this.form.form.valid && currentName.toString().length != 0 && currentPassword.toString().length != 0) {
        this.userService.addNewUser(currentName, currentPassword);
        this.form.resetForm();
        alert("Registration Successful")
        this.registerView = false;
      }
      else {
        alert("Invalid Values")
      }
    }
    else {
      this.registerView = true;
      this.form.resetForm();
    }
  }

  backToRegister(){
    this.registerView= false;
  }

  logout(logoutValue : string){
    if(logoutValue == "yes"){
      this.showLogOut = false;
      this.router.navigate(['']);
    }
    else{
      this.showLogOut = false;      
    }
  }
  resetError() {
    this.userNotFound = false;
  }
}
