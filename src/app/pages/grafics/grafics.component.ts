import { Component, OnInit } from '@angular/core';
import { GraficDataService } from 'src/app/services/Settings/shared/grafic-data.service';
import { IGraficData } from 'src/app/interfaces/grafic-data.interface';


@Component({
  selector: 'app-grafics',
  templateUrl: './grafics.component.html',
  styles: [
  ]
})
export class GraficsComponent implements OnInit {

  data: IGraficData[] = [];

  constructor(public dataService: GraficDataService) { }

  graficos: any = {
    grafico1: {
      labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      data:  [24, 30, 46],
      type: 'doughnut',
      leyenda: 'El pan se come con'
    },
    grafico2: {
      labels: ['Hombres', 'Mujeres'],
      data:  [4500, 6000],
      type: 'doughnut',
      leyenda: 'Entrevistados'
    },
    grafico3: {
      labels: ['Si', 'No'],
      data:  [95, 5],
      type: 'doughnut',
      leyenda: '¿Le dan gases los frijoles?'
    },
    grafico4: {
      labels: ['No', 'Si'],
      data:  [85, 15],
      type: 'doughnut',
      leyenda: '¿Le importa que le den gases?'
    },
  };

  ngOnInit(): void {  }

}
