import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';


//import { AuthGuard } from './Auth/AuthGuard';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../services/auth/auth-guard.service';


export const AppRoutes = [
  { path: 'home', component: HomeComponent, canActivate : [AuthGuardService]},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
]

export const routing = RouterModule.forRoot(AppRoutes);
