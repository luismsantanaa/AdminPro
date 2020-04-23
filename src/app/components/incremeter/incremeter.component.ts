import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incremeter',
  templateUrl: './incremeter.component.html',
  styles: [
  ]
})
export class IncremeterComponent implements OnInit {

  @ViewChild('txtProgreso') txtProgreso: any;
  @Input() progreso: number = 50;
  @Input() leyenda: string = 'Leyenda';

  @Output() CambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChange( newValue: number) {

    if (newValue >= 100) {
      this.progreso = 100;
     } else if (newValue <= 0  ) {
       this.progreso = 0;
     } else {
       this.progreso = newValue;
     }

    this.txtProgreso.nativeElement.value = Number( this.progreso );

    this.CambioValor.emit(this.progreso);
  }

  cambiarValor(n: number) {

    if (this.progreso >= 100 && n > 0) {
     return;
    }
    if (this.progreso <= 0  && n < 0) {
      return;
    }

    this.progreso = this.progreso + n;

    this.CambioValor.emit(this.progreso);

    // tslint:disable-next-line: no-unused-expression
    this.txtProgreso.nativeElement.focus();

  }

}
