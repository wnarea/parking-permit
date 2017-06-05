import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./public/home.component";
import { LoginComponent } from "./public/auth/login.component";
import { AboutComponent } from "./public/about.component";
import { SignupComponent } from "./public/auth/signup.component";
import { LandingHomeComponent } from './public/landing-home.component';

const homeRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: '', component: LandingHomeComponent}

    ]
  }
];

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      ...homeRoutes,
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
