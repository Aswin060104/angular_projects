import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { CourseContainerComponent } from './container/course-container/course-container.component';
import { CalenderContainerComponent } from './container/calender-container/calender-container.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ProfileComponent,
    NavbarComponent,
    ContainerComponent,
    CourseContainerComponent,
    CalenderContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
