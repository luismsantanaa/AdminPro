import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '../shared/shared.module';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafic1Component } from './grafic1/grafic1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTING } from './pages.routes';

@NgModule({
    imports: [
        SharedModule,
        PAGES_ROUTING
    ],
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafic1Component
        ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafic1Component
        ],
    providers: [],
})
export class PagesModule { }
