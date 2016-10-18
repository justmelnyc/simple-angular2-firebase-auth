import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy,
         HashLocationStrategy } from '@angular/common';

import {FIREBASE_PROVIDERS,
 defaultFirebase,
 AngularFire,
 AuthMethods,
 AuthProviders,
 firebaseAuthConfig} from 'angularfire2';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { routing } from './routes/routes';
import { LoginComponent } from './components/login/login.component';
import { AUTH_GUARD_PROVIDERS } from './services/auth/auth-guard.service';
import { AUTH_SERVICE_PROVIDER } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    FIREBASE_PROVIDERS, defaultFirebase({
        apiKey: "------------------------------------",
        authDomain: "-----------------------------",
        databaseURL: "------------------------------",
        storageBucket: "---------------------------------------"
      }),
      AUTH_GUARD_PROVIDERS,
      AUTH_SERVICE_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
