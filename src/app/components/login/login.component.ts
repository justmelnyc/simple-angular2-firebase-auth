import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router}    from '@angular/router';
import { AngularFire, firebaseAuthConfig } from 'angularfire2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, public af: AngularFire, private router: Router,) {
    this.af.auth.subscribe(auth => {
      if(auth != null) {
        this.router.navigate(['/home']);
      }
    });
   }

  ngOnInit() {
  }

  loginWithFacebook() {
    this.auth.loginWithFacebook();
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

}
