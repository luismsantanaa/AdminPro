import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficsComponent } from './grafics/grafics.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'grafics', component: GraficsComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'account-settings', component: AccountSettingComponent },
            { path: '',  pathMatch: 'full', redirectTo: '/dashboard' }
        ]
    }
];

export const PAGES_ROUTING = RouterModule.forChild(pagesRoutes);
