import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Modules
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTING } from './pages.routes';
import { IncremeterComponent } from '../components/incremeter/incremeter.component';
import { DonaGraficComponent } from '../components/grafic/dona-grafic/dona-grafic.component';
import { GraficsComponent } from './grafics/grafics.component';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTING,
        FormsModule,
        ChartsModule,
        HttpClientModule
    ],
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        IncremeterComponent,
        DonaGraficComponent,
        GraficsComponent
        ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        GraficsComponent
        ],
    providers: [],
})
export class PagesModule { }
