import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafic1Component } from './grafic1/grafic1.component';
import { ProgressComponent } from './progress/progress.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'grafics', component: Grafic1Component },
            { path: 'progress', component: ProgressComponent },
            { path: '',  pathMatch: 'full', redirectTo: '/dashboard' }
        ]
    }
];

export const PAGES_ROUTING = RouterModule.forChild(pagesRoutes);
