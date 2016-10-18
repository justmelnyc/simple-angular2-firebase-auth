import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router}    from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { AngularFire, AuthProviders, AuthMethods, FIREBASE_PROVIDERS, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {
  public isLoggedIn;

  public usersCollection;
  public userData = null;

  constructor (public http : Http,  private router: Router, public af: AngularFire) {
    this.isLoggedIn = false;

    this.af.auth.subscribe(auth => {
      if(auth != null) {
        this.userData = auth;
        this.isLoggedIn = true;
      }else{
        this.userData = null;
        this.isLoggedIn = false;
         this.router.navigate(['/login']);
      }
    });
  }


  login(username, password) {
    var self = this;
    this.af.auth.login({ email : username, password : password },
   { provider: AuthProviders.Password, method: AuthMethods.Password })
   .catch(function(err) {

   })
  }

  loginWithFacebook () {
    this.af.auth.login({provider: AuthProviders.Facebook,
    method: AuthMethods.Popup,
    scope: ['email']})
  }

  loginWithGoogle () {
    this.af.auth.login({provider: AuthProviders.Google,
    method: AuthMethods.Popup,
    scope: ['email'] })
  }


  signup(username, password) {
    var self = this;
    this.af.auth.createUser({ email : username, password : password })
    .catch(function(err) {
    })
  }

  checkLogin() {
   return this.af.auth
     .take(1)
     .map((authState: FirebaseAuthState) => !!authState)
     .do(authenticated => {
       if (!authenticated) this.router.navigate(['/login']);
     });
  }


  logout() {
    console.log("login logout");
    this.af.auth.logout()

  }
}

export const AUTH_SERVICE_PROVIDER = [
  AuthService
];
