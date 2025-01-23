import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CouchdbService } from './couch_db.service';
import { HttpHandler } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), CouchdbService]
};
