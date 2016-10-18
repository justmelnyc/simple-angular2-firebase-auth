import { Injectable }             from '@angular/core';
import { CanActivate,
         Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { AuthService }            from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    // Not using but worth knowing about
    next:  ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.authService.checkLogin();
  }
}

export const AUTH_GUARD_PROVIDERS = [
  AuthGuardService
];
