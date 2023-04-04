import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
import { LandingComponent } from './views/landing/landing.component';
import { ProfileComponent } from './views/profile/profile.component';
import { RoutingGuard } from './guard/routing.guard';
const routes = [
    // admin views
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [RoutingGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'settings', component: SettingsComponent },
            { path: 'tables', component: TablesComponent },
            { path: 'logistic', component: LogisticComponent },
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
    { path: 'profile', component: ProfileComponent, canActivate: [RoutingGuard] },
    { path: 'landing', component: LandingComponent, canActivate: [RoutingGuard] },
    { path: '', component: AuthComponent, canActivate: [RoutingGuard] },
    { path: '**', component: AuthComponent, pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map