import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafic1Component } from './pages/grafic1/grafic1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const ROUTES: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'grafics', component: Grafic1Component },
    { path: 'progress', component: ProgressComponent },

    { path: '**', component: PagenotfoundComponent },
    { path: '',  component: DashboardComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: true});

