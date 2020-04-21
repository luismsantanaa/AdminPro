import { RouterModule, Routes } from '@angular/router';

import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';

const ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: PagenotfoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: true});
