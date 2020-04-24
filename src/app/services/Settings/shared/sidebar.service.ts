import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: any = {
    titulo: 'Principal',
    icono: 'mdi mdi-gauge',
    subMenu: [
      { titulo: 'Dashboard', url: '/dashboard'},
      { titulo: 'Graficas', url: '/grafics'},
      { titulo: 'ProgressBar', url: '/progress'}
    ]
  };

  constructor( private http: HttpClient ) { }
}
