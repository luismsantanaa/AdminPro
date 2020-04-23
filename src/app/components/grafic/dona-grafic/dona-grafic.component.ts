import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-dona-grafic',
  templateUrl: './dona-grafic.component.html',
  styles: [
  ]
})
export class DonaGraficComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('gLeyenda') graficLeyenda: string;
  // tslint:disable-next-line: no-input-rename
  @Input('gLabels') doughnutChartLabels: Label[];
  // tslint:disable-next-line: no-input-rename
  @Input('gData') doughnutChartData: MultiDataSet;
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void { }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
