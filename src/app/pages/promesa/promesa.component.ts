import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styles: [
  ]
})
export class PromesaComponent implements OnInit {

  constructor() {

  this.contarTres().then(
      () => console.log('Temino la promesa') )
      .catch( error => console.log('No ha terminado la promesa', error));
   }

  ngOnInit(): void {  }

  contarTres() {
    const promesa = new Promise( (resolve, reject) => {

      let contador = 0;

      const intervalo = setInterval( () => {
        contador += 1;
        if (contador === 3) {
          resolve( true );
          clearInterval(intervalo);
        }else { console.log(contador); }
      }, 1000 );
    });

    return promesa;
  }

}
