import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGraficData } from '../interfaces/grafic-data.interface';


@Injectable({
  providedIn: 'root'
})
export class GraficDataService {

  public infoGrafic: IGraficData[] = [];
  cargada: boolean = false;

  constructor(private http: HttpClient) { this.cargarInfo(); }

  cargarInfo() {
   this.http.get('../../assets/data/data-grafic.json')
   .subscribe((response: IGraficData[]) => {
      this.infoGrafic = response;
      console.log(this.infoGrafic);
   });
  }

}
