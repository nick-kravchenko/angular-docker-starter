import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpConfirmComponent } from './sign-up-confirm/sign-up-confirm.component';
import { SignUpThanksComponent } from './sign-up-thanks/sign-up-thanks.component';
import { SignUpSuccessComponent } from './sign-up-success/sign-up-success.component';
import { SignUpFailedComponent } from './sign-up-failed/sign-up-failed.component';

const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'confirm/:token', component: SignUpConfirmComponent },
  { path: 'thanks', component: SignUpThanksComponent },
  { path: 'success', component: SignUpSuccessComponent },
  { path: 'failed', component: SignUpFailedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
