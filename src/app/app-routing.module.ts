import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './_guards/auth.guard';
import { AboutComponent } from './about/about.component';
import { UnauthGuard } from './_guards/unauth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'sign-in',
    loadChildren: './sign-in/sign-in.module#SignInModule',
    canActivate: [UnauthGuard]
  },
  {
    path: 'sign-up',
    loadChildren: './sign-up/sign-up.module#SignUpModule',
    canActivate: [UnauthGuard]
  },
  {
    path: 'restore-password',
    loadChildren: './restore-password/restore-password.module#RestorePasswordModule',
    canActivate: [UnauthGuard]
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
