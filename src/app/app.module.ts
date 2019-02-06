import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './_shared/_shared.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { UserService } from './_services/user.service';
import { AuthInterceptor } from './_interceptors/auth-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'angular-docker-starter'}),
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (us: UserService) => function() { return us.init(); },
      deps: [ UserService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
