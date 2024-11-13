import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { SidebarComponent } from './head/sidebar/sidebar.component';
import { PrefixValuePipe } from './pipes/prefixValuePipe';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    SidebarComponent,
    PrefixValuePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
