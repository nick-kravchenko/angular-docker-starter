import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, APP_ID, provideZoneChangeDetection } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './_shared/_shared.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { AuthService } from './_services/auth.service';
import { AuthInterceptor } from './_interceptors/auth-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    provideZoneChangeDetection(),
    { provide: APP_ID, useValue: 'angular-docker-starter' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (us: AuthService) => function() { return us.init(); },
      deps: [ AuthService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
