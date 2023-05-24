import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// layouts
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';

// admin views
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { LogisticComponent } from './views/admin/logistic/logistic.component';
import { SettingsComponent } from './views/admin/settings/settings.component';
import { TablesComponent } from './views/admin/tables/tables.component';

// auth views
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';

// no layouts views
import { IndexComponent } from './views/index/index.component';
import { LandingComponent } from './views/landing/landing.component';
import { ProfileComponent } from './views/profile/profile.component';
import {RoutingGuard} from './guard/routing.guard';
import {DeliveryManComponent} from './components/logistic/delivery-man/delivery-man.component';
// import {APP_BASE_HREF} from "@angular/common";

const routes: Routes = [
  // admin views
  {
    path: 'admin',
    component: AdminComponent,
    canActivate:[RoutingGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'logistic', component: LogisticComponent },
      { path: 'delivery', component: DeliveryManComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  // auth views
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  // no layout views
  { path: 'profile', component: ProfileComponent,canActivate:[RoutingGuard] },
  { path: 'landing', component: LandingComponent,canActivate:[RoutingGuard] },
  { path: '', component: AuthComponent,canActivate:[RoutingGuard]},
  { path: '**', component: AuthComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: 'https://wilson1234567891962.github.io/Andes---ProyectoWebMovil/',
    useValue: ''
  }]
})
export class AppRoutingModule {}
