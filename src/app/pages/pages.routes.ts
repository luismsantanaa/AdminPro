import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficsComponent } from './grafics/grafics.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesaComponent } from './promesa/promesa.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'grafics', component: GraficsComponent, data: { titulo: 'Grafics' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Progres' } },
            { path: 'promess', component: PromesaComponent, data: { titulo: 'Promess' } },
            { path: 'account-settings', component: AccountSettingComponent, data: { titulo: 'Account Settings' } },
            { path: '',  pathMatch: 'full', redirectTo: '/dashboard' }
        ]
    }
];

export const PAGES_ROUTING = RouterModule.forChild(pagesRoutes);
