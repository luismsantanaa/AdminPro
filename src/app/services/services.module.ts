import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  GraficDataService,
  SettingsService,
  SidebarService,
  SharedService,
} from './service.index';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    GraficDataService,
    SettingsService,
    SidebarService,
    SharedService,
  ],
})
export class ServicesModule {}
