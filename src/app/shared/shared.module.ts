import { NgModule } from '@angular/core';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
    imports: [ ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        PagenotfoundComponent
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        PagenotfoundComponent
    ],
    providers: [],
})
export class SharedModule { }
