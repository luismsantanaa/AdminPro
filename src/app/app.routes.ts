import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafic1Component } from './pages/grafic1/grafic1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';

const ROUTES: Routes = [
        {
            path: '',
            component: PagesComponent,
            children: [
                { path: 'dashboard', component: DashboardComponent },
                { path: 'grafics', component: Grafic1Component },
                { path: 'progress', component: ProgressComponent },
                { path: '',  pathMatch: 'full', redirectTo: '/dashboard' }
            ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: PagenotfoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: true});
