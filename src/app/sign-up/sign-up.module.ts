import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../_shared/_shared.module';
import { SignUpRoutingModule } from './sign-up-routing.module';

import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpSuccessComponent } from './sign-up-success/sign-up-success.component';
import { SignUpFailedComponent } from './sign-up-failed/sign-up-failed.component';
import { SignUpConfirmComponent } from './sign-up-confirm/sign-up-confirm.component';
import { SignUpThanksComponent } from './sign-up-thanks/sign-up-thanks.component';

@NgModule({
  imports: [
    CommonModule,
    SignUpRoutingModule,
    SharedModule
  ],
  declarations: [SignUpComponent, SignUpSuccessComponent, SignUpFailedComponent, SignUpConfirmComponent, SignUpThanksComponent]
})
export class SignUpModule { }
