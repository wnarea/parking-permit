import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from "./app.routes";
import { LoginComponent } from './public/auth/login.component';
import { AuthenticationService } from "./service/authentication.service";
import { HomeComponent } from './public/home.component';
import { AboutComponent } from './public/about.component';
import { SignupComponent } from './public/auth/signup.component';
import { LandingHomeComponent } from './public/landing-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    SignupComponent,
    LandingHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
