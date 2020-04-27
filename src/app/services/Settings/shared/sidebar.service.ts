import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMenu, ISubMenu } from '../../../interfaces/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[];

  constructor() {
    this.getMenu();
  }

  getMenu() {
    return (this.menu = [
      {
        titulo: 'Principal',
        icono: 'mdi mdi-gauge',
        subMenu: [
          { titulo: 'Dashboard', url: '/dashboard', icono: 'mdi mdi-view-dashboard' },
          { titulo: 'Graficas', url: '/grafics', icono: 'mdi mdi-chart-areaspline' },
          { titulo: 'ProgressBar', url: '/progress', icono: 'mdi mdi-chart-arc' },
          { titulo: 'Promesas', url: '/promess', icono: 'mdi mdi-clock-alert' }
        ]
      },
    ]);
  }
}
